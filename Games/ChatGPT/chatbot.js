// Conversation states to track the current stage of the conversation
let conversationState = "initial";

// Function to handle user input and display messages
function sendMessage() {
    const chatInput = document.getElementById("chatInput");
    const chatBox = document.getElementById("chatBox");
    const userMessage = chatInput.value.trim().toLowerCase();

    if (userMessage === "") return;

    // Add user's message to the chat
    addMessage(userMessage, "user-message");

    // Handle conversation based on the current state
    let botMessage = handleConversation(userMessage);

    // Simulate typing delay before displaying bot's response
    setTimeout(() => {
        addMessage(botMessage, "bot-message");
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    // Clear input field
    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to handle the conversation flow
function handleConversation(userMessage) {
    let botMessage = "";

    switch (conversationState) {
        case "initial":
            botMessage = "Hi there! What's your name?";
            conversationState = "asking_name";
            break;
        
        case "asking_name":
            botMessage = `Nice to meet you, ${userMessage.charAt(0).toUpperCase() + userMessage.slice(1)}! How are you feeling today?`;
            conversationState = "asking_feeling";
            break;

        case "asking_feeling":
            if (userMessage.includes("good") || userMessage.includes("fine") || userMessage.includes("okay")) {
                botMessage = "Great to hear! What can I assist you with today?";
                conversationState = "assist";
            } else if (userMessage.includes("bad") || userMessage.includes("not good")) {
                botMessage = "I'm sorry to hear that. Is there anything I can do to help?";
                conversationState = "assist";
            } else {
                botMessage = "Thanks for sharing. What can I assist you with today?";
                conversationState = "assist";
            }
            break;

        case "assist":
            botMessage = "I can help with various things. For example, I can tell you a joke, give advice, or share fun facts. What would you like to hear?";
            conversationState = "assist_options";
            break;

        case "assist_options":
            if (userMessage.includes("joke")) {
                botMessage = "Why don't skeletons fight each other? Because they don't have the guts! 😄";
            } else if (userMessage.includes("advice")) {
                botMessage = "It's never too late to be what you might have been.";
            } else if (userMessage.includes("fact")) {
                botMessage = "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old!";
            } else {
                botMessage = "I'm not sure I understand. Would you like to hear a joke, some advice, or a fun fact?";
            }
            conversationState = "assist_options";  // Stay in this state until a valid option is provided
            break;

        default:
            botMessage = "I'm not sure how to respond to that.";
            break;
    }

    return botMessage;
}

// Function to add a message to the chat box
function addMessage(text, className) {
    const chatBox = document.getElementById("chatBox");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
