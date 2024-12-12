const apiBaseUrl = `${window.location.origin}/api`;
let inactiveTimeout;
// Timeout until auto session end (measured in seconds)
const timeout = 300;

function resetTimer() {
    clearTimeout(inactiveTimeout);
    inactiveTimeout = setTimeout(endSession, timeout*1000);
}

// Forwards list of messages to API, to send to OpenAI
async function getCompletionWithContext(msgs) {
    try {
        const response = await fetch(`${apiBaseUrl}/completion`, {
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

// Makes API call to destroy current character
function destroyCharacter() {
    fetch(`${apiBaseUrl}/destroy-character`, {
        method: "POST"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

// Makes API call to end session
function endSession() {
    fetch(`${apiBaseUrl}/end-session`, {
        method: "POST"
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        window.location.href = window.location.origin;
    })
    .catch(error => {
        console.error("Error:", error);
    });
    console.log("Session ended due to inactivity.");
}

// Reset timer when page loads
resetTimer();