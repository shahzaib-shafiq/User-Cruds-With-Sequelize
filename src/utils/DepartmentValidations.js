exports.CreateDepartment = async (data) => {
  const { department_code, department_name, location } = data;
  if (!department_code || !department_name || !location) {
    return false;
  }
  return true;
};
