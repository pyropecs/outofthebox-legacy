const { blog } = require("../models");

const homePage = async (req, res) => {
  const blogs = await blog.find({});
  res.json(blogs);
};

module.exports = {
  homePage,

};
