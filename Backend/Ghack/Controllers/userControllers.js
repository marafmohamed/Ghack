const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const CreateToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "10d" });
};
const signupUser = async (req, res) => {
  const { Name, Email, company } = req.body;
  try {
    const user = await User.login(Name, Email, company);
    const token = CreateToken(user._id);
    res.status(200).json({ Email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const modifyUserRole = async (req, res) => {
  const { id, role } = req.body;
  try {
    if(!role || !id){
      res.status(400).json({error:"all field are required"});
    }
    if (role == "admin" && req.user.role !== "admin") {
      return res.status(401).json({ error: "only admins can change users roles" });
    }
    const user = await User.findByIdAndUpdate(id, { role });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const Searchuser = async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { Name: { $regex: req.query.search, $options: "i" } },
          { Email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  try {
    const result = await User.find(keyword).find({
      _id: { $ne: req.user._id },
    });
    res.status(200).send(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const UserInfo = (req, res) => {
  res.status(200).json(req.user);
};

module.exports = {
  signupUser,
  Searchuser,
  UserInfo,
  modifyUserRole,
};
