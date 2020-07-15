function init() {
    var time = $('#chat .msg');
    time.find('.hours').append(getActualHours());
    $('#invio').click(sendMessage);
    $('#user-msg').keyup(inputControl);
    $('.user-item').click(chooseAvatar);
    nameFind();
    $('#my-answer').on('click', '.msg', function () {
        $('.delete-msg').addClass('active');
     });
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

// SOLUZIONE GIOVANNI sul findName
// function nameF() {
//     var input = $(this);
//     var txt = input.val();
//     var contacts = $('.contacts .contact');
//     contacts.each(function(){
//         var contact = $(this);
//         var name = contact.find('.contact-name').text();
//         if (name.toLowerCase().includes(txt.toLowerCase())) {
//             contact.show();
//         } else {
//             contact.hide();
//         }
//     });
// }

function inputControl() {
    var userInput = $('#user-msg').val();
    var iconGo = $('#icon-go');
    var iconPhone = $('#icon-phone');
    if (event.which==13 && userInput.length > 0 && userInput != " ") {
        sendMessage();
    }
    if (userInput.length > 0 && userInput != " ") {
        iconGo.addClass('active');
        iconPhone.addClass('hidden');
    } else {
        iconGo.removeClass('active');
        iconPhone.removeClass('hidden');
    }
}

function chooseAvatar() {
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

// function deleteMessage() {
//     $('#my-answer').on('click', '.msg', function () {
//        $('.delete-msg').slideToggle();
//     });
// }

$(document).ready(init);