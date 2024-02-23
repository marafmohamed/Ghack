const express = require("express");
const { CreateMail, getAllMails, getDepartementMails , MailSeen} = require("../Controllers/mailControllers");
const { requireAuth } = require("../requireAuth/requireAuth");
const router = express.Router();
router.get("/allMails", requireAuth,getAllMails);
router.post("/addMail", CreateMail);
router.get("/getDepartementMails", requireAuth,getDepartementMails);
router.put("/SeenMail", requireAuth,MailSeen);
module.exports = router;