// signIncontroller
const { userModel } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge * 1000,
  });
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

    //token
    const token = createToken(users._id);

    res.status(201).json({ user: users, token: token });
  } catch (err) {
    console.log(err);
    res.status(409).json(err);
  }

  next();
};

//login_post
const loginController = async (req, res, next) => {
  try {
    // Get user input
    const { name, password } = req.body;

    // Validate user input
    if (!(name && password)) {
      res.status(400).send("All input is required");
    }
    const users = await userModel();
    // Validate if user exist in our database
    const user = await users.findOne({ name });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, name },
        process.env.TOKEN_SECRET,
        {
          expiresIn: maxAge * 1000,
        }
      );

      // save user token

      const user1 = {
        _id: user._id,
        name: user.name,
      };
      user1.token = token;
      // user
      res.status(200).json({ user: user1 });
    } else {
      res.status(400).json("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  signUpController,
  loginController,
};
