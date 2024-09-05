import { Router } from "express";
import userRouter from "./userRouter";
//import endpointRouter from './endpointRouter'

const router = Router();

router.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// Here we define the routes
//router.use('/endpoint', endpointRouter)
router.use("/user", userRouter);


export default router;
