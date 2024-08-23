exports.AluminiInputValidation = async (data) => {

    const { firstName, lastName, email, Gender, City, EmploymentStatus } = data
    if (
        !firstName || !lastName ||
        !email || !EmploymentStatus ||

        firstName === null || lastName === null ||
        email === null || EmploymentStatus === null ||

        firstName === undefined || lastName === undefined ||
        email === undefined ||
        EmploymentStatus === undefined

    ) {
        return "Enter All Details";
    }

    var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //console.log(emailAddress);

    console.log("validation", data);
    if (!validRegex.test(email)) {
        return "Enter a valid email address";
    }

    return null;
};

exports.aluminiValideImage = async (img) => {

    if (!img || img === undefined || img === null) {
        return "Image Not Added"
    }

    return null;
}