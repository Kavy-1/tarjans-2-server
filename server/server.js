const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const activitiesRouter = require( './activities' );

console.log( 'Look at me, I\'m a server!' )

// Create an express app
const app = express();

// Serve static files from server/public folder
app.use( express.static( 'server/public' ) );

// Setup body parser to read request JSON body
app.use( bodyParser.urlencoded( { extended: true } ) );

// Use our activities router from ./activities.js
app.use( '/', activitiesRouter );

// Listen for requests
// Using array function syntax
const port = 3000;
app.listen( port, () => {
  console.log( 'This is Dr. Frasier Crane... I\'m listening' )
} );









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