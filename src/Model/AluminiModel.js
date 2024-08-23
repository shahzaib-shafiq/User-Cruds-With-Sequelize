const { sequelize } = require('../Config/db');

const { DataTypes } = require("sequelize")
const Alumni = sequelize.define(
    'Alumni',
    {
        // Model attributes are defined here
        AlumniId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Gender: {
            type: DataTypes.STRING,
            allowNull: true
        },
        City: {
            type: DataTypes.STRING,
            allowNull: true
        },
        EmploymentStatus: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'No',
        },
        Image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        timestamps: true,
    },
);
// Sync the model with the database, checking if the table already exists
// Alumni.sync({ alter: true }) // you can use force true instead of alter to drop the table and create new
//     .then((result) => {
//         if (result.changed) {
//             console.log("Alumni table updated successfully.");
//         } else {
//             console.log("Alumni table already exists and is up to date.");
//         }
//     })
//     .catch((err) => {
//         console.error("Error synchronizing Alumni table:", err);
//     });
module.exports = Alumni