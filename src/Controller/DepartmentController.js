const Department = require("../Model/DepartmentModel");
exports.AddDepartment = async (req, res) => {
  const Departmentdata = req.body;
  const department = await Department.create(Departmentdata);

  if (department) {
    res.status(200).json({ message: "Data Added to DB" });
  } else {
    res.status(401).json({ message: "Failed to Add Data to DB" });
  }
};
