const { where } = require("sequelize");
const Course = require("../Model/CourseModel");
const { CreateCourse } = require("../utils/CourseValidation");

exports.AddCourse = async (req, res) => {
  try {
    const { course_code, course_name, department, Duration, prerequisite } =
      req.body;

    const coursedata = req.body;

    // Validate data
    const validationErrors = CreateCourse(req.body);
    if (!validationErrors) {
      return res.status(400).json({ message: "Validation failed" });
    }
    const CheckDuplicateCourse = await Course.findOne({
      where: { course_code: course_code },
    });
    if (CheckDuplicateCourse) {
      return res.status(401).json({ message: "Course Already Exist" });
    }
    const course = await Course.create(coursedata);

    // Check if course was created successfully
    if (course) {
      return res.status(200).json({ message: "Data Added to DB" });
    } else {
      return res.status(500).json({ message: "Failed to Add Data to DB" });
    }
  } catch (error) {
    console.error("Error adding course:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
