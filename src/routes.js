
const express = require("express");
const router = express.Router();

const message = require("./messages");
const jobValidator = require("./Jobs");

// GET /
router.get("/", (req, res) => {
  res.json(message);
});

// GET /about
router.get("/about", (req, res) => {
  res.send("about");
});

// POST /jobs
router.post("/jobs", (req, res) => {
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

  res.json(responseData);
});

// 404 - Not Found
router.use((req, res) => {
  res.status(404).send("404");
});

module.exports = router;
