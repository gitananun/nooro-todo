import * as dotenv from "dotenv";
import { prismaClient } from "./db";
import { createServerApp, initializeDB } from "./utils";

dotenv.config();

const app = createServerApp();

const port = 8080;

async function startServer() {
  try {
    await initializeDB();
    console.log("🔌 -> DB connected!");

    app.listen(port, () => console.log(`🚀 -> Server running on localhost:${port}`));
  } catch (error) {
    console.error("❌ -> Error starting server:", error);
    await prismaClient.$disconnect();
    process.exit(1);
  }
}
startServer();
