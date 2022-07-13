// we need to create schema

const { Schema } = require("mongoose");
const { connect } = require("../controllers/connect");
const dotenv = require("dotenv").config();
const blogSchema = new Schema(
  {
    title: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    categories: {
      type: String,
    },
    content: {
      type: String,
      minlength: [30, "please elaborate your content"],
    },
  },
  { timestamps: true }
);
async function blogModel() {
  const { CreateConnection } = await connect();
  const blog = CreateConnection.model("blog", blogSchema);
  return blog;
}

module.exports = {
  blogModel,
};
