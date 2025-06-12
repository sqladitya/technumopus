import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("🚀 Starting backend server...");

const backend = spawn("node", ["server.js"], {
  cwd: join(__dirname, "backend"),
  stdio: "inherit",
});

backend.on("error", (error) => {
  console.error("❌ Backend startup error:", error);
});

backend.on("close", (code) => {
  console.log(`Backend process exited with code ${code}`);
});

process.on("SIGINT", () => {
  console.log("\n🛑 Shutting down backend...");
  backend.kill("SIGINT");
  process.exit(0);
});
