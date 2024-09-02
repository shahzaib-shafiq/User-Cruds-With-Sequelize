const Alumini = require("../Model/AluminiModel");
const Jobs = require("../Model/JobsModel");

const associations = async () => {
  try {
    await Jobs.hasOne(Alumini, {
      foreignKey: "AlumniId",
    });
  } catch (error) {}
};
module.exports = associations;
