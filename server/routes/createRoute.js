const { Router } = require("express");
const { CreateControllerPost } = require("../controllers/createControllers");

const create = Router();

create.post("/create", CreateControllerPost);

module.exports = create;
