const express = require("express");
const mongoose = require("mongoose");
const {getAllDepartements} = require("./Controllers/departementControllers");
const Mail = require("./models/mailModel");
const Imap = require("imap");
require("dotenv").config();
const { simpleParser } = require("mailparser");
const { default: axios } = require("axios");
const app = express();
const port = 8000;
const password = process.env.MOT_DE_PASSE;
const imapConfig = {
  user: "ghackcourrier@gmail.com",
  password,
  host: "imap.gmail.com",
  port: 993,
  tls: true,
  tlsOptions: {
    rejectUnauthorized: false,
  },
};

// Create an IMAP instance
const imap = new Imap(imapConfig);

imap.once("ready", function () {
  fetchEmails();
});

imap.once("error", function (err) {
  console.log(err);
});

imap.connect();

// Function to fetch and process new emails
 const fetchEmails = ()=> {
  imap.openBox("INBOX", false, (err, mailbox) => {
    if (err) throw err;

    imap.search(["UNSEEN"], (err, results) => {
      if (err) throw err;

      results.forEach((num) => {
        const fetch = imap.fetch(num, { bodies: "" });

        fetch.on("message", (msg) => {
          msg.on("body", (stream) => {
            simpleParser(stream, (err, parsed) => {
              if (err) throw err;
              getAllDepartements().then((departements) => {
                  const departementNames = departements.map((departement) => departement.name);
                  axios.post("/mail_classification/text", {
                    content: parsed.text,
                    categories: departementNames,
                  }).then((response) => {
                    if (parsed.attachments.length > 0) {
                      Mail.create({
                        subject :parsed.subject,
                        content: parsed.text,
                        sender :parsed.from.text,
                        departement: response.result,
                        attachement : parsed.attachments,
                      });
                    } else {
                      Mail.create({ subject:parsed.subject, content:parsed.text, sender:parsed.from.text, departement: response.result});
                    }
                  })
              }) ;
            });
          });
        });

        fetch.once("end", () => {
          imap.addFlags(num, "SEEN", (err) => {
            if (err) throw err;
          });
        });
      });
    });
  });
}

// Check new emails every 60 seconds
setInterval(fetchEmails, 6000);

// Start the Express server
mongoose.connect(process.env.URI).then(() => {
  app.listen(port, () => {
    console.log(
      "connected to the db and listening at port : ",
    port
    );
  });
});
