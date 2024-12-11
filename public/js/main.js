const chatWindow = document.getElementById("chat_window");
const descriptionForm = document.getElementById("description_form");
const apiKeyForm = document.getElementById("api_key_form");
var ch = null;

// Open modal when page loads
(function() {
    modal("open");
})();

// Open/close modal, with option to set message
function modal(action, message="Enter your API key") {
    document.documentElement.className = "";
    if (action == "open") {
        document.documentElement.classList.add("modal-is-open", "modal-is-opening");
        document.getElementById("api_key_modal").setAttribute("open", "");
        document.getElementById("modal_text").innerHTML = message;
        document.getElementById("api_key_input").focus();
    } else {
        document.documentElement.classList.add("modal-is-closing");
        document.getElementById("api_key_modal").removeAttribute("open");
        document.getElementById("description_input").focus();
    }
}

// Response to user entering API key
apiKeyForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    document.getElementById("submit_api_key").innerHTML = "Checking API key...";
    const apiKey = apiKeyForm.elements["api_key"].value;

    // Access API endpoint to load API key into OpenAI object
    fetch("http://localhost:3000/api/load-api-key", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({key: apiKey})
    })
    .then((response) => {
        if (response.ok) {
            console.log("API key accepted");
            modal("close");
        } else {
            throw new Error("Invalid API key.");
        }
    })
    .catch((error) => {
        // If invalid API key, re-open modal
        console.error("Error:", error);
        modal("open", "Invalid API key. Try again.");
        document.getElementById("submit_api_key").innerHTML = "Submit";
        document.getElementById("api_key_input").value = "";
    });
});

// Response to user entering character description
descriptionForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    document.getElementById("submit_button").innerHTML = "Please wait while we connect you...";
    const description = descriptionForm.elements["description"].value;

    // Must be done in two parts because constructors cannot be async
    // The await line here waits for the async generateCharacter function
    // to finish, at which point we know everything is ready to go.
    ch = new Character();
    await ch.generateCharacter(description);

    // Access API endpoint to save character info to Express session
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