"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const booksController = require("../controllers/bookController");
const authMiddleWare = require("../middlewares/userAuth");
const express = require('express');
const router = express.Router();
/* GET home page. */
// router.use()
router.get('/', authMiddleWare.authorizeUser, booksController.allBooksController);
router.get("/details/:id", booksController.findBookController);
router.get("/addbooks/", (req, res) => {
    res.render("addbooks.jade", { title: "Fill Form" });
});
router.delete("/:id", booksController.deleteBookController);
router.post("/", booksController.createBookController);
router.patch("/:id", booksController.upDateController);
module.exports = router;
//# sourceMappingURL=index.js.map