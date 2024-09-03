const StudentCourses = require("../Model/StudentCourseModel");
const CreateStudentCourse = require("../utils/StudentCourseValidations"); // Correct import

exports.AddStudentCourse = async (req, res) => {
  try {
    const { student_id, course_id } = req.body;

    // Perform validation
    const validationError = await CreateStudentCourse(req.body);

    // Check for validation errors
    if (!validationError) {
      return res
        .status(400)
        .json({ message: "Validation Error", errors: validationError });
    }

    const studentcourseData = { student_id, course_id };
    console.log("Adding data:", studentcourseData);

    // Create the record
    const savedata = await StudentCourses.create(studentcourseData);

    // Respond with success
    return res.status(201).json({ message: "Data Added", data: savedata });
  } catch (error) {
    console.error("Error in Adding Data to DB:", error); // Log the actual error
    return res.status(500).json({ message: "Error in Adding Data to DB" });
  }
};
