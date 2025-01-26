# ShittyGPT

A silly little web app that lets you customize a chatbot to assume whatever personality you specify. Basically Character.AI but worse? Have fun.

Built using Node.js, Express.js, and the OpenAI API.

## Table of Contents

- [Try it out!](#try-it-out)
- [Technical overview](#technical-overview)
- [Local development](#local-development)
- [Disclaimer](#disclaimer)

## [Try it out!](https://shittygpt-6cce0109198e.herokuapp.com/)

This app is publicly hosted as a [Heroku](https://www.heroku.com/) app -- click above to check it out!

Note: the app relies on the [OpenAI API](https://platform.openai.com/docs/overview). By default, this is using my personal API key, so apologies if that runs out of credits.

## Technical overview

All user input is combined with pre-written prompts before sending OpenAI requests.
- The user's character description is bolstered with a prompt on how to create a character from that description. The prompt includes direct instructions on how to create a compelling character, as well as few-shot examples of character names.
- Each chat message from the user is combined with a reminder to the model to remain in character.
- The model maintains the context of its character's identity and all of the messages throughout the conversation.

System technicalities:
- Currently, a valid OpenAI API key is provided as an environment variable, but if this is not supplied then a modal pops up requesting an API key. This key is checked for validity before allowing access to the page.
- An Express session is used to maintain context for each page visit, namely the API key and character data. The session expires automatically after 5 minutes of inactivity.

## Local development

*Please note: Running ShittyGPT locally requires that you provide your own OpenAI API key.*

Clone this repo and enter the home folder.

```bash
$ git clone git@github.com:michaelschung/shittygpt.git shittygpt
$ cd shittygpt
```

This project relies on an environment variable for the OpenAI API key. Create a file `.env` and provide the following variable:

```dotenv
OPENAI_API_KEY="sk-EXAMPLE"
```

*Note that you don't technically need to supply this as an environment variable, but the other option is to re-enter your API key every time you load the page.*

From here, start the server.

```bash
npm start
```

This will run the server on [`localhost:3000`](http://localhost:3000/) (or whichever port is specified in `server.js`), serving `public/index.html` as the homepage.

## Disclaimer

This web app sends all of its requests through OpenAI, and as such is subject to [OpenAI's Terms of Use](https://openai.com/policies/row-terms-of-use/).