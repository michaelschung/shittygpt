.PHONY: clean build api

all: api

# Call pre-commit hook to redact API key
clean:
	sh .git/hooks/pre-commit

# Restores API key in server.js, just for convenience
build:
	@sed -i "" -E "s/REDACTED/$(OPENAI_API_KEY)/g" "server.js"
	@echo "===API key has been restored in server.js"

api:
	@echo "Run source api_key.sh"
	@echo "Then run make build"