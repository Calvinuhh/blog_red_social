import { Sequelize } from "sequelize";

import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Database postgres connection established successfully"
    );
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos:", err);
  });

export default sequelize;
