const express = require("express");
const router = express.Router();
const upload = require("../Middlewares/multer");
const { AddDepartment } = require("../Controller/DepartmentController");

const { verifyToken } = require("../Middlewares/authentication");

router.post("/addDepartment", verifyToken, AddDepartment);

module.exports = router;
