// client/src/components/SampleComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const {getData} = require('./sampleController')
  // Import sampleController.js
const sampleController = require('./server/controllers/sampleController');

// Call the readSamples function
async function fetchSamples() {
  try {
    const samples = await sampleController.readSamples();
    console.log(samples);
    // Further processing of samples, if needed
  } catch (error) {
    console.error('Error fetching samples:', error.message);
  }
  const handleClick = () => {
    
    console.log("Button clicked");
    fetchSamples();
    //console.log(data);
const SampleComponent = () => {
  // Define state to store fetched data
  const [sampleData, setSampleData] = useState([]);

  useEffect(() => {
    // Fetch data from backend API using Axios
    axios.get('/api/samples')
      .then(response => {
        // Update state with fetched data
        setSampleData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run effect only once

  return (
    <div>
      <button type="button" onClick={handleClick} align='center'>Graph</button>&emsp;&emsp;&emsp;
      <button type="button">Table</button>
      <ul>
        {/* Map over fetched data and render it */}
        {sampleData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

  };
};
export default sampleComponents;