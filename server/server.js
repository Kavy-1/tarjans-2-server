const express = require( 'express' );

console.log( 'look at me, im a new server' );

// Create an express app
const app = express();

// Server static files from server/public folder
app.use( express.static( 'server/public' ) );

// Define a list of activities for my kid
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
// Get /activities
app.get( `/activities`, function( req, res ){
    // Send back the array of activities
    res.send( activities );
} );

//---------------------------------------------------------------
// Listen for request
const port = 3000;
app.listen( port, function(){
    console.log( 'This is Dr. Fraiser Krane... I\'m listening' );
} );