function init() {
    var time = $('#chat .msg');
    time.find('.hours').append(getActualHours());
    $('#invio').click(message);
    $('#user-msg').keyup(press);
    ricercaPerNome();
}
// function

function getActualHours() {
    var date = new Date;
    return date.getHours() + ':' + date.getMinutes();
}

function message() {
        userInput = $('#user-msg').val();
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

    function press (){
    if (event.which==13) {
        message();
    }
}

function ricercaPerNome(){
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

$(document).ready(init);