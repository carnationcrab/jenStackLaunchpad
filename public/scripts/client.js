console.log( 'js' );

console.log('js');

function onReady(){
 $('#requestButton').on('click', requestButtonClicked);
$.ajax({
    method: 'GET',
    url: '/waterBottles',
    success: function(response) {
        console.log('back from the server with:', response); 
    }
})

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