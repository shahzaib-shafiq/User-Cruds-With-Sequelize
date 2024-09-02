const Alumini = require("./AluminiModel");
const Department = require("./DepartmentModel");
const Jobs = require("./JobsModel");
const Student = require("./StudentModel");

const associations = async () => {
  try {
    await Jobs.hasOne(Alumini, {
      foreignKey: "AlumniId",
    });

    Student.belongsTo(Department, { foreignKey: "department_id" });
  } catch (error) {}
};
module.exports = associations;
