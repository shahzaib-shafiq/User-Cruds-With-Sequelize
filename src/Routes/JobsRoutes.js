const express = require("express");
const router = express.Router();
const { addAluminiJob } = require("../Controller/JobsController");

const { verifyToken } = require("../Middlewares/authentication");
router.post("/addAluminiJob", verifyToken, addAluminiJob);
module.exports = router;
