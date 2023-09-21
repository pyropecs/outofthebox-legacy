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
const PORT = process.env.PORT || 5000;

const { urlencoded } = require("express");

const createRoute = require("./routes/createRoute");
const { connect } = require("./controllers/connect");
const loginRoute = require("./routes/loginRoute");
connect();
app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

app.use(loginRoute);
app.use(createRoute);
app.get("/categories/:categories", homePage);

app.listen(PORT, () => console.log(`server running on ${PORT}`));
