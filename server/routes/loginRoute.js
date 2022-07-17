const { Router } = require("express");
const { loginController } = require("../controllers/userControllers");
const router = Router();

router.post("/login", loginController);

module.exports = router;
