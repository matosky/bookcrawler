const fs = require("fs");
const database = require("/Users/decagon/week-6-new/week-6-task-matosky/src/database.json");
const url = "week-6-task-matosky/src/database.json"
interface Data {
    find(arg0: (b: Data) => boolean): unknown;
    bookId: number;
    data: Array<Type>;
}
interface Type {
    Title: string;
    Author: string;
    datePublished?: string;
    Description: string;
    pageCount: number | number;
    Genre: string;
    bookId?: number | string;
    publisher: string;
}

export const findAllBooks = () => {
    return new Promise((resolve, reject) => {
        fs.readFile("/Users/decagon/week-6-new/week-6-task-matosky/src/database.json", (err: Error, data: Data) => {
            const books = data.toString();
            resolve(books)
        })
    })
}

export const createBook = (book: Data) => {
    return new Promise((resolve, reject) => {
        const date = new Date().toJSON();
        const id = database.length + 1;
        const newBook = { ...book, "datePublished": date, "bookId": id };
        database.push(newBook);
        fs.writeFile("/Users/decagon/week-6-new/week-6-task-matosky/src/database.json", JSON.stringify(database), () => {
            console.log("created new book")
        })
        resolve(newBook);
    })
}

export const findBook = (id: number) => {
    return new Promise((resolve, reject) => {
        const book = database.find((b: Data) => b.bookId === id);
        resolve(book)
    })
}

export const findByIdAndDelete = (id: number) => {
    return new Promise((resolve, reject) => {
        const index = database.findIndex((b: Data) => b.bookId === id);
        if (index) {
            const book = database.splice(index, 1);
            resolve(book);
            fs.writeFile("/Users/decagon/week-6-new/week-6-task-matosky/src/database.json", JSON.stringify(database), () => {
                console.log("book deleted succefully")
            })
        } else {
            reject("book already deleted")
        }
    })
}


export const upDateBook = (id: number, book: Type) => {
    return new Promise((resolve, reject) => {
        const index = database.findIndex((b: Data) => b.bookId === id);
        console.log(typeof (index))
        console.log(index)
        if (index) {
            console.log(database[index]['Title'] = book.Title || database[index].Title)

            database[index]['Author'] = book.Author || database[index].Author
            database[index]['datePublished'] = book.datePublished || database[index].datePublished
            database[index]['Description'] = book.Description || database[index].Description
            database[index]['pageCount'] = book.pageCount || database[index].pageCount
            database[index]['Genre'] = book.Genre || database[index].Genre
            database[index]['publisher'] = book.publisher || database[index].publisher
        } else {
            throw new Error("Could not find book")
        }
        fs.writeFile("/Users/decagon/week-6-new/week-6-task-matosky/src/database.json", JSON.stringify(database), () => {
            console.log("book deleted succefully")
            resolve(database[index])
        })

    })
}