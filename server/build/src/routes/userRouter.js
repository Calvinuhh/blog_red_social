"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
userRouter.get('/', (_req, res) => {
    res.send('Hello from user router');
});
exports.default = userRouter;
