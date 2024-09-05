import { Sequelize } from 'sequelize';
import { initUserModel } from '../models/User'; // Asegúrate de que la ruta sea correcta
import dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno desde el archivo .env

const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database postgres connection established successfully");
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos:", err);
  });

// Inicializar el modelo User con la instancia de Sequelize
initUserModel(sequelize);

// Sincronizar los modelos con la base de datos
sequelize.sync();

export default sequelize;