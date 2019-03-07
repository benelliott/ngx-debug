(function createChannel() {
    let port = chrome.extension.connect({
        name: 'ngx-debug' //Given a Name
    });

    port.onMessage.addListener(function (message) {
        document.querySelector('#insertmessagebutton').innerHTML = message.content;
    });

}());

function sendObjectToInspectedPage(message) {
    chrome.extension.sendMessage(message);
}

sendObjectToInspectedPage({content: 'inserted-script.js'});
