const express = require("express");
const router = express.Router();
const upload = require("../Middlewares/multer");
const {
  AddStudent,
  UpdateStudent,
  DeleteStudent,
  GetAllStudent,
  GetStudentbyId,
} = require("../Controller/StudentController");

const { verifyToken } = require("../Middlewares/authentication");

router.post("/addStudent", verifyToken, AddStudent);
router.patch("/UpdateStudent/:id", verifyToken, UpdateStudent);
router.delete("/DeleteStudent/:id", verifyToken, DeleteStudent);
router.get("/GetAllStudent", verifyToken, GetAllStudent);
router.get("/GetStudentbyId/:id", verifyToken, GetStudentbyId);

module.exports = router;
