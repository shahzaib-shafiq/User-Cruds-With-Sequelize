const { CreateStudent } = require("../utils/StudentValidatin");
const Department = require("../Model/DepartmentModel");
const Student = require("../Model/StudentModel");
const { where } = require("sequelize");

exports.AddStudent = async (req, res) => {
  try {
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

    const ValidateData = await CreateStudent(req.body);
    console.log(ValidateData);
    if (!ValidateData) {
      return res.status(401).json({ message: "Validation Error" });
    }

    // const dept = await Department.findOne({
    //   where: { department_id: department_id },
    // });

    // if (dept === null) {
    //   return res.status(401).json({ message: "Department Does Not Exist" });
    // }

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
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Failed to Add Data to DB", er: error });
  }
};

exports.UpdateStudent = async (req, res) => {
  try {
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
    const Studentid = req.params.id;
    const CheckStudentExistance = await Student.findOne({
      where: {
        student_id: Studentid,
      },
    });

    if (CheckStudentExistance === null) {
      return res.status(400).json({ message: "Student Does Not Exist" });
    }

    // const ValidateData = await CreateStudent(req.body);
    // if (!ValidateData) {
    //   return res.status(401).json({ message: "Validation Error" });
    // }

    const dept = await Department.findOne({
      where: { department_id: department_id },
    });

    if (dept === null) {
      return res.status(401).json({ message: "Department Does Not Exist" });
    }
    const updateStudent = await Student.update(Studentdata, {
      where: {
        student_id: Studentid,
      },
    });

    if (updateStudent) {
      res.status(200).json({ message: "Student Updated Sucessfully" });
    } else {
      res.status(200).json({ message: "Unable to update Student" });
    }
  } catch (error) {
    res.status(200).json({ message: error });
  }
};

exports.DeleteStudent = async (req, res) => {
  try {
    const Studentid = req.params.id;
    const CheckStudentExistance = await Student.findOne({
      where: {
        student_id: Studentid,
      },
    });

    if (CheckStudentExistance === null) {
      return res.status(400).json({ message: "Student Does Not Exist" });
    }
    const deleteStudent = await Student.destroy({
      where: { student_id: Studentid },
    });
    if (deleteStudent) {
      return res.status(400).json({ message: "Student Deleted Sucessfully" });
    } else {
      return res.status(400).json({ message: "Unable to Delete Student" });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
exports.GetAllStudent = async (req, res) => {
  try {
    const getStudents = await Student.findAll();
    if (getStudents) {
      return res.status(200).json({ Students: getStudents });
    } else {
      return res.status(200).json({ message: "Unable to Fetch Students" });
    }
  } catch (error) {
    return res.status(200).json({ message: error });
  }
};

exports.GetStudentbyId = async (req, res) => {
  try {
    const Studentid = req.params.id;
    const CheckStudentExistance = await Student.findOne({
      where: {
        student_id: Studentid,
      },
    });

    if (CheckStudentExistance) {
      return res.status(200).json({ student: CheckStudentExistance });
    } else {
      return res.status(401).json({ message: "Student Does Not Exist" });
    }
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};
