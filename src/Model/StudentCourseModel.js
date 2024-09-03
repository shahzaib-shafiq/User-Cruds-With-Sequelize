const { sequelize } = require("../Config/db");
const { DataTypes } = require("sequelize");

const StudentCourses = sequelize.define(
  "studentcourse",
  {
    StudentCourses_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true, // Define this field as the primary key
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

// Sync the StudentCourses model
StudentCourses.sync({ alter: true })
  .then(() => {
    console.log("StudentCourses table updated successfully.");
  })
  .catch((err) => {
    console.error("Error synchronizing StudentCourses table:", err);
  });

module.exports = StudentCourses;
