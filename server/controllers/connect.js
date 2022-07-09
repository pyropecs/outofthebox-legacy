const { createConnection } = require("mongoose");
const dotenv = require("dotenv").config();

async function connect() {
  let userConnection = {};
  let CreateConnection = {};
  userConnection = await createConnection(
    process.env.MONGODB1_URI,
    () => console.log("connected to user db"),
    (err) => console.log(`ERROR Code:${err} check your internet connection`)
  );

  CreateConnection = await createConnection(
    process.env.MONGODB2_URI,
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
