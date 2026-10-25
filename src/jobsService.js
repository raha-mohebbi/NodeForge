const jobValidator = require("./Jobs");

const createJob = (job) => {
  return jobValidator(job);
};

module.exports = createJob;