import { Request, Response, NextFunction } from "express"
import { createBook, findAllBooks, findBook, findByIdAndDelete, upDateBook } from "../models/bookModels";


const allBooksController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await findAllBooks()
        console.log(books)
        res.render("books.jade", { books: books });
    } catch (err) {
        console.log(err)
    }
}

const createBookController = async (req: Request, res: Response) => {
    try {
        await createBook(req.body);
        res.redirect("/books")
    } catch (err) {
        console.log(err);
    }
}

const findBookController = async (req: Request, res: Response) => {
    try {
        const book = await findBook(parseInt(req.params.id));
        res.render("details", { book: book })
    } catch (err) {
        console.log(err)
    }
}

const deleteBookController = (async (req: Request, res: Response) => {
    try {
        const book = await findByIdAndDelete(parseInt(req.params.id));
        if (book) {
            res.json({ redirect: "/books" })
        }
    } catch (err) {
        console.log(err);
    }
})

const upDateController = (async (req: Request, res: Response) => {
    try {
        const book = await upDateBook(parseInt(req.params.id), req.body);
        if (book) {
            res.status(200).json({ msg: "Upated successfully" })
        }
    } catch (err) {
        console.log(err);
    }
})

module.exports = {
    allBooksController,
    createBookController,
    findBookController,
    deleteBookController,
    upDateController
}