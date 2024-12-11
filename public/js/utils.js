// Forwards list of messages to API, to send to OpenAI
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

// Makes API call to end session
function endSession() {
    fetch("http://localhost:3000/api/end-session", {
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