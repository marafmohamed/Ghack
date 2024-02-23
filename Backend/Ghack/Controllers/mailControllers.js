const Mail = require("../models/mailModel");
const CreateMail = async (req, res) => {
  const { subject, message, from, departement, attachement } = req.body;
  try {
    if (!subject || !message || !from || !departement) {
      return res.status(400).json({ error: "All fields are required" });
    }
    let mail;
    if (attachement) {
      mail = await Mail.create({
        subject,
        message,
        from,
        departement,
        attachement,
      });
    } else {
      mail = await Mail.create({ subject, message, from, departement });
    }
    res.status(200).json(mail);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAllMails = async (req, res) => {
  try {
    const mails = await Mail.find({});
    res.status(200).json(mails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getDepartementMails = async (req, res) => {
  const departement = req.user.departement;
  try {
    // if (req.user.departement !== departement) {
    //   res
    //     .status(400)
    //     .json({
    //       error:
    //         "only users from the departement can access the mails of the departement",
    //     });
    // }
    if (req.user.role !== "respo") {
      res
        .status(400)
        .json({ error: "only respo can access the mails of the departement" });
    }
    const mails = await Mail.find({ departement });
    res.status(200).json(mails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const MailSeen = async (req, res) => {
  const { mail_id } = req.body;
  try {
    const updatedMail = await Mail.findByIdAndUpdate(mail_id, { status: true });
    res.status(200).json(updatedMail);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
module.exports = {
  CreateMail,
  getAllMails,
  getDepartementMails,
  MailSeen,
};
