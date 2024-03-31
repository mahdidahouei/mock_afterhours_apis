const fs = require("fs");
const path = require("path");

function readMockData(filename) {
  // Construct the absolute path to the file
  const filePath = path.join(__dirname, "..", "mock_data", filename);
  try {
    // Read the content of the file synchronously
    const data = fs.readFileSync(filePath, "utf8");
    // Parse the JSON data and return it
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading static data file:", err);
    throw err;
  }
}

// Function to write JSON data to file
function writeMockDataToJson(filename, data, callback) {
  const filePath = path.join(__dirname, "..", "mock_data", filename);
  fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      callback(err);
      return;
    }
    callback(null);
  });
}

function writeMockData(fileName, editedData) {
  var message;
  var newData;
  try {
    newData = JSON.parse(editedData);
  } catch {
    message = "Invalid Json";
  }
  writeMockDataToJson(fileName, newData, (err) => {
    if (err) {
      message = "Failed to save changes.";
    }
  });
  return message;
}

module.exports = { readMockData, writeMockData };
