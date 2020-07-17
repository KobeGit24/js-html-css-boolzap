function init() {
    $('#invio').click(sendMessage);
    $('#user-msg').keyup(inputControl);
    $('.user-item').click(chooseChat);
    nameFind();
    deleteMessage();
}

// FUNCTION


//funzione che restituisce orario messaggi
function getActualHours() {
    var date = new Date;
    return date.getHours() + ':' + date.getMinutes();
}


//funzione che controlla l'inserimento e risposta ai messaggi dell'utente
function sendMessage() {
        var userInput = $('#user-msg').val();
        var tem = $('.template #my-answer').clone();
        tem.find('#my-msg').append(userInput);
        tem.find('.hours').append(getActualHours());
        $('.main-chat-user.active #chat').append(tem);
        setTimeout(function(){
            var risp = $('.template #com-answer').clone();
            risp.find('.hours').append(getActualHours());
            $('.main-chat-user.active #chat').append(risp);
        },1000)
        $('#user-msg').val("");
}


//funzione per la ricerca nella lista chat
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


//funzione per la validazione del messaggio dell'utente e aggiunta del tasto invio per inviare messaggi
function inputControl() {
    var userInput = $('#user-msg').val();
    var iconGo = $('#icon-go');
    var iconPhone = $('#icon-phone');
    if (event.which==13 && userInput.length > 0 && userInput.trim() != "") {
        sendMessage();
    }
    if (userInput.length > 0 && userInput.trim() != "") {
        iconGo.addClass('active');
        iconPhone.addClass('hidden');
    } else {
        iconGo.removeClass('active');
        iconPhone.removeClass('hidden');
    }
}


// funzione che controlla la chat specifica per ogni contatto
function chooseChat() {
    $('.user-item').removeClass('active');
    $(this).addClass('active'); 
    $('#main-user-info h3').remove();
    var x = $('.user-item.active .user-info h3').clone();
    $('#main-user-info').append(x); 
    $('#main-user>.avatar-img>img').remove();
    var y = $('.user-item.active .avatar-img>img').clone();
    $('#main-user>.avatar-img').append(y);
    $('.main-chat-user').removeClass('active');
    $($('.main-chat-user').get($('.user-item.active').index())).addClass('active');
}


//funzione che controlla la cancellazione dei messaggi in chat
function deleteMessage() {
    $(document).on('click', '.msg', function () {
        $(this).find('.delete-msg').slideToggle();
    });
    $(document).on('click', '.delete-msg', function () {
        $(this).parent('.msg').remove();
    });
}

$(document).ready(init);