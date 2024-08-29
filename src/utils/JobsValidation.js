exports.JobValidation = async (data) => {
  const { Title, company, city, salary } = data;

  if (!Title || !company || !city) {
    return "All Fields Are Required";
  }

  return true;
};
