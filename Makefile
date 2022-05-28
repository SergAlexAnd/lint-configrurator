test:
	npx babel-node src/bin/index.js

test-link:
	npm run build && npm link