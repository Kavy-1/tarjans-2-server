console.log( 'client.js' );

$( document ).ready( onReady );

function onReady(){
    console.log( 'I\'m ready' );

    // AJAX!!!!!
    $.ajax( {
        url:'/activities'
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
    } ); // end of AJAX .then()
} // end onReady
