const { blogModel } = require("../models");
const dotenv = require("dotenv").config();
const { cloudinary } = require("../lib/cloudinary");

const CreateControllerPost = async (req, res, next) => {
  const Blog = await blogModel();

  try {
    const { name, title, categories, img, content } = req.body;
    const imgUploadRes = await cloudinary.uploader.upload(img, {
      upload_preset: "ecdduob0",
      transformation: [{ height: 436, width: 436, crop: "fill" }],
    });

    const imgUrl = await imgUploadRes.url;
    const blogRes = await {
      name,
      title,
      categories,
      imgUrl,
      content,
    };

    const blogAdd = await Blog.create(blogRes);

    res.send(blogAdd);
  } catch (err) {
    console.log(err);
    res.json({ err });
  }

  //wait for cloudinary public api
};

module.exports = {
  CreateControllerPost,
};
