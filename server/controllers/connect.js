const { createConnection } = require("mongoose");
const dotenv = require("dotenv").config();

async function connect() {
  let userConnection = {};
  let CreateConnection = {};
  userConnection = await createConnection(
    "mongodb+srv://admin:12345@cluster0.gxvbm.mongodb.net/userdata?retryWrites=true&w=majority",
    () => console.log("connected to user db"),
    (err) => console.log(`ERROR Code:${err} check your internet connection`)
  );

  CreateConnection = await createConnection(
    "mongodb+srv://admin:12345@cluster0.gxvbm.mongodb.net/blogData?retryWrites=true&w=majority",
    () => {
      console.log("connected to blog db");
    },
    (err) => console.log(`ERROR Code:${err} check your internet connection`)
  );
  return { userConnection, CreateConnection };
}

module.exports = {
  connect,
};
