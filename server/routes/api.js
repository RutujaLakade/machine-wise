// server/routes/api.js
const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

// Define API routes
router.get('/samples', sampleController.getAllSamples);
router.post('/samples', sampleController.createSample);
// Add more routes as needed

module.exports = router;
