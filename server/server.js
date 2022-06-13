const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { homePage } = require("./controllers/homeController");
const app = express();
const dotenv = require("dotenv").config();

const { urlencoded } = require("express");
const userRoute = require("./routes/userRoute");

app.use(cors());
app.use(express.json());

app.use(urlencoded({ extended: true }));

app.use(userRoute);
app.get("/", homePage);

app.listen(5000);
