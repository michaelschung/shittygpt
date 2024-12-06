const descriptionForm = document.getElementById("description_form");

descriptionForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // const prompt = document.getElementById("description").value;
    const prompt = descriptionForm.elements["description"].value;

    try {
        const response = await fetch("http://localhost:3000/api/completion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ prompt }),
        });

        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        alert(`Response: ${data.message}`);
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
});


// import OpenAI from "openai";
// const openai = new OpenAI();

// const descriptionForm = document.getElementById("description_form");

// descriptionForm.addEventListener("submit", async (event) => {
//     event.preventDefault();
//     // const description = descriptionForm.elements["description"].value;
//     // console.log(description);

//     const completion = await openai.chat.completions.create({
//         model: "gpt-4o",
//         messages: [
//             { role: "system", content: "You are a helpful assistant." },
//             {
//                 role: "user",
//                 content: "Write a haiku about recursion in programming.",
//             },
//         ],
//     });

//     console.log(completion.choices[0].message.content);
// });