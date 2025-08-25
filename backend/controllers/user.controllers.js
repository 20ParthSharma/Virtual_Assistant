import uploadOnCloudinary from "../config/cloudinary.js";
import User from "../models/user.model.js";

export const getCurrentUser = async (req, res) => {
  try {
    console.log("Received userId in getCurrentUser:", req.userId); // <-- Debug
    const user = await User.findById(req.userId).select("-password");

    if (!user) {
      console.log("❌ User not found for ID:", req.userId);
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const updateAssistant = async (req, res) => {
  try {
    const { assistantName, imageUrl} = req.body;
    let assistantImage;

    if (req.file) {
      assistantImage = await uploadOnCloudinary(req.file.path);
    }
    else{
      assistantImage=imageUrl;   
    }
    const user=await User.findByIdAndUpdate(
      req.userId,{
        assistantName,
        assistantImage,
      },{new:true}).select("-password");
      return res.status(200).json({
        message: "User updated successfully",
        user,
      });

  } catch (error) {
    console.error("❌ Update error:", error);
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
