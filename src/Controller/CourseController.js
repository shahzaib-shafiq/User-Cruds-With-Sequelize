const Course = require("../Model/CourseModel");
exports.AddCourse = async (req, res) => {
  const coursedata = req.body;
  const course = await Course.create(coursedata);

  if (course) {
    res.status(200).json({ message: "Data Added to DB" });
  } else {
    res.status(401).json({ message: "Failed to Add Data to DB" });
  }
};
