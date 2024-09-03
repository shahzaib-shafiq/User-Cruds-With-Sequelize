const StudentCourses = require("../Model/StudentCourseModel");
const CreateStudentCourse = require("../utils/StudentCourseValidations"); // Correct import
const Student = require("../Model/StudentModel");
const Course = require("../Model/CourseModel");
const { where } = require("sequelize");
exports.AddStudentCourse = async (req, res) => {
  try {
    const { student_id, course_id } = req.body;

    const studentcourseData = { student_id, course_id };
    // Perform validation
    const validationError = await CreateStudentCourse(req.body);

    // Check for validation errors
    if (!validationError) {
      return res
        .status(400)
        .json({ message: "Validation Error", errors: validationError });
    }

    const Checkstudent_id = await Student.findOne({
      where: {
        student_id: student_id,
      },
    });

    if (Checkstudent_id === null) {
      return res.status(400).json({ message: "Student Not Exist" });
    }

    const Checkcourse_id = await Course.findOne({
      where: {
        course_id: course_id,
      },
    });

    if (Checkcourse_id === null) {
      return res.status(401).json({ message: "Course Not Exist" });
    }

    // check for dupliacate course registration

    const checkdupllicateCourse = await StudentCourses.findOne({
      where: { course_id: course_id, student_id: student_id },
    });

    if (checkdupllicateCourse) {
      return res
        .status(400)
        .json({ message: "Course Already Regsitered with this Studet ID" });
    }

    console.log("Adding data:", studentcourseData);

    // Create the record
    const savedata = await StudentCourses.create(studentcourseData);

    // Respond with success
    if (savedata) {
      return res.status(201).json({ message: "Data Added", data: savedata });
    } else {
      return res.status(500).json({ message: "Error in Adding Data to DB" });
    }
  } catch (error) {
    console.error("Error in Adding Data to DB:", error); // Log the actual error
    return res.status(500).json({ message: "Error in Adding Data to DB" });
  }
};
