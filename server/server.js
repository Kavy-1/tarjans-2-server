const express = require( 'express' );

console.log( 'look at me, im a new server' );

// Create an express app
const app = express();


// Listen for request
const port = 3000;
app.listen( port, function(){
    console.log( 'This is Dr. Fraiser Krane... I\'m listening' );
} );