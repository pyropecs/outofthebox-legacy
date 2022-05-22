// we need to create schema

const { Schema, model } = require("mongoose");

const blogSchema = new Schema(
  {
    name: {
      type: String,
    },
    img: {
      type: String,
    },
    categories: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const blog = model("blog", blogSchema);
module.exports = {
  blog,
};
