const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'chatbot.html'));
});

app.post('/get_response', (req, res) => {
    const userMessage = req.body.message;
    const botResponse = generateResponse(userMessage);
    res.json({ message: botResponse });
});

function generateResponse(userMessage) {
    const responses = {
        hello: ['Hi there!', 'Hello!', 'Hey!'],
        'how are you': ["I'm good, thanks!", "I'm doing well, how about you?", "I'm great!"],
        "what's your name": ["I'm a chatbot.", "Call me ChatMaster.", "I don't have a name. You can call me anything."],
        bye: ['Goodbye!', 'See you later!', 'Bye!'],
    };

    for (const key in responses) {
        if (userMessage.toLowerCase().includes(key)) {
            return responses[key][Math.floor(Math.random() * responses[key].length)];
        }
    }

    return "I'm not sure how to respond to that.";
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
