const express = require("express");
const path = require("path");

const router = express.Router();
const {
  readMockData,
  writeMockData,
} = require("../controllers/mock_data_controller");

router.get("/restaurant_info", (req, res) => {
  const restaurantInfo = readMockData("restaurant_info.json");

  res.json(restaurantInfo);
});

// POST API endpoint to handle editing data
router.post("/restaurant_info/edit", (req, res) => {
  const editedData = req.body.editedData;
  const newData = JSON.parse(editedData); // Assuming the submitted data is valid JSON
  // Write the edited data to the JSON file
  writeMockData("restaurant_info.json", newData, (err) => {
    if (err) {
      res.status(500).json({ message: "Failed to save changes." });
      return;
    }
    res.json({ message: "Changes saved successfully." });
  });
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
    const editedData = req.body.editedData;
    const newData = JSON.parse(editedData); // Assuming the submitted data is valid JSON
    // Write the edited data to the JSON file
    writeMockData("search_restaurant.json", newData, (err) => {
      if (err) {
        res.status(500).json({ message: "Failed to save changes." });
        return;
      }
      res.json({ message: "Changes saved successfully." });
    });
  });
  
  // Serve the edit_data.html file
  router.get("/search_restaurant/edit", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "edit_data.html"));
  });

module.exports = router;

// /api/Global/restaurant_summary_info?city_id=2 :

//
