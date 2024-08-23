const express = require("express");
const router = express.Router();
const upload = require('../Middlewares/multer')
const { addAlumini } = require('../Controller/AluminiController')

router.post("/addAlumini", upload.single("file"), addAlumini);




module.exports = router;