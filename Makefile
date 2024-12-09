.PHONY: api

all: api

# Restores API key in server.js, just for convenience
api:
	@sed -i "" -E "s/REDACTED/$(OPENAI_API_KEY)/g" "server.js"
	@echo "===API key has been restored in server.js"