"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upDateBook = exports.findByIdAndDelete = exports.findBook = exports.createBook = exports.findAllBooks = void 0;
const fs = require("fs");
const database = require("/Users/decagon/week-6-new/week-6-task-matosky/src/database.json");
const url = "week-6-task-matosky/src/database.json";
const findAllBooks = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("/Users/decagon/week-6-new/week-6-task-matosky/src/database.json", (err, data) => {
            const books = data.toString();
            resolve(books);
        });
    });
};
exports.findAllBooks = findAllBooks;
const createBook = (book) => {
    return new Promise((resolve, reject) => {
        const date = new Date().toJSON();
        const id = database.length + 1;
        const newBook = Object.assign(Object.assign({}, book), { "datePublished": date, "bookId": id });
        database.push(newBook);
        fs.writeFile("/Users/decagon/week-6-new/week-6-task-matosky/src/database.json", JSON.stringify(database), () => {
            console.log("created new book");
        });
        resolve(newBook);
    });
};
exports.createBook = createBook;
const findBook = (id) => {
    return new Promise((resolve, reject) => {
        const book = database.find((b) => b.bookId === id);
        resolve(book);
    });
};
exports.findBook = findBook;
const findByIdAndDelete = (id) => {
    return new Promise((resolve, reject) => {
        const index = database.findIndex((b) => b.bookId === id);
        if (index) {
            const book = database.splice(index, 1);
            resolve(book);
            fs.writeFile("/Users/decagon/week-6-new/week-6-task-matosky/src/database.json", JSON.stringify(database), () => {
                console.log("book deleted succefully");
            });
        }
        else {
            reject("book already deleted");
        }
    });
};
exports.findByIdAndDelete = findByIdAndDelete;
const upDateBook = (id, book) => {
    return new Promise((resolve, reject) => {
        const index = database.findIndex((b) => b.bookId === id);
        console.log(typeof (index));
        console.log(index);
        if (index) {
            console.log(database[index]['Title'] = book.Title || database[index].Title);
            database[index]['Author'] = book.Author || database[index].Author;
            database[index]['datePublished'] = book.datePublished || database[index].datePublished;
            database[index]['Description'] = book.Description || database[index].Description;
            database[index]['pageCount'] = book.pageCount || database[index].pageCount;
            database[index]['Genre'] = book.Genre || database[index].Genre;
            database[index]['publisher'] = book.publisher || database[index].publisher;
        }
        else {
            throw new Error("Could not find book");
        }
        fs.writeFile("/Users/decagon/week-6-new/week-6-task-matosky/src/database.json", JSON.stringify(database), () => {
            console.log("book deleted succefully");
            resolve(database[index]);
        });
    });
};
exports.upDateBook = upDateBook;
//# sourceMappingURL=bookModels.js.map