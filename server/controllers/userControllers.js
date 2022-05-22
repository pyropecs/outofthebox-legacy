// signIncontroller
const { user } = require("../models");
const morgan = require("morgan");

const signUpController = async (req, res, next) => {
  const users = await user.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  res.json({
    users,
  });

  next();
};

const getUsers = async (req, res, next) => {
  const getUsers = await user.find();

  res.send(getUsers);
};
module.exports = {
  signUpController,
  getUsers,
};
