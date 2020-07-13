




function init() {
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
        console.log(userInput);
        $('#user-msg').val("");
    });

}


// function

$(document).ready(init);