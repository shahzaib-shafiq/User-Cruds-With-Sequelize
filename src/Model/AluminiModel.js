const { sequelize } = require("../Config/db");
const { DataTypes } = require("sequelize");

// Define the Alumni model
const Alumni = sequelize.define(
  "Alumni",
  {
    AlumniId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    RegistrationNum: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    City: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    EmploymentStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "No",
    },
    Image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    session: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

//Sync the Alumni model
// Alumni.sync({ alter: true })
//   .then(() => {
//     console.log("Alumni table updated successfully.");
//   })
//   .catch((err) => {
//     console.error("Error synchronizing Alumni table:", err);
//   });
module.exports = Alumni;
