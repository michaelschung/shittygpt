const chatWindow = document.getElementById("chat_window");
const descriptionForm = document.getElementById("description_form");
var ch = null;

(function() {
    document.getElementById("description_input").focus();
})();

descriptionForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    document.getElementById("submit_button").innerHTML = "Please wait while we connect you...";
    const description = descriptionForm.elements["description"].value;
    // Must be done in two parts because constructors cannot be async
    // The await line here waits for the async generateCharacter function
    // to finish, at which point we know everything is ready to go.
    ch = new Character();
    await ch.generateCharacter(description);
    fetch("http://localhost:3000/api/save-character", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ch.encode())
    })
    .then((response) => {
        if (response.ok) {
            window.location.href = "../html/chat.html";
        } else {
            throw new Error("Failed to save character.");
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    });
});