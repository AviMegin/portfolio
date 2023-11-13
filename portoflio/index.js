
  // Event listener for Enter key press
  document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  