const express = require("express");
const router = express.Router();
const upload = require("../Middlewares/multer");
const { AddCourse } = require("../Controller/CourseController");

const { verifyToken } = require("../Middlewares/authentication");

router.post("/addAlumini", verifyToken, AddCourse);

module.exports = router;
