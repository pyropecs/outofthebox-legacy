const { Router } = require("express");
const router = Router();

function loginController(rea, res, next) {
  //authenticate the existing acct which is in db
}

router.get("/login", loginController);
