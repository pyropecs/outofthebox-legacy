const { blog } = require("./blogModels");
const { user } = require("./userModels");
const dotenv = require("dotenv").config();

module.exports = {
  user,
  blog,
};
