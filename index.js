const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const globalRoutes = require("./src/routes/Global");
const memberRoutes = require("./src/routes/Member");

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/Global", globalRoutes);
app.use("/api/Member", memberRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
