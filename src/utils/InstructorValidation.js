exports.CreateInstructor = async (data) => {
  const { instructor_name, email, phone, address, city } = data;
  if (!instructor_name || phone || !address || !city) {
    return false;
  }
  return true;
};
