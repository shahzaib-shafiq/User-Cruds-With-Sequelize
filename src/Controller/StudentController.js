const { CreateStudent } = require("../utils/StudentValidatin");
const Student = require("../Model/StudentModel");
exports.AddStudent = async (req, res) => {
  const Studentdata = req.body;

  const ValidateData = CreateStudent(req.body);
  if (!ValidateData) {
    return res.status(401).json({ message: "Validation Error" });
  }
  const student = await Student.create(Studentdata);
  if (student) {
    return res.status(200).json({ message: "Data Added to DB" });
  } else {
    return res.status(401).json({ message: "Failed to Add Data to DB" });
  }
};
