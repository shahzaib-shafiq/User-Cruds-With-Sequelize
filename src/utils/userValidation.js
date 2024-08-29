exports.userInputValidation = async (data) => {
  const { firstName, lastName, email, password } = data;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    firstName === null ||
    lastName === null ||
    email === null ||
    password === null ||
    firstName === undefined ||
    lastName === undefined ||
    email === undefined ||
    password === undefined
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

exports.userLoginValidation = async (data) => {
  const { email } = data;
  if (!email || email === null || email === undefined) {
    return "Enter Correct";
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
