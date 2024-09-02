const { sequelize } = require("../Config/db");

const { DataTypes, Model } = require("sequelize");

const Instructor = sequelize.define("instructor", {
  instructor_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  instructor_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  phone: { type: DataTypes.STRING, allowNull: false },
  address: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
});

// Instructor.sync({ alter: true }) // you can use force true instead of alter to drop the table and create new
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

module.exports = Instructor;
