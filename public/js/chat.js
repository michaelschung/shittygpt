const chatWindow = document.getElementById("chat_window");
const msgFeed = document.getElementById("message_feed");
const chatInputForm = document.getElementById("chat_input_form");
var ch = new Character();

// Onload - grab Character object from session storage
(function() {
    fetch("http://localhost:3000/api/get-character")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((character) => {
        console.log("Character data:", character);
        ch.decode(character);
        document.getElementById("connected_to").innerHTML = `
            You've been connected to ${ch.name}. Say hi!
        `;
    })
    .catch((error) => {
        console.error("Error fetching character data:", error);
    });
    document.getElementById("chat_input").focus();
})();

chatInputForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const message = chatInputForm.elements["chat_input"].value;
    document.getElementById("chat_input").value = "";
    msgFeed.appendChild(textBubble("user", message));
    // msgFeed.innerHTML += message;
    const response = await ch.chat(message);
    msgFeed.appendChild(textBubble("comp", response));
    // msgFeed.innerHTML += response;
})