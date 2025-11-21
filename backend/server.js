import express from "express";
import path from "path";
import http from "http"; // Import http module
import ErrorHandeler from "./middleware/ErrorHandeler.js";
import connectDb from "./config/dbConnection.js";
import dotenv from "dotenv";
import cors from "cors";
import { fileURLToPath } from "url";
import Routes from "./routes/Routes.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();
connectDb();
const app = express();

// Set port from environment variable or default to 3000
const port = process.env.Port || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/contact", Routes);
app.use("/api/users", userRoutes);
app.use("/api", postRoutes);
app.use("/api/message", chatRoutes);
app.use(ErrorHandeler);

// Create HTTP server instead of using app.listen
http.createServer(app).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
