import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  try {
    const token = req.cookies?.token; // <-- cookie se token lena

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id; // <-- ID set karo
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default isAuth;


// import jwt from "jsonwebtoken";

// const isAuth = async (req, res, next) => {
//   try {
//     const token = req.cookies?.token;
//     if (!token) {
//       return res.status(401).json({ message: "Unauthorized: No token provided" });
//     }

//     const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
//     req.userId = verifyToken.userId;

//     next();
//   } catch (error) {
//     console.error("Authentication error:", error);
//     res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
//   }
// };

// export default isAuth; // <-- THIS IS REQUIRED
