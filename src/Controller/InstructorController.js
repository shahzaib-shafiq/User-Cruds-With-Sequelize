const Instructor = require("../Model/InstructorModel");
exports.AddInstructor = async (req, res) => {
  const Instructordata = req.body;
  const instructor = await Instructor.create(Instructordata);
  if (instructor) {
    res.status(200).json({ message: "Data Added to DB" });
  } else {
    res.status(401).json({ message: "Failed to Add Data to DB" });
  }
};
