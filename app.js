const express = require("express");
const mongoose = require("mongoose");
const Imap = require("imap");
require("dotenv").config();
const { simpleParser } = require("mailparser");
const app = express();
const port = 3000;
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
function fetchEmails() {
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
              console.log(
                parsed
              );
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
  app.listen(process.env.PORT, () => {
    console.log(
      "connected to the db and listening at port : ",
    port
    );
  });
});
