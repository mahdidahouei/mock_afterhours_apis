
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const globalRoutes = require('./src/routes/Global');


// Middleware to parse JSON bodies
app.use(express.json());


// Routes
app.use('/api/Global', globalRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
