import { Request, Response, NextFunction } from "express"
const express = require("express");

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.render("layout.jade")
})

module.exports = router