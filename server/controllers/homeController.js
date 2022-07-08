const { blogModel } = require("../models");

const homePage = async (req, res) => {
  const blogModels = await blogModel();
  const blogs = await blogModels.find({});
  console.log(blogs);
  res.json(blogs);
};

module.exports = {
  homePage,
};
