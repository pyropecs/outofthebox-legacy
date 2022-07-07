const { Router } = require("express");
const { createController } = require("../controllers/createControllers");

const create = Router();

create.post("/create", createController);
module.exports = create;
