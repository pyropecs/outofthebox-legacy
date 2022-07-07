const { blog, blogModel } = require("./blogModels");
const { userModel } = require("./userModels");

const dotenv = require("dotenv").config();

module.exports = {
  userModel,
  blogModel,
};
