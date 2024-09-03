exports.CheckStudentCourse = async (data) => {
  const { student_id, course_id } = data;
  if (!student_id || !course_id) {
    console.log("object");
    return false;
  }

  return true;
};
