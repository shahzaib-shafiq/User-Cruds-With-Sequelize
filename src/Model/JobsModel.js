const { sequelize } = require("../Config/db");

const { DataTypes } = require("sequelize");

const Jobs = sequelize.define("job", {
  job_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  AlumniId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Alumni",
      key: "AlumniId",
    },
  },
  Title: {
    type: DataTypes.STRING,
    allownull: false,
  },
  company: {
    type: DataTypes.STRING,
    allownull: false,
  },
  city: { type: DataTypes.STRING, allownull: false },
  salary: { type: DataTypes.STRING, allownull: true },
});

// Jobs.sync({ alter: true }) // you can use force true instead of alter to drop the table and create new
//   .then((result) => {
//     if (result.changed) {
//       console.log("Alumni table updated successfully.");
//     } else {
//       console.log("Alumni table already exists and is up to date.");
//     }
//   })
//   .catch((err) => {
//     console.error("Error synchronizing Alumni table:", err);
//   });
module.exports = Jobs;
