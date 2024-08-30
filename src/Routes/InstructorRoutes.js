const express = require("express");
const router = express.Router();
const upload = require("../Middlewares/multer");
const { AddInstructor } = require("../Controller/InstructorController");

const { verifyToken } = require("../Middlewares/authentication");

router.post("/addInstructor", verifyToken, AddInstructor);

module.exports = router;
