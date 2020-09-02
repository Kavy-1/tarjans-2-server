console.log( 'client.js' );

$( document ).ready( onReady );

function onReady(){
    console.log( 'I\'m ready' );

    // AJAX!!!!!
    $.ajax( {
        url:'/activities',
        method: 'GET'
    } ).then( function( activities ){
        console.log( 'We got a response!', activities );

        // Render the activities
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


    // Handle new activity form
    $( document ).on( 'click', '#submitButton', onSubmit );
} // end onReady

function onSubmit(){
    let newActivity = {
        activity: $( '#activityInput' ).val(),
        type: $( '#typeInput' ).val(),
        isScreenTime: $( '#isScreenTimeInput').is( ':checked' )
    };
    console.log( 'new activity object', newActivity );
} // end onSubmit
