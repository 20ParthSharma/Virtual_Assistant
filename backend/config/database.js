// config/database.js
import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Db connected successfully!");
  } catch (error) {
    console.error("❌ Database connection error:", error.message);
  }
};
