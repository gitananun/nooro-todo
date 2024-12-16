import * as dotenv from "dotenv";
import { createServerApp } from "./utils";

dotenv.config();

const app = createServerApp();

const port = 8080;

async function startServer() {
  try {
    // await initializeDB();

    app.listen(port, () => console.log(`🚀 -> Server running on localhost:${port}`));
  } catch (error) {
    console.error("❌ -> Error starting server:", error);
    process.exit(1);
  }
}
startServer();
