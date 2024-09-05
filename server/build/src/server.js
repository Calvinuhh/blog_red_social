"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
console.log("server.ts");
// const { FRONT_END_URL } = process.env;
const server = (0, express_1.default)();
server.use(express_1.default.json()); //middleware post
server.use(express_1.default.urlencoded({ extended: true }));
//Use the router for manage the routes
server.use('/api', index_1.default);
exports.default = server;
