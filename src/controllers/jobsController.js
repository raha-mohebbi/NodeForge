const jobValidator = require("../Jobs");

const jobsController = (req, res) => {
  const parsedData = req.body;
  const result = jobValidator(parsedData);

  if (result.error) {
    return res.status(400).json({
      error: result.error,
    });
  }

  const responseData = {
    job: parsedData,
  };

  console.log(parsedData);

  return res.json(responseData);
};

module.exports = jobsController;