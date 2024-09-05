import User from "../models/User";
import { generateEmailVerificationToken } from "../services/userServices";
import { RegisterControllerParams } from "../../interfaces/userInterfaces";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

export const registerController = async ({
  email,
  password,
  name,
  role,
  isActive,
}: RegisterControllerParams) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    throw new Error("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const verificationToken = generateEmailVerificationToken({
    email,
    username: name,
  });

  const newUser = await User.create({
    email,
    password: hash,
    name,
    role,
    isActive,
  });

  return { verificationToken, newUser };
};

export const getAllUsersController = async () => {
  const users = await User.findAll();
  return users;
};
