function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
  
    if (message.trim() !== '') {
      const messagesContainer = document.querySelector('.messages');
      const outgoingMessage = document.createElement('div');
      outgoingMessage.classList.add('message', 'outgoing');
      outgoingMessage.innerHTML = `<span class="message-content">${message}</span>`;
      messagesContainer.appendChild(outgoingMessage);
  
      messageInput.value = ''; // Clear the input field after sending the message
    }
  }
  
  // Event listener for Enter key press
  document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  