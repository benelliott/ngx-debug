chrome.extension.onConnect.addListener(port => {
    const extensionListener = (message, sender, sendResponse) => {
        chrome.tabs.executeScript({file: message.content});

        sendResponse(message);
    };

    // Listens to messages sent from the panel
    chrome.extension.onMessage.addListener(extensionListener);

    port.onDisconnect.addListener(() => {
        chrome.extension.onMessage.removeListener(extensionListener);
    });
});
