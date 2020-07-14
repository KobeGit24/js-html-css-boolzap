function init() {
    var time = $('#chat .msg');
    time.find('.hours').append(getActualHours());
    $('#invio').click(sendMessage);
    // $('.user-item').click(chooseChat);
    $('#user-msg').keyup(inputPress);
    nameFind();
}
// function

function getActualHours() {
    var date = new Date;
    return date.getHours() + ':' + date.getMinutes();
}

function sendMessage() {
        var userInput = $('#user-msg').val();
        var tem = $('.template #my-answer').clone();
        tem.find('#my-msg').append(userInput);
        tem.find('.hours').append(getActualHours());
        $('#chat').append(tem);
        setTimeout(function(){
            var risp = $('.template #com-answer').clone();
            risp.find('.hours').append(getActualHours());
            $('#chat').append(risp);
        },1000)
        $('#user-msg').val("");
}

function nameFind(){
    var search = document.getElementById("search-list");
    var filtro = search.value.toUpperCase();
    var userList = document.getElementById("user-list");
    var userItem =userList.getElementsByClassName("user-item");
    var tag = userList.getElementsByTagName("h3");
    for (i = 0; i < tag.length; i++) {
        j = userList.getElementsByTagName("h3")[i];
        text = j.textContent || j.innerText;
        if (text.toUpperCase().indexOf(filtro) > -1) {
        userItem[i].style.display = "flex";
        } else {
        userItem[i].style.display = "none";
        }
    }
}

function inputPress() {
    var userInput = $('#user-msg').val();
    var iconGo = $('#icon-go');
    var iconPhone = $('#icon-phone');
    if (event.which==13 && userInput != " " && userInput.length > 0) {
        message();
    }
    if (userInput.length > 0 && userInput != " ") {
        iconGo.addClass('active');
        iconPhone.addClass('hidden');
    } else {
        iconGo.removeClass('active');
        iconPhone.removeClass('hidden');
    }
}

// function chooseChat() {
//     $('.user-item').removeClass('active');
//     $(this).addClass('active'); 
//     $('#header>.user-item .user-info h3').remove();
//     var nome = $('#chat-list>#user-list>.user-item.active h3').clone();
//     var target = $('#header>.user-item').append(nome);
//     // $('.messaggi').removeClass('active');
//     // $($('.messaggi').get($(this).index())).addClass('active');
// }

$(document).ready(init);