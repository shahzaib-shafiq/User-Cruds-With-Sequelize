exports.CreateCourse = async (data) => {
  const { course_code, course_name, department, Duration, prerequisite } = data;
  if (
    !course_code ||
    !course_name ||
    !department ||
    !Duration ||
    !prerequisite
  ) {
    return "Enter All Required Fields";
  }
  return null;
};
