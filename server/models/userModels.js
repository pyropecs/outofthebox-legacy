// const userConnection = require("../db/config");
const { Schema } = require("mongoose");
const dotenv = require("dotenv").config();
const { isEmail } = require("validator");
const { connect } = require("../controllers/connect");
const bcrypt = require("bcrypt");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "please enter a name"],
    },
    email: {
      type: String,
      required: [true, "please enter a name"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "please enter the valid email"],
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "please enter more than 6 character"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
  next();
});
async function userModel() {
  const { userConnection } = await connect();
  const user = userConnection.model("user", userSchema);
  return user;
}

module.exports = {
  userModel,
};
