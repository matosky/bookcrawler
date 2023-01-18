import { Request, Response, NextFunction } from "express";
const userControllers = require("../controllers/userController")
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get("/signup", (req: Request, res: Response, next: NextFunction) => {
  res.render("signup.jade")
})

router.get("/logout", (req: Request, res: Response, next: NextFunction) => {
  const maxAge = 1;
  res.cookie("jwt", "", { maxAge: maxAge })
  res.redirect("/")
})

router.get("/login", (req: Request, res: Response, next: NextFunction) => {
  res.render("login.jade")
})
router.post('/login', userControllers.loginController);

router.post("/signup", userControllers.signupController);

module.exports = router;