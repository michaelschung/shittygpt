const chatWindow = document.getElementById("chat_window");
const descriptionForm = document.getElementById("description_form");
var ch = null;

async function getCompletionWithContext(msgs) {
    try {
        const response = await fetch("http://localhost:3000/api/completion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(msgs)
        });

        const data = await response.json();
        return data.message;
    } catch (error) {
        console.error("Error:", error);
    }
}

descriptionForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    document.getElementById("submit_button").value = "Please wait while we connect you...";
    const description = descriptionForm.elements["description"].value;
    // Must be done in two parts because constructors cannot be async
    // The await line here waits for the async generateCharacter function
    // to finish, at which point we know everything is ready to go.
    ch = new Character();
    await ch.generateCharacter(description);
    fetch("../html/chat.html")
        .then(response => response.text())
        .then(html => {
            chatWindow.innerHTML = html;
            document.getElementById("connected_to").innerHTML = `
                You've been connected to ${ch.name}. Say hi!
            `;
        });
});