const { Router } = require("express");
const { CreateControllerPost } = require("../controllers/createControllers");
const verifyToken = require("../middleware/authMiddleWare");
const create = Router();

create.post("/create", verifyToken, CreateControllerPost);

module.exports = create;
