async function sendMessage() {
    const userInput = document.getElementById("message-input").value;
    addMessage(userInput, 'outgoing');

    // Simulate getting a response from the JavaScript file
    const botResponse = getBotResponse(userInput);
    addMessage(botResponse, 'incoming');

    // Clear the input field
    document.getElementById("message-input").value = "";
}

function getBotResponse(userInput) {
    // Simulate getting responses from the JavaScript file
    const responses = {
        hello: ['Hi there!', 'Hello!', 'Hey!'],
        'how are you': ["I'm good, thanks!", "I'm doing well, how about you?", "I'm great!"],
        "what's your name": ["I'm a chatbot.", "Call me ChatMaster.", "I don't have a name. You can call me anything."],
        bye: ['Goodbye!', 'See you later!', 'Bye!'],
    };

    for (const key in responses) {
        if (userInput.toLowerCase().includes(key)) {
            return responses[key][Math.floor(Math.random() * responses[key].length)];
        }
    }

    return "I'm not sure how to respond to that.";
}

function addMessage(content, type) {
    const messagesContainer = document.getElementById("messages-container");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `<span class="message-content">${content}</span>`;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll to the bottom
}


  // Event listener for Enter key press
  document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  