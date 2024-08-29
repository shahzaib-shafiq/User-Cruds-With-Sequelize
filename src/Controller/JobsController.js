const Job = require("../Model/JobsModel");
const Alumini = require("../Model/AluminiModel");
const { JobValidation } = require("../utils/JobsValidation");
const { where } = require("sequelize");

exports.addAluminiJob = async (req, res) => {
  const { Title, company, city, salary } = req.body;

  const aluminiJob = req.body;
  const validateJob = JobValidation(aluminiJob);
  if (validateJob) {
    res.status(400).json({ message: validateJob });
  }

  // const AluminiId=Alumini.findOne({where})

  const addJob = await Job.create(aluminiJob);

  if (addJob) {
    res.status(200).json({ message: "Job Added", jobDetails: addJob });
  }
};
