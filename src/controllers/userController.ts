import { NextFunction, Request, Response } from "express";
import { loginUser, signupUser } from "../models/userModel";

const createToken = () => {
    return "jskskbjjskzxnbxnkjjdjd8788.nndnnndndnj99d.djxxnxjjdkkdjd";
}


const signupController = (async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await signupUser(req.body);
        if (user) {
            const maxAge = 1000 * 60 * 60 * 24;
            const token = createToken();
            res.cookie("jwt", token, { maxAge: maxAge, httpOnly: true });
            console.log(token);
            res.status(200).json({ name: req.body.firstname, token: token });
        }
    } catch (err) {
        console.log(err);
        let message = "unknown Error";
        if (err instanceof Error) {
            message = err.message;
            res.status(400).json({ msg: message })
        }
    }
})

const loginController = (async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    try {
        const user = await loginUser(email, password);
        if (user) {
            const token = createToken();
            res.cookie("jwt", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true })
            res.status(200).json({ email: email, token: token, redirect: "/books" });
        }
    } catch (err) {
        console.log(err);
        let message = "unknown Error";
        if (err instanceof Error) {
            message = err.message;
            res.status(400).json({ msg: message })
        }
    }
})

module.exports = {
    signupController,
    loginController
}