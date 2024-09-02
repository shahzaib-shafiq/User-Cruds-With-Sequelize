const express = require("express");
const router = express.Router();
const upload = require("../Middlewares/multer");
const {
  addAlumini,
  getAllAlumini,
  getAllAluminibyId,
} = require("../Controller/AluminiController");

const { verifyToken } = require("../Middlewares/authentication");

router.post("/addAlumini", verifyToken, upload.single("file"), addAlumini);
router.get("/getAllAlumini", verifyToken, getAllAlumini);
router.get("/getAllAluminibyId/:id", verifyToken, getAllAluminibyId);

module.exports = router;
