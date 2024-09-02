const { CreateDepartment } = require("../utils/DepartmentValidations");
const Department = require("../Model/DepartmentModel");
const { where } = require("sequelize");
exports.AddDepartment = async (req, res) => {
  try {
    const Departmentdata = req.body;
    const { department_code, department_name, location } = req.body;
    const ValidateData = CreateDepartment(req.body);
    if (!ValidateData) {
      return res.status(400).json({ message: "Validation failed" });
    }

    const CheckDuplicateDepartment = await Department.findOne({
      where: { department_code: department_code },
    });
    if (CheckDuplicateDepartment) {
      return res.status(401).json({ message: "Department Already Exist" });
    }
    const department = await Department.create(Departmentdata);

    if (department) {
      return res.status(200).json({ message: "Data Added to DB" });
    } else {
      return res.status(401).json({ message: "Failed to Add Data to DB" });
    }
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};
