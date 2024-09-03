import { Router} from "express";
import { registerHandler, getAllUsersHandler} from "../handlers/userHandler";

const userRouter = Router();
/**
 * @swagger
 * /user:
 *   get:
 *     tags:
 *       - User
 *     summary: Get user data
 *     responses:
 *       '200':
 *         description: User data retrieved successfully
 *       '400':
 *         description: Bad request, invalid parameters
 *       '401':
 *         description: Unauthorized, invalid or missing token
 *     security:
 *       - bearerAuth: []
 *   post:
 *     tags:
 *       - User
 *     summary: Create a new user
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: Bad request, invalid input
 *       '409':
 *         description: Conflict, user already exists
 *     security:
 *       - bearerAuth: []
 *   put:
 *     tags:
 *       - User
 *     summary: Update user data
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: User data updated successfully
 *       '400':
 *         description: Bad request, invalid input
 *       '404':
 *         description: Not found, user does not exist
 *     security:
 *       - bearerAuth: []
 *   delete:
 *     tags:
 *       - User
 *     summary: Delete a user
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *       '400':
 *         description: Bad request, invalid parameters
 *       '404':
 *         description: Not found, user does not exist
 *     security:
 *       - bearerAuth: []
 */

userRouter.get('/', getAllUsersHandler);

userRouter.post('/register', registerHandler);

userRouter.put("/", (_req, res) => {
  res.send("Hello from put user router");
});

userRouter.delete("/", (_req, res) => {
  res.send("Hello from delete user router");
});

export default userRouter;