const jwt = require("jsonwebtoken");
const User = require("../Models/user_model");
require('dotenv').config()
exports.verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1]; // Extract the token from the header

      if (!token) {
        return res.status(401).json({
          status: false,
          message: "Token not provided",
        });
      }

      // Verify token
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      // console.log("Decoded token:", decode);

      const user = await User.findOne({
        where: {
          userId: decode.userId,
          email: decode.email,
        },
      });

      if (user) {
        req.id = decode.id;
        req.email = decode.email;
        next();
      } else {
        res.status(401).json({
          status: false,
          message: "Not authorized to access this route",
        });
      }
    } else {
      res.status(401).json({
        status: false,
        message: "Token required",
      });
    }
  } catch (error) {
    console.error("Error in token verification:", error);
    res.status(401).json({
      status: false,
      message: "Not authorized to access this route",
    });
  }
};
