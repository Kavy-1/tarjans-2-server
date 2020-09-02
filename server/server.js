const express = require( 'express' );
const bodyParser = require( 'body-parser' );

console.log( 'look at me, im a new server' );

// Create an express app
const app = express();

// Server static files from server/public folder
app.use( express.static( 'server/public' ) );

// Set up body parser to read request JSOn 
app.use( bodyParser.urlencoded( { extended: true } ) );

// Define a list of activities for me
let activities = [
    {
        activity: 'Typing practice',
        isScreenTime: true,
        type: 'Mind Exercises'
    },
    {
        activity: 'Bike around the lake',
        isScreenTime: false,
        type: 'Body break'
    },
    {
        activity: 'FB chat with a friend',
        isScreenTime: true,
        type: 'Social'
    }
];

//ENDPOINT
// GET /activities
app.get( `/activities`, function( req, res ){
    // Send back the array of activities
    res.send( activities );
} )

//ENDPOINT
// POST /activities
// create a new activity and add it to our activities array
app.post( `/activities`, function( req, res ){
    console.log( 'I got a request!', req.body );
    let newActivity = req.body;
    activities.push( newActivity );
    res.send( newActivity );
} )

//---------------------------------------------------------------
// Listen for request
const port = 3000;
app.listen( port, function(){
    console.log( 'This is Dr. Fraiser Krane... I\'m listening' );
} );