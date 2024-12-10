const express = require("express");
const cors = require("cors");
const path = require("path")
const OpenAI = require("openai");
var session = require("express-session");

const dotenv = require("dotenv")
dotenv.config()

const app = express();
const port = 3000;
const API_KEY = process.env.OPENAI_API_KEY;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Session setup
app.use(
    session({
        secret: "something-secret", // Replace with a secure secret
        resave: false,
        saveUninitialized: true,
    })
);

// OpenAI configuration
const openai = new OpenAI({
    apiKey: API_KEY,
});

// API route
app.post("/api/completion", async (req, res) => {
    try {
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

app.post("/api/save-character", (req, res) => {
    // Extract the data sent by the client
    const characterData = req.body;

    // Check if the data is valid (e.g., is a dictionary)
    if (characterData && typeof characterData === "object") {
        // Store it in the session
        req.session.character = characterData;

        // Send a success response
        res.status(200).json({ message: "Character saved successfully." });
    } else {
        // Handle invalid data
        res.status(400).json({ error: "Invalid character data." });
    }
});

app.get("/api/get-character", (req, res) => {
    if (req.session.character) {
        res.status(200).json(req.session.character);
    } else {
        res.status(404).json({ error: "No character data found in session." });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});