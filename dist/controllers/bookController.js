"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookModels_1 = require("../models/bookModels");
const allBooksController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield (0, bookModels_1.findAllBooks)();
        console.log(books);
        res.render("books.jade", { books: books });
    }
    catch (err) {
        console.log(err);
    }
});
const createBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, bookModels_1.createBook)(req.body);
        res.redirect("/books");
    }
    catch (err) {
        console.log(err);
    }
});
const findBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield (0, bookModels_1.findBook)(parseInt(req.params.id));
        res.render("details", { book: book });
    }
    catch (err) {
        console.log(err);
    }
});
const deleteBookController = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield (0, bookModels_1.findByIdAndDelete)(parseInt(req.params.id));
        if (book) {
            res.json({ redirect: "/books" });
        }
    }
    catch (err) {
        console.log(err);
    }
}));
const upDateController = ((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield (0, bookModels_1.upDateBook)(parseInt(req.params.id), req.body);
        if (book) {
            res.status(200).json({ msg: "Upated successfully" });
        }
    }
    catch (err) {
        console.log(err);
    }
}));
module.exports = {
    allBooksController,
    createBookController,
    findBookController,
    deleteBookController,
    upDateController
};
//# sourceMappingURL=bookController.js.map