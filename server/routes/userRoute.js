const { Router } = require("express");
const { signUpController } = require("../controllers/userControllers");

const router = Router();
router.post("/signup", signUpController);

module.exports = router;
