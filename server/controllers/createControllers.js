const { blogModel } = require("../models");
const dotenv = require("dotenv").config();
const { cloudinary } = require("../lib/cloudinary");

const CreateControllerPost = async (req, res, next) => {
  const Blog = await blogModel();

  try {
    const { title, categories, img, content } = req.body;
    const imgUploadRes = await cloudinary.uploader.upload(img, {
      upload_preset: "ecdduob0",
    });
    const imgUrl = await imgUploadRes.url;
    const blogRes = await {
      title,
      categories,
      imgUrl,
      content,
    };
    console.log(blogRes);

    const blogAdd = await Blog.create(blogRes);
    console.log(blogAdd);
    res.send(blogAdd);
  } catch (err) {
    console.log(err);
  }

  //wait for cloudinary public api
};

module.exports = {
  CreateControllerPost,
};
