const { CreateStudent } = require("../utils/StudentValidatin");
const Department = require("../Model/DepartmentModel");
const Student = require("../Model/StudentModel");

exports.AddStudent = async (req, res) => {
  const {
    name,
    department_id,
    email,
    rollNumber,
    CNIC,
    department,
    phone,
    address,
    city,
    dob,
  } = req.body;
  const Studentdata = req.body;

  const ValidateData = CreateStudent(req.body);
  if (!ValidateData) {
    return res.status(401).json({ message: "Validation Error" });
  }

  const dept = await Department.findOne({
    where: { department_id: department_id },
  });

  if (dept === null) {
    return res.status(401).json({ message: "Department Does Not Exist" });
  }
  const CheckDuplicateStudent = await Student.findOne({
    where: { email: email },
  });

  if (CheckDuplicateStudent) {
    return res.status(401).json({ message: "Student Already Exist" });
  }
  const student = await Student.create(Studentdata);
  if (student) {
    return res.status(200).json({ message: "Student Data Added to DB" });
  } else {
    return res.status(401).json({ message: "Failed to Add Data to DB" });
  }
};
