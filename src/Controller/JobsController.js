const Job = require("../Model/JobsModel");

exports.addAluminiJob = async (req, res) => {
  const { Title, company, city, salary } = req.body;

  const aluminiJob = req.body;
  if (!Title || !company || !city) {
    res.status(400).json();
  }

  const addJob = await Job.create(aluminiJob);

  if (addJob) {
    res.status(200).json({ message: "Job Added", jobDetails: addJob });
  }
};
