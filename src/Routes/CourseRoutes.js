const express = require("express");
const router = express.Router();
const upload = require("../Middlewares/multer");
const { AddCourse } = require("../Controller/CourseController");

const { verifyToken } = require("../Middlewares/authentication");

router.post("/addCourse", verifyToken, AddCourse);

module.exports = router;
