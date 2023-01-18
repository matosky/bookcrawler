"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userControllers = require("../controllers/userController");
const express = require('express');
const router = express.Router();
/* GET users listing. */
router.get("/signup", (req, res, next) => {
    res.render("signup.jade");
});
router.get("/logout", (req, res, next) => {
    const maxAge = 1;
    res.cookie("jwt", "", { maxAge: maxAge });
    res.redirect("/");
});
router.get("/login", (req, res, next) => {
    res.render("login.jade");
});
router.post('/login', userControllers.loginController);
router.post("/signup", userControllers.signupController);
module.exports = router;
//# sourceMappingURL=users.js.map