// const { sequelize } = require("../Config/db");

// const { DataTypes, Model } = require("sequelize");

// const Department = sequelize.define("department", {
//   department_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   department_code: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   department_name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   location: { type: DataTypes.STRING, allowNull: false },
// });

// Department.sync({ alter: true }) // you can use force true instead of alter to drop the table and create new
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

// module.exports = Department;

const { sequelize } = require("../Config/db");
const { DataTypes } = require("sequelize");

// Define the Department model
const Department = sequelize.define("department", {
  department_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  department_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  department_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
// Department.sync({ alter: true }) // you can use force true instead of alter to drop the table and create new
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
module.exports = Department;
