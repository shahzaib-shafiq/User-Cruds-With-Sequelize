const User = require('../Model/UserModel')
const bcrypt = require('bcrypt');
const {
    userInputValidation
} = require("../utils/userValidation");

exports.registerUser = async (req, res) => {

    try {
        const signupUser = req.body;
        console.log(signupUser)
        const { firstName, lastName, email, password, age, address, Gender } = signupUser
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


}

exports.loginUser = async () => {




}