exports.CreateStudent = async (data) => {
  const { name, rollNumber, CNIC, department, phone, address, city, dob } =
    data;

  if (
    !name ||
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
