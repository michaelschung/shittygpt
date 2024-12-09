const chatWindow = document.getElementById("chat_window");
const descriptionForm = document.getElementById("description_form");

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
        alert(`Response: ${data.message}`);
        console.log(data.message);
    } catch (error) {
        console.error("Error:", error);
    }
}

async function getCompletion(sysPrompt, userPrompt) {
    try {
        const response = await fetch("http://localhost:3000/api/completion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([
                {
                    "role": "system",
                    "content": sysPrompt
                },
                {
                    "role": "user",
                    "content": userPrompt
                }
            ])
        });

        const data = await response.json();
        alert(`Response: ${data.message}`);
        console.log(data.message);
    } catch (error) {
        console.error("Error:", error);
    }
}

descriptionForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // const prompt = document.getElementById("description").value;
    const prompt = descriptionForm.elements["description"].value;
    const sysPrompt = `You are described as ${prompt}. Please give yourself
                        a name that fits this description.`;
    const userPrompt = "Who are you?"
    getCompletion(sysPrompt, userPrompt);
});