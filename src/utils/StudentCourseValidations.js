// utils/StudentCourseValidations.js

const CreateStudentCourse = async (data) => {
  const { student_id, course_id } = data;

  console.log(data);

  // Check if any required fields are missing
  if (!student_id || !course_id) {
    return false; // Consider returning a more detailed error message
  }

  // If all required fields are present
  return true;
};

// Export the function
module.exports = CreateStudentCourse;
