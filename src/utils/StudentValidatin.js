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
  if (
    !name ||
    !department_id ||
    !email ||
    !rollNumber ||
    !CNIC ||
    department ||
    !phone ||
    !address ||
    !city ||
    !dob
  ) {
    return false;
  }
  return true;
};
