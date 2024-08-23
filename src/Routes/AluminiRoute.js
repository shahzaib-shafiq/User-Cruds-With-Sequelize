const express = require("express");
const router = express.Router();
const { addAlumini } = require('../Controller/AluminiController')

router.post("/addAlumini", addAlumini);




module.exports = router;