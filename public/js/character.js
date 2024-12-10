class Character {
    constructor() {
        this.name = "";
        this.backstory = "";
        this.messages = [];
    }

    // Encode Character as serializable object
    encode() {
        return {
            name: this.name,
            backstory: this.backstory,
            messages: this.messages
        };
    }

    // Decode serializable object as Character
    decode(obj) {
        this.name = obj.name;
        this.backstory = obj.backstory;
        this.messages = obj.messages;
    }

    addMessage(role, content) {
        this.messages.push({
            "role": role,
            "content": content
        });
    }

    async chat(userPrompt) {
        const fullUserPrompt = `
            Respond to the following prompt in character, using normal
            English as befits your character. Remember your most prominent
            character traits, and make sure your messages are not too long
            (unless your character specifically warrants long messages).
            Your prompt: ${userPrompt}
        `;
        this.addMessage("user", fullUserPrompt);
        return await this.contextualResponse()
    }

    async contextualResponse() {
        const response = await getCompletionWithContext(this.messages);
        this.addMessage("assistant", response);
        return response;
    }

    async generateCharacter(description) {
        const sysPrompt = `
            You are described as "${description}." Please respond to the next
            request with a JSON blob that contains the attributes "name" and
            "backstory".
            The "name" field should be in the general form of "<NAME> from
            <LOCATION>", but feel free to take some liberties as exemplified below.
            Examples:
                - Tony from Queens
                - Legolas of the Woodland Realm
                - Aragorn, son of Arathorn, High King of Gondor
                - Kevin Li from Cupertino
                - THE DEMON THAT RESIDES IN THE DEPTHS OF YOUR SOUL
            Please use your imagination to choose a name and location that are
            appropriate for your description.
            The "backstory" field should be an imaginative paragraph (max 100 words)
            that describes who you are and what is most important to you. Be creative,
            but make sure that the original description is the most prominent part.
            Respond as a raw JSON object. Do not format it for display.
        `;
        const userPrompt = "Who are you?";
        this.addMessage("system", sysPrompt);
        this.addMessage("user", userPrompt);
        const response = JSON.parse(await this.contextualResponse());
        this.name = response["name"];
        this.backstory = response["backstory"];
    }
}