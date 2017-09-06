console.log( 'js' );

console.log('js');

function onReady(){
    $('#requestButton').on('click', requestButtonClicked);
}

$(document).ready(onReady);

function requestButtonClicked() {
    $.ajax({
        method: 'GET',
        url: '/glasses',
        success: function(response) {
            console.log('back from server with ->', response);
        }
    })
}