const { sequelize } = require("../Config/db");

const { DataTypes, Model } = require("sequelize");

const Course = sequelize.define("course", {
  course_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  course_code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  course_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Duration: { type: DataTypes.STRING, allowNull: false },
  prerequisite: { type: DataTypes.STRING, allowNull: false },
});

// Course.sync({ alter: true }) // you can use force true instead of alter to drop the table and create new
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

module.exports = Course;
