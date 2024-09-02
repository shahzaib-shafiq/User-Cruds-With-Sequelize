exports.CreateCourse = async (data) => {
  const { course_code, course_name, department, Duration, prerequisite } = data;
  console.log(course_code, course_name, department, Duration, prerequisite);
  if (
    !course_code ||
    !course_name ||
    !department ||
    !Duration ||
    !prerequisite
  ) {
    return false;
  }

  return true;
};
