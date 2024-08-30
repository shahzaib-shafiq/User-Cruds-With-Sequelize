const express = require("express");
const router = express.Router();
const upload = require("../Middlewares/multer");
const { AddStudent } = require("../Controller/StudentController");

const { verifyToken } = require("../Middlewares/authentication");

router.post("/addStudent", verifyToken, AddStudent);

module.exports = router;
