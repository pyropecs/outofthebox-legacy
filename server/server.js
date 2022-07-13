const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { homePage } = require("./controllers/homeController");
const app = express();
const dotenv = require("dotenv").config();

const corsOptions = {
  origin: true,
  credentials: true,
};

const { urlencoded } = require("express");
const userRoute = require("./routes/userRoute");
const createRoute = require("./routes/createRoute");
const { connect } = require("./controllers/connect");

connect();
app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

app.use(userRoute);
app.use(createRoute);
app.get("/", homePage);

app.listen(5000);
