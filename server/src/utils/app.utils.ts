import express from "express";
import { applyAppMiddlewares } from "../middlewares";
import router from "../router";

export const createServerApp = () => {
  const app = express();

  // Use middlewares to secure the app
  applyAppMiddlewares(app);

  // Routes
  app.use("/", express.static("public"));
  app.use("/", router());

  return app;
};

/* istanbul ignore next */
export const initializeDB = async () => {
  console.log("🔌 -> Waiting for DB connection...");

  // return await initializeConnection();
};
