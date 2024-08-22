const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require('../Controller/userController')

router.post("/signup", registerUser);
router.post("/login", loginUser);
// router.patch("/updateUser/:id", verifyToken, updateUser);
// router.patch("/updatePassword/:id", verifyToken, updatePassword);
// router.get("fetchAllUsers", verifyToken, fetchAllUsers);
// router.get("fetchUserById/:id", verifyToken, fetchUserById);
// router.delete("/deleteUserById/:id", verifyToken, deleteUserById);
// router.patch("/forgotPassword/:id", verifyToken, forgotPassword);


module.exports = router;