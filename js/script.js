




function init() {

    var userInput = $('#user-msg');
    var txt = userInput.val();

    $('#invio').click(function(){
        console.log(txt);
    });

}


// function

$(document).ready(init);