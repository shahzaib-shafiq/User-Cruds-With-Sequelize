const express = require("express");
const router = express.Router();
const upload = require("../Middlewares/multer");
const { AddStudent } = require("../Controller/StudentController");

const { verifyToken } = require("../Middlewares/authentication");

router.post("/addAlumini", verifyToken, upload.single("file"), AddStudent);

module.exports = router;
