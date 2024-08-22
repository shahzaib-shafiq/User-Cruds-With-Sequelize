const { sequelize } = require('../Config/db');

const { DataTypes } = sequelize.DataTypes
const User = sequelize.define(
    'User',
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
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        Gender: {
            type: DataTypes.STRING,
            allowNull: true
        },

    },
    {
        timestamps: true,
    },
);

module.exports = User