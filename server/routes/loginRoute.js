const { Router } = require("express");
const router = Router();
const passport = require("passport");
const localStrategy = require("passport-local");
const crypto = require("crypto");
function loginController(rea, res, next) {
  //authenticate the existing acct which is in db
}

router.get("/login", loginController);
