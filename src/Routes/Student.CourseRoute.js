const express = require("express");
const router = express.Router();
const { verifyToken } = require("../Middlewares/authentication");
const { AddStudentCourse } = require("../Controller/Student.CourseController");
router.post("/AddStudentCourse", verifyToken, AddStudentCourse);
module.exports = router;
