// we need to create schema

const { Schema, createConnection } = require("mongoose");
const dotenv = require("dotenv").config();
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

const blogConnection = createConnection(process.env.MONGODB2_URI, (ss) =>
  console.log(ss)
);
const blog = blogConnection.model("blog", blogSchema);

module.exports = {
  blog,
};
