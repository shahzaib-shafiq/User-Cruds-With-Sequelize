const Alumini = require("./AluminiModel");
const Department = require("./DepartmentModel");
const Jobs = require("./JobsModel");
const Student = require("./StudentModel");
const Course = require("./CourseModel");
console.log("I am in the asso");
const associations = async () => {
  try {
    await Jobs.hasOne(Alumini, {
      foreignKey: "AlumniId",
    });

    Student.belongsTo(Department, { foreignKey: "department_id" });
    Department.hasMany(Student, { foreignKey: "department_id" });
    Course.belongsToMany(Student, { through: "CourseStudent" });
    Student.belongsToMany(Course, { through: "CourseStudent" });
  } catch (error) {
    console.log(error);
  }
};
associations();
module.exports = associations;
