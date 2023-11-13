async function sendMessage() {
    const userInput = document.getElementById("message-input").value;
    addMessage(userInput, 'outgoing');

    // Send user input to the server
    const response = await fetch('/get_response', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();
    const botResponse = data.message;
    addMessage(botResponse, 'incoming');

    // Clear the input field
    document.getElementById("message-input").value = "";
}

function addMessage(content, type) {
    const messagesContainer = document.getElementById("messages-container");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `<span class="message-content">${content}</span>`;
    messagesContainer.appendChild(messageDiv);
}