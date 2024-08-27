exports.AluminiInputValidation = async (data) => {
  const {
    firstName,
    lastName,
    email,
    EmploymentStatus,
    RegistrationNum,
    department,
    session,
  } = data;

  // Check if any required field is missing or empty
  if (
    !firstName ||
    !lastName ||
    !email ||
    !EmploymentStatus ||
    !RegistrationNum ||
    !department ||
    !session
  ) {
    return "Enter All Details";
  }

  // Email validation regex
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Check if the email is valid
  if (!validRegex.test(email)) {
    return "Enter a valid email address";
  }

  return null;
};

exports.aluminiValideImage = async (img) => {
  if (!img) {
    return "Image Not Added";
  }

  return null;
};
