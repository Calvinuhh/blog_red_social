import jwt from "jsonwebtoken";
import { VerificationParams } from "../../interfaces/userInterfaces";
import dotenv from "dotenv";

dotenv.config();

// Función para generar un token JWT de un solo uso
export const generateEmailVerificationToken = ({email, username}: VerificationParams) => {
  try {
    const token = jwt.sign({email, username}, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    return token;
  } catch (error) {
    console.error("Error al generar el token:", error);
    throw error;
  }
};