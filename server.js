const express = require("express");
const app = express();

const { connectToDatabase } = require("./src/Config/db");
const userRoute = require("./src/Routes/userRoute");
const AluminiRoute = require("./src/Routes/AluminiRoute");
const JobRoute = require("./src/Routes/JobsRoutes");

const port = process.env.port || 3000;
var bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const dbConnect = async () => {
  try {
    await connectToDatabase();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Failed to connect to database:", error);
  }
};

dbConnect();

app.use("/api", userRoute);
app.use("/api", AluminiRoute);
app.use("/api", JobRoute);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
