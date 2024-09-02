const { sequelize } = require("../Config/db");
const { DataTypes } = require("sequelize");
const Department = require("./DepartmentModel"); // Import the Department model

// Define the Student model
const Student = sequelize.define("student", {
  student_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rollNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CNIC: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dob: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// const syncModels = async () => {
//   try {
//     // Sync the models with the database
//     await Department.sync({ alter: true });
//     await Student.sync({ alter: true }); // or use force: true to drop and recreate the table

//     console.log("model synchronized successfully.");
//   } catch (err) {
//     console.error("Error synchronizing models:", err);
//   }
// };

// // Call the arrow function to synchronize models
// syncModels();

// Export the model
module.exports = Student;
