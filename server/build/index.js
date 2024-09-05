"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./src/server"));
const { PORT } = process.env;
server_1.default.get("/ping", (_req, res) => {
    console.log("someone pinged here");
    res.send("pong");
});
server_1.default.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
