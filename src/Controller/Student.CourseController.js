const StudentCourses = require("../Model/StudentCourseModel");
const CheckStudentCourse = require("../utils/StudentCourseValidations");

exports.AddStudentCourse = async (req, res) => {
  try {
    const { student_id, course_id } = req.body;

    // Basic validation (this can be enhanced based on your CheckStudentCourse logic)
    if (!student_id || !course_id) {
      return res
        .status(400)
        .json({ message: "student_id and course_id are required" });
    }

    // Optionally, use CheckStudentCourse to validate the student_id and course_id
    // const validationError = CheckStudentCourse.validate(req.body);
    // if (validationError) {
    //   return res.status(400).json({ message: validationError });
    // }

    const studentcourseData = { student_id, course_id };
    console.log("Adding data:", studentcourseData);

    const savedata = await StudentCourses.create(studentcourseData);

    return res.status(201).json({ message: "Data Added", data: savedata });
  } catch (error) {
    console.error("Error in Adding Data to DB:", error); // Log the actual error
    return res.status(500).json({ message: "Error in Adding Data to DB" });
  }
};
