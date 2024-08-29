const express = require("express");
const router = express.Router();
const upload = require("../Middlewares/multer");
const { addAlumini } = require("../Controller/AluminiController");

const { verifyToken } = require("../Middlewares/authentication");

router.post("/addAlumini", verifyToken, upload.single("file"), addAlumini);

module.exports = router;
