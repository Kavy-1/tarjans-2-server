const express = require('express');
const activities = require('./data');
const bodyParser = require('body-parser');

console.log("Look at me, I'm a server!")

// Create an express app
const app = express();

// Serve static files from server/public folder
app.use(express.static('server/public'));

// Setup body parser to read request JSON body
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint (aka "route")
// GET /activities
// Respond with a list of activities
app.get('/activities', (req, res) => {
  // Send back the array of activities
  res.send(activities);
});

// Endpoint
// POST /activities
// Create a new activity
// and add it to our activities array
app.post('/activities', (req, res) => {
  console.log("I got a request!", req.body);
  let newActivity = req.body;

  // Server-side validation
  if (newActivity.type === undefined) {
    res.sendStatus(400);
    return;
  }

  // Add the new activity to our list of activities
  activities.push(newActivity);

  res.send(newActivity);
});

// Listen for requests
// Using array function syntax
const port = 3000;
app.listen(port, () => {
  console.log("This is Dr. Frasier Crane... I'm listening")
});









/*
ARROW FUNCTIONS!!!
// Plain ol' named function
function doubleIt(number) {
  return number * 2;
}
// Function expression
let doubleIt = function(number) {
  return number * 2;
}
// Arrow function
let doubleIt = (number) => {
  return number * 2;
}
let doubleIt = (number) => number * 2;
let doubleIt = number => number * 2;
doubleIt(7);    // --> 14
*/