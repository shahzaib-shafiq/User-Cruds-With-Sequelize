const { sequelize } = require("../Config/db");

const { DataTypes, Model } = require("sequelize");

const Student = sequelize.define("student", {
  student_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_name: {
    type: DataTypes.STRING,
    allownull: false,
  },
  phone: { type: DataTypes.STRING, allownull: false },
  address: { type: DataTypes.STRING, allownull: false },
  city: { type: DataTypes.STRING, allownull: false },
  dob: { type: DataTypes.STRING, allownull: false },
});

Student.sync({ alter: true }) // you can use force true instead of alter to drop the table and create new
  .then((result) => {
    if (result.changed) {
      console.log("Jobs table updated successfully.", result);
    } else {
      console.log("Jobs table already exists and is up to date.");
    }
  })
  .catch((err) => {
    console.error("Error synchronizing Jobs table:", err);
  });

module.exports = Student;
