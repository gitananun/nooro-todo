import express from "express";
import { taskRouter } from "./modules/task";

const router = express.Router();

export default (): express.Router => {
  router.get("/ping", (_, res) => res.status(200).send("pong 🏓"));

  /// Module routes
  router.use("/task", taskRouter());

  return router;
};
