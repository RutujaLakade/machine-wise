// server/controllers/sampleController.js
const mongoose = require('../config');

// Now you can define your Mongoose models and use them in your controllers
const SampleModel = mongoose.model('Sample', sampleSchema);


// server/controllers/sampleController.js
const Sample = require('../models/Sample');

// Controller methods
exports.getAllSamples = async (req, res) => {
  try {
    const samples = await Sample.find();
    res.json(samples);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSample = async (req, res) => {
  const sample = new Sample({
    // Create sample object based on request body
  });

  try {
    const newSample = await sample.save();
    res.status(201).json(newSample);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Function to read samples from MongoDB
exports.readSamples = async () => {
  try {
    const samples = await Sample.find();
    return samples;
  } catch (err) {
    console.error('Error reading samples:', err.message);
    return null;
  }
};

