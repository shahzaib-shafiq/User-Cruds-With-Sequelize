const express = require("express");
const router = express.Router();
const { registerUser, LoginUser } = require('../Controller/userController')

router.post("/signup", registerUser);
router.post("/login", LoginUser);



module.exports = router;