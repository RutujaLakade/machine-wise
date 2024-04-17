// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./config');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3004;
const HOST = process.env.HOST || 'localhost';

app.use(bodyParser.json());

// Use API routes
app.use('/api', apiRoutes);

app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT}`);
});
