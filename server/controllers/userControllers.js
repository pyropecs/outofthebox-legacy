// signIncontroller
const { user } = require("../models");
const morgan = require("morgan");

const signUpController = async (req, res, next) => {
  const apple = await req.body;
  console.log(apple);
  try {
    const users = await user.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({
      users,
    });
  } catch (err) {
    console.log(err.message);
    res.json(err.message);
  }

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
