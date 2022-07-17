const { blogModel } = require("../models");

const homePage = async (req, res) => {
  const blogModels = await blogModel();
  const mySentence = req.params.categories;
  const words = mySentence.split("+");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  const capitalizeParams = words.join(" ");

  const blogs = await blogModels.find({ categories: capitalizeParams });

  res.json({ blogs });

  // res.json(blogs);
};

module.exports = {
  homePage,
};
