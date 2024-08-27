const express = require("express");
const router = express.Router();
const { addAluminiJob } = require("../Controller/JobsController");

router.post("/addAluminiJob", addAluminiJob);
module.exports = router;
