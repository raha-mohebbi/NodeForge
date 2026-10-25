
const express = require("express");
const router = express.Router();
const jobsController = require("./controllers/jobsController");

const message = require("./messages");

// GET /
router.get("/", (req, res) => {
  res.json(message);
});

// GET /about
router.get("/about", (req, res) => {
  res.send("about");
});

// POST /jobs
router.post("/jobs", jobsController);

// 404 - Not Found
router.use((req, res) => {
  res.status(404).send("404");
});

module.exports = router;
