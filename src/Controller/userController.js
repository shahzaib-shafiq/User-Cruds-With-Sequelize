const User = require("../Model/UserModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config();
const {
  userInputValidation,
  userLoginValidation,
} = require("../utils/userValidation");

exports.registerUser = async (req, res) => {
  try {
    const signupUser = req.body;
    console.log(signupUser);
    const { firstName, lastName, email, password, age, address, Gender } =
      signupUser;
    console.log(signupUser);

    const ValidateUserData = await userInputValidation(signupUser);
    if (ValidateUserData) {
      return res.status(400).json({ message: validationError });
    }

    console.log("Checking for Existing Email");
    const existingEmail = await User.findOne({
      where: { email },
    });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    signupUser.password = hashedPassword;
    const user = await User.create(signupUser);

    if (user) {
      res.status(201).json({
        message: "User Signup successfully",
      });
    }
  } catch (error) {
    console.error("Signup Error", error);
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(req.body);
    const LoginValidation = userLoginValidation(req.body);
    if (!LoginValidation) {
      return res.status(400).json({ status: false, message: validationError });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        status: false,
        message: "Auth Error",
      });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
      return res
        .status(401)
        .json({ status: false, message: "Invalid Email or Password" });
    }

    let token;
    try {
      //Creating jwt token
      token = jwt.sign(
        {
          userId: user.userId,
          email: user.email,
        },
        // console.log(process.env.JWT_SECRET),
        process.env.JWT_SECRET,
        { expiresIn: process.env.EXPIRES_IN }
      );
    } catch (err) {
      console.log(err);
      const error = new Error("Error! Something went wrong.");
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: {
        email: user.email,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Login Failed",
      error,
    });
  }
};
