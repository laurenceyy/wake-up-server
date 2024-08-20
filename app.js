const express = require('express');
const cron = require('node-cron');
const axios = require('axios');

const app = express();
const port = process.env.PORT||3000;

// Your API endpoint
const apiEndpoint = 'https://wake-up-skyskill.onrender.com';
const apiEndpoint2 = 'https://binary-bloggy.onrender.com/';
// const apiEndpoint = 'http://localhost:4000/wake';

// Define the cron schedule (every two minutes between 5am to 1am)
cron.schedule('*/8 * * * *', () => {
  makeApiRequest();
});

// Function to make the API request using Axios
async function makeApiRequest() {
  try {
    const response = await axios.get(apiEndpoint);
    const response2 = await axios.get(apiEndpoint2);
    
    // Process the API response data if needed
    console.log(response.data);
    console.log("Response to blog",response2.status);
  } catch (error) {
    console.error('Error during API request:', error.message);
  }
}

app.get('/',(req,res)=>{
    res.json({message:"Support service on blog awake!!"})
})
// Your other Express routes and configurations go here...

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
