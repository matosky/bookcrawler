"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.signupUser = void 0;
const users = require("/Users/decagon/week-6-new/week-6-task-matosky/src/users.json");
const fs = require("fs");
const signupUser = (user) => {
    return new Promise((resolve, reject) => {
        if (!user.email || !user.firstname || !user.lastname || !user.password) {
            throw new Error("All fields must be filled!");
        }
        console.log(user);
        const exists = users.find((p) => p.email === user.email);
        if (exists) {
            throw new Error("Email already exists!");
        }
        const user_id = users.length + 1;
        const newUser = Object.assign({ user_id }, user);
        users.push(newUser);
        resolve(newUser);
        fs.writeFile("/Users/decagon/week-6-new/week-6-task-matosky/src/users.json", JSON.stringify(users), (err) => {
            if (err) {
                console.log(err);
            }
        });
    });
};
exports.signupUser = signupUser;
const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        if (!email || !password) {
            throw new Error("All fields must be filled!");
        }
        const user = users.find((p) => p.email === email);
        if (!user) {
            throw new Error("Invalid Login Credentials");
        }
        const userPassword = user.password;
        if (userPassword !== password) {
            throw new Error("Invalid Login Credentials");
        }
        resolve(user);
    });
};
exports.loginUser = loginUser;
//# sourceMappingURL=userModel.js.map