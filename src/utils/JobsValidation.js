exports.JobValidation = async (data) => {
  const { AlumniId, Title, company, city, salary } = data;

  if ((!AlumniId, !Title || !company || !city)) {
    return "All Fields Are Required";
  }

  return true;
};
