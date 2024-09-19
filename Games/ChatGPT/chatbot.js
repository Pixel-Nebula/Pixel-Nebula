// Function to handle user input and display messages
function sendMessage() {
    const chatInput = document.getElementById("chatInput");
    const chatBox = document.getElementById("chatBox");
    const userMessage = chatInput.value.trim().toLowerCase();

    if (userMessage === "") return;

    // Add user's message to the chat
    addMessage(userMessage, "user-message");

    // Handle dynamic conversation
    let botMessage = handleDynamicResponse(userMessage);

    // Simulate typing delay before displaying bot's response
    setTimeout(() => {
        addMessage(botMessage, "bot-message");
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    // Clear input field
    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to handle dynamic response generation
function handleDynamicResponse(userMessage) {
    // If the user asks a question, mirror the question
    if (userMessage.endsWith("?")) {
        return `That's a great question. Why don't you tell me more about it?`;
    }
    
    // Mirror the user's message with slight variations
    if (userMessage.includes("you")) {
        return userMessage.replace("you", "I").replace("are", "am");
    }

    if (userMessage.includes("i")) {
        return userMessage.replace("i", "you").replace("am", "are");
    }

    // Echo back a general response
    return `You just said "${userMessage}". Tell me more about that.`;
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
