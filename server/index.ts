import dotenv from "dotenv";
import server from "./src/server";
import sequelize from "./src/config/database";


dotenv.config();
const { PORT } = process.env;

sequelize
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
      console.log(`Documentation is running at http://localhost:${PORT}/docs`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });




/* server.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});   shift+alt+A  para comentar tambien ctrl+k+c para comentar y ctrl+k+u para descomentar*/