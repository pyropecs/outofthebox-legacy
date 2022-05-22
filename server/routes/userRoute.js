const { Router } = require("express");
const {
  signUpController,
  getUsers,
} = require("../controllers/userControllers");

const router = Router();
router.post("/signup", signUpController);
router.get("/signup", getUsers);
module.exports = router;
