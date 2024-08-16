import server from "./src/server.js";
const { PORT } = process.env;
server.get("/ping", (_req, res) => {
    console.log("someone pinged here");
    res.send("pong");
});
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
