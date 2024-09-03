import express from "express";
import router from "./routes/index";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./docs/swagger";

// const { FRONT_END_URL } = process.env;

const server = express();

server.use(express.json()); //middleware post
server.use(express.urlencoded({ extended: true }));
server.use('/api',router);
server.use("/docs", swaggerUi.serve);
server.get("/docs", swaggerUi.setup(swaggerSetup));

export default server;