const { connect } = require("mongoose");
const user = require("./userModels");
const { blog } = require("./blogModels");
const dbConnect = async () => {
  try {
    connect(
      process.env.MONGODB_URI,
      (ggg) => console.log(ggg),
      (e) => console.log(error)
    );
  } catch {
    console.log("db not connected");
  }
};

module.exports = {
  user,
  dbConnect,
  blog,
};
