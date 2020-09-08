const activities = require( './data' );
const express = require( 'express' );

// Create a router for activities
const router = express.Router();

// Endpoint (aka "route")
// GET /activities
// Respond with a list of activities
router.get( '/activities', ( req, res ) => {
    // Send back the array of activities
    res.send( activities );
} );
  
// Endpoint
// POST /activities
// Create a new activity
// and add it to our activities array
router.post( '/activities', ( req, res ) => {
    console.log( "I got a request!", req.body );
    let newActivity = req.body;
  
    // Server-side validation
    if ( newActivity.type === undefined ){
      res.sendStatus(400);
      return;
    }
  
    // Add the new activity to our list of activities
    activities.push( newActivity );
  
    res.send( newActivity );
} );

// Export our router
// so our server can use it.
module.exports = router;