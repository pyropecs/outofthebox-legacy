// const userConnection = require("../db/config");
const { Schema, createConnection } = require("mongoose");
const dotenv = require("dotenv").config();
const { isEmail } = require("validator");
const userConnection = createConnection(process.env.MONGODB1_URI);
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

const user = userConnection.model("user", userSchema);

module.exports = {
  user,
};
