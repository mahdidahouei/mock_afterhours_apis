const express = require("express");
const path = require("path");

const router = express.Router();
const {
  readMockData,
  writeMockData,
} = require("../controllers/mock_data_controller");

router.get("/available_votes", (req, res) => {
  const rankings = readMockData("available_votes.json");

  res.json(rankings);
});

// POST API endpoint to handle editing data
router.post("/available_votes/edit", (req, res) => {
  const message = writeMockData("available_votes.json", req.body.editedData);
  if (message) {
    res.status(500).json({ message });
  } else {
    res.json({ message: "Changes saved successfully." });
  }
});

// Serve the edit_data.html file
router.get("/available_votes/edit", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "edit_data.html"));
});

router.post("/been_to_restaurant", (req, res) => {
  res.status(500).json({ message: "failed" })
  // res.json({ message: "success" });
});

router.get("/been_to_restaurant", (req, res) => {
  res.json({ message: "success" });
});

// POST API endpoint to handle editing data
router.post("/been_to_restaurant/edit", (req, res) => {
  const message = writeMockData("been_to_restaurant.json", req.body.editedData);
  if (message) {
    res.status(500).json({ message });
  } else {
    res.json({ message: "Changes saved successfully." });
  }
});

// Serve the edit_data.html file
router.get("/been_to_restaurant/edit", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "edit_data.html"));
});

module.exports = router;
