const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const UserModel = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    company: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    departement: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
UserModel.statics.login = async function (Name, Email, company) {
  if (!Name || !Email || !company) {
    throw new Error("all fields are required");
  }
  if (!validator.isEmail(Email)) {
    throw new Error("Email does't exist");
  }
  const User = await this.findOne({ Email ,Name });
  if (!User) {
    throw new Error("Email does't exist");
  }
  return User;
};

module.exports = mongoose.model("User", UserModel);
