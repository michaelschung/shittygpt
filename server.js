const express = require("express");
const cors = require("cors");
const path = require("path")
const OpenAI = require("openai");
var session = require("express-session");

const app = express();
const port = 3000;
const API_KEY = "REDACTED"

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// OpenAI configuration
const openai = new OpenAI({
    apiKey: API_KEY, // Replace with your actual API key
});

// API route
app.post("/api/completion", async (req, res) => {
    try {
        // const { prompt } = req.body;
        const prompt = req.body;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: prompt
        });

        res.json({ message: completion.choices[0].message.content });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});