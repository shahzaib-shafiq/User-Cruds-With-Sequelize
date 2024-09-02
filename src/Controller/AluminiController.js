const { where } = require("sequelize");
const Alumini = require("../Model/AluminiModel");
const {
  AluminiInputValidation,
  aluminiValideImage,
} = require("../utils/aluminiValidation");

exports.addAlumini = async (req, res) => {
  try {
    // Extract alumni data from the request body
    const {
      RegistrationNum,
      department,
      session,
      firstName,
      lastName,
      email,
      gender,
      city,
      EmploymentStatus,
    } = req.body;

    // Get the uploaded image file from req.file
    const file = req.file;

    // Validate required fields
    const validationError = await AluminiInputValidation(req.body);
    if (validationError) {
      return res.status(400).json({ message: validationError });
    }

    // Check if file is uploaded
    if (!file) {
      return res.status(400).json({ message: "Image is required." });
    }

    let Image = file.path; // Store the full path of the uploaded image
    Image = "http://localhost:9001/".concat(Image);
    console.log(Image);
    // Check for duplicate alumni by email
    const existingAlumni = await Alumini.findOne({ where: { email } });
    if (existingAlumni) {
      return res
        .status(400)
        .json({ message: "An alumni with this email already exists." });
    }

    // Optionally validate the image (if aluminiValideImage function exists)
    const aluminiImageValidation = await aluminiValideImage(Image);
    if (aluminiImageValidation) {
      return res.status(400).json({ message: aluminiImageValidation });
    }

    // Create new alumni record in the database
    const newAlumni = await Alumini.create({
      firstName,
      lastName,
      email,
      gender,
      city,
      EmploymentStatus,
      Image: Image, // Store the full image path in the 'image' column
      RegistrationNum,
      department,
      session,
    });

    // If alumni is successfully created, respond with success
    return res
      .status(201)
      .json({ message: "Alumni added successfully!", alumni: newAlumni });
  } catch (error) {
    console.error("Error adding alumni:", error);
    return res.status(500).json({
      message: "Server error, unable to add alumni.",
      error: error.message,
    });
  }
};

exports.getAllAlumini = async (req, res) => {
  try {
    const allAlumini = await Alumini.findAll();

    if (allAlumini) {
      return res.status(200).json({
        Alumini: allAlumini,
      });
    } else {
      return res.status(401).json({ message: "Unable to Fetch the Alumini" });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

exports.getAllAluminibyId = async (req, res) => {
  try {
    const Aluminiid = req.params.id;
    const findAlumini = await Alumini.findOne({
      where: { AlumniId: Aluminiid },
    });
    console.log("=============================", findAlumini);

    if (findAlumini) {
      return res.status(200).json({ Alumini: findAlumini });
    } else {
      return res.status(401).json({ message: "Alumini Does not Exist" });
    }
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};
