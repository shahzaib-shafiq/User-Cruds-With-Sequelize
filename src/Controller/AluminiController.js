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
        console.log('======================================', Image);

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

        // Optionally validate the alumni input data (if AluminiInputValidation function exists)
        const aluminiInputValidation = await AluminiInputValidation(req.body);
        if (aluminiInputValidation) {
            return res.status(400).json({ message: aluminiInputValidation });
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

// exports.addAlumini = async (req, res) => {


//     try {

//         const AluminiData = req.body
//         const { firstName, lastName, email, gender, city, employmentStatus } = req.body;
//         const file = req.file
//         console.log(AluminiData)
//         console.log(file)
//         const Image = file.filename
//         console.log('======================================', Image)

//         const existingAlumni = await Alumini.findOne({ where: { email } });
//         if (existingAlumni) {
//             return res.status(400).json({ message: 'An alumni with this email already exists.' });
//         }

//         const aluminiImage = await aluminiValideImage(Image)

//         if (aluminiImage) {
//             res.status(400).json({ message: aluminiValideImage })
//         }

//         const aluminiValidation = await AluminiInputValidation(AluminiData)

//         if (aluminiValidation) {
//             res.status(400).json({ message: aluminiValidation })
//         }


//         const alumini = await Alumini.create({
//             firstName,
//             lastName,
//             email,
//             gender,
//             city,
//             employmentStatus,
//             Image, // Store the Image path

//         })


//         if (alumini) {

//             return res.status(201).json({ message: 'Alumni added successfully!', alumni: newAlumni });
//         }
//         else {
//             res.status(200).json({ Message: "Alumini cannot be added Added " })

//         }

//     } catch (error) {
//         res.status(200).json({ Message: "Alumini cannot be added Added in List" })
//     }

// }