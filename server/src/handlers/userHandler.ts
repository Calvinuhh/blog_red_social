import { Request, Response } from 'express';
import { registerController , getAllUsersController } from "../controllers/userController";

export const registerHandler = async (req: Request, res: Response) => {
    try {
        const { email, password, name, role, isActive } = req.body;
        const { verificationToken, newUser } = await registerController({ email, password, name, role, isActive });
        res.status(201).json({ verificationToken, newUser });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
};

export const getAllUsersHandler = async (_req: Request, res: Response) => {
    try{
        const users = await getAllUsersController();
        res.status(200).json(users);
    }
    catch(error){
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
}