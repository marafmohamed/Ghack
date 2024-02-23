const express = require("express");
const {
  signupUser,
  Searchuser,
  UserInfo,
  modifyUserRole,
} = require("../Controllers/userControllers");
const { requireAuth } = require("../requireAuth/requireAuth");
const router = express.Router();
router.post("/login", signupUser);
router.route("/search").get(requireAuth, Searchuser);
router.route("/UserInfo").get(requireAuth, UserInfo);
router.route("/modifyUserRole").put(requireAuth, modifyUserRole);
module.exports = router;