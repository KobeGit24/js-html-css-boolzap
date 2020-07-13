function init() {
    message();
    $('#user-msg').keyup(press);
}


// function
function message() {
    $('#invio').click(function(){
        userInput = $('#user-msg').val();
        var tem = $('.template #my-answer').clone();
        tem.addClass('right');
        tem.children('.msg').append(userInput);
        $('#chat').append(tem);
        setTimeout(function(){
            var risp = $('.template #com-answer').clone();
            risp.addClass('left');
            $('#chat').append(risp);
        },1000)
        $('#user-msg').val("");
    });
}

    function press (){
    if (event.which==13) {
        userInput = $('#user-msg').val();
        var tem = $('.template #my-answer').clone();
        tem.addClass('right');
        tem.children('.msg').append(userInput);
        $('#chat').append(tem);
        setTimeout(function(){
            var risp = $('.template #com-answer').clone();
            risp.addClass('left');
            $('#chat').append(risp);
        },1000)
        $('#user-msg').val("");  
    }
};

$(document).ready(init);