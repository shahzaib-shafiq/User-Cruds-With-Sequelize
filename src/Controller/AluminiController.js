const Alumini = require('../Model/AluminiModel')
const { AluminiInputValidation, aluminiValideImage } = require('../utils/aluminiValidation')
exports.addAlumini = async (req, res) => {
    try {
        // Extract alumni data from the request body
        const { firstName, lastName, email, gender, city, employmentStatus } = req.body;

        // Get the uploaded image file from req.file
        const file = req.file;

        // Validate required fields
        if (!firstName || !lastName || !email) {
            return res.status(400).json({ message: 'First Name, Last Name, and Email are required.' });
        }

        // Check if file is uploaded
        if (!file) {
            return res.status(400).json({ message: 'Image is required.' });
        }

        const Image = file.path; // Store the full path of the uploaded image


        // Check for duplicate alumni by email
        const existingAlumni = await Alumini.findOne({ where: { email } });
        if (existingAlumni) {
            return res.status(400).json({ message: 'An alumni with this email already exists.' });
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
            employmentStatus,
            image: Image, // Store the full image path in the 'image' column
        });

        // If alumni is successfully created, respond with success
        return res.status(201).json({ message: 'Alumni added successfully!', alumni: newAlumni });

    } catch (error) {
        console.error('Error adding alumni:', error);
        return res.status(500).json({ message: 'Server error, unable to add alumni.', error: error.message });
    }
};
