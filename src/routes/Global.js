
const express = require("express");

const router = express.Router();
const { readMockData } = require('../controllers/read_mock_data');

// POST API endpoint
router.get('/restaurant_info', (req, res) => {
    
    const restaurantInfo = readMockData('restaurant_info.json');

    res.json(restaurantInfo);
});

module.exports = router;