




function init() {
    $('#invio').click(function(){
        userInput = $('#user-msg').val();
        $('#user-msg').val().addClass('user-mess');
        $('#chat').append(userInput).
        console.log($('#user-msg').val());
        $('#user-msg').val("");
    });

}


// function

$(document).ready(init);