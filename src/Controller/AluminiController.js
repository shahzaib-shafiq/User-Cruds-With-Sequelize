const Alumini = require('../Model/AluminiModel')
const { AluminiInputValidation } = require('../utils/aluminiValidation')
exports.addAlumini = async (req, res) => {


    try {

        const AluminiData = req.body
        console.log(AluminiData)

        const aluminiValidation = await AluminiInputValidation(AluminiData)
        if (aluminiValidation) {
            res.status(400).json({ message: aluminiValidation })
        }

        const alumini = await Alumini.create(AluminiData)


        if (alumini) {

            res.status(200).json({ Message: "Alumini Added " })
        }
        else {
            res.status(200).json({ Message: "Alumini cannot be added Added " })

        }



    } catch (error) {

    }

}