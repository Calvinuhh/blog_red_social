"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
//import endpointRouter from './endpointRouter'
const router = (0, express_1.Router)();
console.log(express_1.Router);
router.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});
// Here we define the routes
//router.use('/endpoint', endpointRouter)
router.use("/user", userRouter_1.default);
exports.default = router;
