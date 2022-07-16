const { Router } = require("express");
const { loginController } = require("../controllers/userControllers");
const router = Router();
const verifyToken = require("../middleware/authMiddleWare");

router.post("/login", verifyToken, loginController);

module.exports = router;
