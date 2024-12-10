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

function textBubble(source, message) {
    const bubble = document.createElement("article");
    bubble.classList.add("bubble", source);
    bubble.textContent = message;
    return bubble;
}