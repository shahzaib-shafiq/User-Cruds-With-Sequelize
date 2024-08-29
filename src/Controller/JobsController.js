const Job = require("../Model/JobsModel");

const { JobValidation } = require("../utils/JobsValidation");

exports.addAluminiJob = async (req, res) => {
  const { AlumniId, Title, company, city, salary } = req.body;

  const aluminiJob = req.body;
  const validateJob = JobValidation(aluminiJob);
  if (!validateJob) {
    res.status(400).json({ message: "Error in Adding Job" });
  }
  const addJob = await Job.create(aluminiJob);

  if (addJob) {
    res.status(200).json({ message: "Job Added", jobDetails: addJob });
  } else {
    res.status(200).json({ message: "Error in Adding Job" });
  }
};
