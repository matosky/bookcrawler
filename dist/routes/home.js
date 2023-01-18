"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
    res.render("layout.jade");
});
module.exports = router;
//# sourceMappingURL=home.js.map