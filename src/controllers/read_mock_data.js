const fs = require('fs');
const path = require('path');

function readMockData(filename) {
    // Construct the absolute path to the file
    const filePath = path.join(__dirname, '..', 'mock_data', filename);
    try {
        // Read the content of the file synchronously
        const data = fs.readFileSync(filePath, 'utf8');
        // Parse the JSON data and return it
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading static data file:', err);
        throw err;
    }
}

module.exports = { readMockData };