import { prismaClient } from "@/db";
import { applyAppMiddlewares } from "@/middlewares";
import express from "express";
import router from "router";

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

  return await prismaClient.$connect();
};

export const readFromEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) throw new Error(`Environment variable ${key} is not defined`);

  return value;
};
