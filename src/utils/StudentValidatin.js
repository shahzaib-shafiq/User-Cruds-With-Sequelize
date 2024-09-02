exports.CreateStudent = async (data) => {
  const {
    name,
    department_id,
    email,
    rollNumber,
    CNIC,
    department,
    phone,
    address,
    city,
    dob,
  } = data;

  console.log(data);

  // Check if any required fields are missing
  if (
    !name ||
    !department_id ||
    !email ||
    !rollNumber ||
    !CNIC ||
    !phone ||
    !address ||
    !city ||
    !dob
  ) {
    return false;
  }

  // If all required fields are present
  return true;
};
