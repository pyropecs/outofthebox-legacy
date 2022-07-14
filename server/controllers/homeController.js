const { blogModel } = require("../models");

const homePage = async (req, res) => {
  const blogModels = await blogModel();
  const blogs = await blogModels.find({});

  res.json(blogs);
};

module.exports = {
  homePage,
};
