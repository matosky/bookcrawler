import { Request, Response, NextFunction } from "express";
const booksController = require("../controllers/bookController")
const authMiddleWare = require("../middlewares/userAuth");
const express = require('express');
const router = express.Router();

/* GET home page. */
// router.use()

router.get('/', authMiddleWare.authorizeUser, booksController.allBooksController)

router.get("/details/:id", booksController.findBookController)

router.get("/addbooks/", (req: Request, res: Response) => {
  res.render("addbooks.jade", { title: "Fill Form" });
})

router.delete("/:id", booksController.deleteBookController)

router.post("/", booksController.createBookController)

router.patch("/:id", booksController.upDateController)

module.exports = router;
