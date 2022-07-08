// signIncontroller
const { userModel } = require("../models");
const jwt = require("jsonwebtoken");
const { compareSync } = require("bcrypt");
const dotenv = require("dotenv").config();

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: maxAge });
};

const signUpController = async (req, res, next) => {
  const { email, password, name } = await req.body;
  const user = await userModel();

  try {
    const users = await user.create({
      name,
      email,
      password,
    });
    console.log(users);
    //token
    const token = createToken(users._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ users });
  } catch (err) {
    res.status(400).json(err.code);
  }

  next();
};

//login_post
const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  const users = await user.login();
};

module.exports = {
  signUpController,
};
