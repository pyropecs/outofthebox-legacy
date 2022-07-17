const jwt = require("jsonwebtoken");
require("dotenv").config();

const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token;
  console.log(token);

  if (!token) {
    next();
  }

  try {
    const decoded = jwt.verify(token, config.TOKEN_SECRET);
    console.log(decoded);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
