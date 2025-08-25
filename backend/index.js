import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import { connectDb } from "./config/database.js"; // 👈 Import DB connection

dotenv.config();

const app = express();

// ✅ Connect to database before starting the server
connectDb();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL & port
    credentials: true,               // Allow cookies
  })
);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
