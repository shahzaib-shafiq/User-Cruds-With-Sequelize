const { sequelize } = require("../Config/db");

const { DataTypes, Model } = require("sequelize");

// const Jobs = sequelize.define("job", {
//   job_id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   AlumniId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: "Alumni",
//       key: "AlumniId",
//     },
//     allownull: false,
//   },
//   Title: {
//     type: DataTypes.STRING,
//     allownull: false,
//   },
//   company: {
//     type: DataTypes.STRING,
//     allownull: false,
//   },
//   city: { type: DataTypes.STRING, allownull: false },
//   salary: { type: DataTypes.INTEGER, allownull: true },
// });

const Jobs = sequelize.define(
  "Job",
  {
    job_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    AlumniId: {
      type: DataTypes.INTEGER,
      // references: {
      //   model: "Alumni",
      //   key: "AlumniId",
      // },
      allowNull: false,
    },
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

// // Sync the Jobs model
// Jobs.sync({ alter: true })
//   .then(() => {
//     console.log("Jobs table updated successfully.");
//   })
//   .catch((err) => {
//     console.error("Error synchronizing Jobs table:", err);
//   });

// Jobs.sync({ alter: true }) // you can use force true instead of alter to drop the table and create new
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

module.exports = Jobs;
