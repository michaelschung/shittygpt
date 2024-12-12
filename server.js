const express = require("express");
const cors = require("cors");
const path = require("path")
const OpenAI = require("openai");
var session = require("express-session");

const dotenv = require("dotenv")
dotenv.config()

const app = express();
const defaultPort = 5001;

// If running locally, use .env variables
const TESTING = process.env.ENV == "local";
const API_KEY = process.env.OPENAI_API_KEY;
const PORT = TESTING ? process.env.PORT : defaultPort;

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
var openai = null;

// Accepts API key, initializes OpenAI object and makes test request
app.post("/api/load-api-key", async (req, res) => {
    try {
        const key = req.body["key"];

        openai = new OpenAI({
            apiKey: TESTING ? API_KEY : key
        });

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {"role": "system", "content": "This is a system test."},
                {"role": "user", "content": "This is a system test."}
            ]
        });

        res.json({ message: completion.choices[0].message.content });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// The grand function that actually makes OpenAI requests
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

// Save Character data in Express session storage
app.post("/api/save-character", (req, res) => {
    // Extract data sent by the client
    const characterData = req.body;

    // Check if the data is valid (i.e., is a dictionary)
    if (characterData && typeof characterData === "object") {
        req.session.character = characterData;
        res.status(200).json({ message: "Character saved successfully." });
    } else {
        res.status(400).json({ error: "Invalid character data." });
    }
});

// Load Character data from session storage
app.get("/api/get-character", (req, res) => {
    if (req.session.character) {
        res.status(200).json(req.session.character);
    } else {
        res.status(404).json({ error: "No character data found in session." });
    }
});

// Ends entire Express session
app.post("/api/end-session", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: "Failed to end session." });
        }
        res.json({ message: "Session ended successfully." });
    });
});
  
// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});