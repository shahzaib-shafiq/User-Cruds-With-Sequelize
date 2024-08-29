const Student = require("../Model/StudentModel");
exports.AddStudent = async (req, res) => {
  const Studentdata = req.body;
  const student = await Student.create(Studentdata);
  if (student) {
    res.status(200).json({ message: "Data Added to DB" });
  } else {
    res.status(401).json({ message: "Failed to Add Data to DB" });
  }
};
