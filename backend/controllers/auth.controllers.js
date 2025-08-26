import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import genToken from "../config/token.js";

// ===================== SIGNUP CONTROLLER =====================
export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    // Validate password length
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long!" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = await genToken(user._id);

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Change to true in production (HTTPS)
      sameSite: "strict",
      maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
    });

    // Remove password from response
    const { password: _, ...userData } = user.toObject();

    return res.status(201).json({
      message: "User registered successfully",
      user: userData,
    });
  } catch (error) {
    console.error("❌ signUp error:", error.message);
    return res.status(500).json({ message: `signUp error: ${error.message}` });
  }
};

// ===================== LOGIN CONTROLLER =====================
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email does not exist!" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials!" });
    }

    // Generate token
    const token = await genToken(user._id);

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // Change to true in production (HTTPS)
      sameSite: "strict",
      maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
    });

    // Remove password before sending response
    const { password: _, ...userData } = user.toObject();

    return res.status(200).json({
      message: "Login successful",
      user: userData,
    });
  } catch (error) {
    console.error("❌ Login error:", error.message);
    return res.status(500).json({ message: `Login error: ${error.message}` });
  }
};

// ===================== LOGOUT CONTROLLER =====================
export const logOut = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logged out successfully!" });
  } catch (error) {
    console.error("❌ Logout error:", error.message);
    return res.status(500).json({ message: `Logout error: ${error.message}` });
  }
};
