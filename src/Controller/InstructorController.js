const { CreateInstructor } = require("../utils/InstructorValidation");
const Instructor = require("../Model/InstructorModel");
exports.AddInstructor = async (req, res) => {
  try {
    const Instructordata = req.body;

    const ValidateData = CreateInstructor(req.body);
    if (!ValidateData) {
      return res.status(401).json({ message: "Validation Error" });
    }

    const instructor = await Instructor.create(Instructordata);
    if (instructor) {
      return res.status(200).json({ message: "Data Added to DB" });
    } else {
      return res.status(401).json({ message: "Failed to Add Data to DB" });
    }
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};
