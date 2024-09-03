const Alumini = require("./AluminiModel");
const Department = require("./DepartmentModel");
const Jobs = require("./JobsModel");
const Student = require("./StudentModel");
const Course = require("./CourseModel");
// const StudentCourse = require("../Model/StudentCourseModel");
// console.log("associations");
const associations = async () => {
  try {
    await Jobs.hasOne(Alumini, {
      foreignKey: "AlumniId",
    });

    Student.belongsTo(Department, { foreignKey: "department_id" });
    Department.hasMany(Student, { foreignKey: "department_id" });

    Course.belongsToMany(Student, { through: StudentCourse });
    Student.belongsToMany(Course, { through: StudentCourse });
  } catch (error) {
    console.log(error);
  }
};
associations();
module.exports = associations;
