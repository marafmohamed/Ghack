const express = require("express");
const User = require("../models/userModel");
const {
  signupUser,
  Searchuser,
  UserInfo,
  modifyUserRole,
} = require("../Controllers/userControllers");
const { requireAuth } = require("../requireAuth/requireAuth");
const router = express.Router();
router.post("/login", signupUser);
router.post("/addUser", requireAuth, async (req, res) => {
  if (req.user.role !== "admin") {
    res.status(400).json({ error: "only admin can add a user" });
  }
  const { Name, Email, role, departement, company } = req.body;
  try {
    if (!Name || !Email || !role || !company) {
      res.json(400).json({ error: "all fields are required" });
    }
    if (!departement && role !== "admin") {
      res.json(400).json({ error: "departement is required" });
    }
    const exist = await User.findOne({ Email });
    if (exist) {
      res.status(400).json({ error: "email already in use" });
    }
    let user = {
      Name,
      Email,
      role,
      company,
      departement,
    };
    user = await User.create(user);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.route("/search").get(requireAuth, Searchuser);
router.route("/UserInfo").get(requireAuth, UserInfo);
router.route("/modifyUserRole").put(requireAuth, modifyUserRole);
module.exports = router;
