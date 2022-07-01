// signIncontroller
const { user } = require("../models");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: maxAge });
};

const signUpController = async (req, res, next) => {
  const { email, password, name } = await req.body;

  try {
    const users = await user.create({
      name,
      email,
      password,
    });

    //token
    const token = createToken(users._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ users: users.name });
  } catch (err) {
    res.json(err.message);
  }

  next();
};

module.exports = {
  signUpController,
};
