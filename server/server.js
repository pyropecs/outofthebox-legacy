const express = require("express");
const { dbConnect } = require("./models");
const { homePage } = require("./controllers/homeController");
const app = express();
const cors = require("cors");
const { urlencoded } = require("express");
const userRoute = require("./routes/userRoute");
dbConnect();

app.use(urlencoded({ extended: false }));
app.use(express.json());
app.use(userRoute);
app.get("/", homePage);

app.listen(3000);
