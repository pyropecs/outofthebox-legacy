const { blogModel } = require("../models");

const homePage = async (req, res) => {
  const blogModels = await blogModel();
  function capitalize(word) {
    console.log(word);
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  const paramsArr = req.params.categories.split("+");

  const capitalizeParams = paramsArr.reduce((prevValue, currentWord) => {
    const capitalizeWord1 = capitalize(prevValue);
    const capitalizeWord2 = capitalize(currentWord);

    return `${capitalizeWord1} ${capitalizeWord2}`;
  });

  const blogs = await blogModels.find({ categories: capitalizeParams });

  res.json({ blogs });

  // res.json(blogs);
};

module.exports = {
  homePage,
};
