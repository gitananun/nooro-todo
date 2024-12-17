import * as dotenv from "dotenv";
import { createServerApp, initializeDB, prisma } from "./utils";

dotenv.config();

const app = createServerApp();

const port = 8080;

async function startServer() {
  try {
    await initializeDB().then(() => console.log("🔌 -> DB connected!"));

    app.listen(port, () => console.log(`🚀 -> Server running on localhost:${port}`));
  } catch (error) {
    console.error("❌ -> Error starting server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}
startServer();
