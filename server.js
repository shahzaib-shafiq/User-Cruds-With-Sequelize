const express = require("express");
const app = express();
const associations = require("./src/Model/Alumini_Job_Associations");
const { connectToDatabase } = require("./src/Config/db");
const userRoute = require("./src/Routes/userRoute");
const AluminiRoute = require("./src/Routes/AluminiRoute");
const JobRoute = require("./src/Routes/JobsRoutes");
const CourseRoutes = require("./src/Routes/CourseRoutes");
const DepartmentRoutes = require("./src/Routes/DepartmentRoutes");
const InstructorRoutes = require("./src/Routes/InstructorRoutes");
const StudentRoutes = require("./src/Routes/StudentRoutes");

const port = process.env.port || 3000;
var bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbConnect = async () => {
  try {
    await connectToDatabase();
    console.log("Database connected successfully.");
    //await associations();
    console.log("Associations Created");
  } catch (error) {
    console.error("Failed to connect to database:", error);
  }
};

dbConnect();

app.use("/api", userRoute);
app.use("/api", AluminiRoute);
app.use("/api", JobRoute);
app.use("/api", CourseRoutes);
app.use("/api", DepartmentRoutes);
app.use("/api", InstructorRoutes);
app.use("/api", StudentRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
