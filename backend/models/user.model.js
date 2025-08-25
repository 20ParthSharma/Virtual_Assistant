import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  assistantName: { type: String},     // ✅ added
  assistantImage: { type: String},    // ✅ added
  history: { type: String},            // if you need chat history
},{timestamp:true})

const User = mongoose.model("User", userSchema);

export default User;
