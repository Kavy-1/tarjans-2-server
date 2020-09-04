console.log( 'client.js' );

$( document ).ready( onReady );

function onReady(){
    console.log( 'I\'m ready' );
    refreshActivities();
    // Handle new activity form
    $( document ).on( 'click', '#submitButton', onSubmit );
} // end onReady

function refreshActivities(){
    // AJAX!!!!
    $.ajax( {
        url:'/activities',
        method: 'GET'
    } ).then( function( activities ){
        console.log( 'We got a response!', activities );

        // Render the activities
        $( 'tbody' ).empty();
        for( let activity of activities ){
            $( 'tbody' ).append( `
                <tr>
                    <td>${activity.activity}</td>
                    <td>${activity.isScreenTime}</td>
                    <td>${activity.type}</td>
                </tr>
            ` );
        } // end for
    } ).catch( function( errorInfo ){
            console.log( 'Error!', errorInfo );
            alert( 'Server is down, try again later.' );
    } ); // end of AJAX .then()
} // end refreshActivities

function onSubmit(){
    let newActivity = {
        activity: $( '#activityInput' ).val( '' ),
        type: $( '#typeInput' ).val( '' ),
        isScreenTime: $( '#isScreenTimeInput').is( ':checked' )
    };
    console.log( 'new activity object', newActivity );

    // POST /activities with our newActivity object
    $.ajax( {
        url: '/activities',
        method: 'POST',
        data: newActivity
    } ).then( function( response ){
        console.log( 'Created an activity!', response )

        console.log( 'time to refresh' );
        refreshActivities();
        
    } ).catch( function( errorInfo ){
        console.log( 'Error', errorInfo )
    } ) // end of AJAX .then()
} // end onSubmit
