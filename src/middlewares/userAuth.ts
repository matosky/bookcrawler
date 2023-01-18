import { Request, Response, NextFunction } from "express";

const authorizeUser = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.jwt;
    const match = token === "jskskbjjskzxnbxnkjjdjd8788.nndnnndndnj99d.djxxnxjjdkkdjd";
    if (token && match) {
        next();
    } else {
        res.redirect("/users/login")
    }

    // const jwt = "jskskbjjskzxnbxnkjjdjd8788.nndnnndndnj99d.djxxnxjjdkkdjd"
    // if (token !== jwt) {
    //     res.redirect("/users/login");
    // } else {
    //     next();
    // }
}


module.exports = {
    authorizeUser
};