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
const userModel_1 = require("../models/userModel");
const createToken = () => {
    return "jskskbjjskzxnbxnkjjdjd8788.nndnnndndnj99d.djxxnxjjdkkdjd";
};
const signupController = ((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, userModel_1.signupUser)(req.body);
        if (user) {
            const maxAge = 1000 * 60 * 60 * 24;
            const token = createToken();
            res.cookie("jwt", token, { maxAge: maxAge, httpOnly: true });
            console.log(token);
            res.status(200).json({ name: req.body.firstname, token: token });
        }
    }
    catch (err) {
        console.log(err);
        let message = "unknown Error";
        if (err instanceof Error) {
            message = err.message;
            res.status(400).json({ msg: message });
        }
    }
}));
const loginController = ((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield (0, userModel_1.loginUser)(email, password);
        if (user) {
            const token = createToken();
            res.cookie("jwt", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
            res.status(200).json({ email: email, token: token, redirect: "/books" });
        }
    }
    catch (err) {
        console.log(err);
        let message = "unknown Error";
        if (err instanceof Error) {
            message = err.message;
            res.status(400).json({ msg: message });
        }
    }
}));
module.exports = {
    signupController,
    loginController
};
//# sourceMappingURL=userController.js.map