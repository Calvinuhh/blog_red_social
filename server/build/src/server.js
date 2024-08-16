import express from "express";
import router from "./routes/index.js";
console.log("server.ts");
// const { FRONT_END_URL } = process.env;
const server = express();
server.use(express.json()); //middleware post
server.use(express.urlencoded({ extended: true }));
//Use the router for manage the routes
server.use('/api', router);
export default server;
