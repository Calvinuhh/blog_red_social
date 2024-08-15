import { Router } from "express";
//import endpointRouter from './endpointRouter'

const router = Router();
console.log(Router)

router.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

router.use("/", (_req, res) => {
  console.log("someone pinged here");
  res.send("Hello World!");
});

// Here we define the routes
//router.use('/endpoint', endpointRouter)

export default router;
