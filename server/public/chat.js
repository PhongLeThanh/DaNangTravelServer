window.onload = () => {

    console.log("chat .js");

    let messages = [];
    let socket = io.connect('http://localhost:6969');
    let field = document.getElementById("field");
    let sendButton = document.getElementById("send");
    let content = document.getElementById("content");
    let name = document.getElementById("name");

    socket.on('message', function (data) {
        console.log("received message");
        if(data.message) {
            messages.push(data);
            let html = '';
            for(let i=0; i<messages.length; i++) {
                html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
                html += messages[i].message + '<br />';
            }
            content.innerHTML = html;
        } else {
            console.log("There is a problem:", data);
        }
    });

    sendButton.onclick = function() {
        if(name.value == "") {
            alert("Please type your name!");
        } else {
            var text = field.value;
            socket.emit('send', { message: text, username: name.value });
        }
    };

};

script(src='/chat.js');
script(src='/socket.io/socket.io.js');