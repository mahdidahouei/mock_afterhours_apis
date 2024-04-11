const express = require("express");
const path = require("path");

const router = express.Router();
const {
  readMockData,
  writeMockData,
} = require("../controllers/mock_data_controller");

router.get("/restaurant_summary_info", (req, res) => {
  const restaurantInfo = readMockData("restaurant_summary_info.json");

  res.json(restaurantInfo);
});

// POST API endpoint to handle editing data
router.post("/restaurant_summary_info/edit", (req, res) => {
  const message = writeMockData("restaurant_summary_info.json", req.body.editedData);
  if (message) {
    res.status(500).json({ message });
  } else {
    res.json({ message: "Changes saved successfully." });
  }
});

// Serve the edit_data.html file
router.get("/restaurant_summary_info/edit", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "edit_data.html"));
});

router.get("/restaurant_info", (req, res) => {
  const restaurantInfo = readMockData("restaurant_info.json");

  res.json(restaurantInfo);
});

// POST API endpoint to handle editing data
router.post("/restaurant_info/edit", (req, res) => {
  const message = writeMockData("restaurant_info.json", req.body.editedData);
  if (message) {
    res.status(500).json({ message });
  } else {
    res.json({ message: "Changes saved successfully." });
  }
});

// Serve the edit_data.html file
router.get("/restaurant_info/edit", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "edit_data.html"));
});

router.post("/search_restaurant", (req, res) => {
  const restaurants = readMockData("search_restaurant.json");

  res.json(restaurants);
});

router.get("/search_restaurant", (req, res) => {
  const restaurants = readMockData("search_restaurant.json");

  res.json(restaurants);
});

// POST API endpoint to handle editing data
router.post("/search_restaurant/edit", (req, res) => {
  const message = writeMockData("search_restaurant.json", req.body.editedData);
  if (message) {
    res.status(500).json({ message });
  } else {
    res.json({ message: "Changes saved successfully." });
  }
});

// Serve the edit_data.html file
router.get("/search_restaurant/edit", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "edit_data.html"));
});

router.post("/search_ranking", (req, res) => {
  const rankings = readMockData("search_ranking.json");

  res.json(rankings);
});

router.get("/search_ranking", (req, res) => {
  const rankings = readMockData("search_ranking.json");

  res.json(rankings);
});

// POST API endpoint to handle editing data
router.post("/search_ranking/edit", (req, res) => {
  const message = writeMockData("search_ranking.json", req.body.editedData);
  if (message) {
    res.status(500).json({ message });
  } else {
    res.json({ message: "Changes saved successfully." });
  }
});

// Serve the edit_data.html file
router.get("/search_ranking/edit", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "edit_data.html"));
});

router.get("/ranking_info", (req, res) => {
  const rankings = readMockData("ranking_info.json");

  res.json(rankings);
});

// POST API endpoint to handle editing data
router.post("/ranking_info/edit", (req, res) => {
  const message = writeMockData("ranking_info.json", req.body.editedData);
  if (message) {
    res.status(500).json({ message });
  } else {
    res.json({ message: "Changes saved successfully." });
  }
});

// Serve the edit_data.html file
router.get("/ranking_info/edit", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "edit_data.html"));
});

module.exports = router;
