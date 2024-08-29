const { sequelize } = require("../Config/db");

const { DataTypes } = require("sequelize");
const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);
// Sync the model with the database, checking if the table already exists
// User.sync({ alter: true }) // you can use force true instead of alter to drop the table and create new
//     .then((result) => {
//         if (result.changed) {
//             console.log("User table updated successfully.");
//         } else {
//             console.log("User table already exists and is up to date.");
//         }
//     })
//     .catch((err) => {
//         console.error("Error synchronizing User table:", err);
//     });
module.exports = User;
