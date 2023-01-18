const users = require("/Users/decagon/week-6-new/week-6-task-matosky/src/users.json");
const fs = require("fs");
// const jwt = require("jsonwebtoken");

interface User {
    id: string | number;
    firstname: string,
    lastname: string,
    email: string,
    password: string
}

export const signupUser = (user: User) => {
    return new Promise<User>((resolve, reject) => {
        if (!user.email || !user.firstname || !user.lastname || !user.password) {
            throw new Error("All fields must be filled!");
        }
        console.log(user)
        const exists = users.find((p: User) => p.email === user.email);
        if (exists) {
            throw new Error("Email already exists!");
        }
        const user_id = users.length + 1;
        const newUser = { user_id, ...user }
        users.push(newUser);
        resolve(newUser);
        fs.writeFile("/Users/decagon/week-6-new/week-6-task-matosky/src/users.json", JSON.stringify(users), (err: Error) => {
            if (err) {
                console.log(err);
            }
        })
    })
}
interface LoginDetails {
    email: string,
    password: string
}
export const loginUser = (email: string, password: string) => {
    return new Promise<LoginDetails>((resolve, reject) => {
        if (!email || !password) {
            throw new Error("All fields must be filled!");
        }
        const user = users.find((p: User) => p.email === email);
        if (!user) {
            throw new Error("Invalid Login Credentials");
        }
        const userPassword = user.password;
        if (userPassword !== password) {
            throw new Error("Invalid Login Credentials")
        }


        resolve(user)
    })
}