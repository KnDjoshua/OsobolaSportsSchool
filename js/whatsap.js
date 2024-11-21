const sendButton = document.getElementById('sendButton');
const messageBox = document.getElementById('messageBox');
const conversation = document.querySelector('.conversation');
const whatsappNumber = "256XXXXXXXXX"; // Replace with the actual number.

sendButton.addEventListener('click', () => {
    const message = messageBox.value.trim();
    if (message === "") {
        alert("Please type a message!");
        return;
    }

    // Add message to the conversation display
    const messageBubble = document.createElement('div');
    messageBubble.classList.add('message');
    messageBubble.textContent = message;
    conversation.appendChild(messageBubble);

    // Clear the message box
    messageBox.value = "";

    // Send message to WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
});