// const { sequelize } = require("../Config/db");
// const { DataTypes, Model } = require("sequelize");

// const Student = sequelize.define("student", {
//   student_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   department_id: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: "department",
//       key: " department_id",
//     },
//   },
//   course_id: {
//     type: DataTypes.JSON, // Use JSON to store arrays in MariaDB
//     allowNull: false,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   rollNumber: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   CNIC: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   department: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phone: { type: DataTypes.STRING, allowNull: false },
//   address: { type: DataTypes.STRING, allowNull: false },
//   city: { type: DataTypes.STRING, allowNull: false },
//   dob: { type: DataTypes.STRING, allowNull: false },
// });

// // Synchronize the model with the database
// Student.sync({ alter: true }) // or use force: true to drop and recreate the table
//   .then((result) => {
//     if (result.changed) {
//       console.log("Student table updated successfully.", result);
//     } else {
//       console.log("Student table already exists and is up to date.");
//     }
//   })
//   .catch((err) => {
//     console.error("Error synchronizing Student table:", err);
//   });

// module.exports = Student;

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
    // references: {
    //   model: Department, // Reference to the Department model
    //   key: "department_id",
    // },
    foreignKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
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
  // department: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // },
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

// Student.sync({ alter: true }) // you can use force true instead of alter to drop the table and create new
//   .then((result) => {
//     if (result.changed) {
//       console.log("Jobs table updated successfully.", result);
//     } else {
//       console.log("Jobs table already exists and is up to date.");
//     }
//   })
//   .catch((err) => {
//     console.error("Error synchronizing Jobs table:", err);
//   });
// Export the model
module.exports = Student;
