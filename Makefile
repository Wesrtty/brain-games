# Makefile
install:
		npm install

brain-games:
		node bin/brain-games.js || true

brain-even:
		node bin/brain-even.js || true

brain-calc:
		node bin/brain-calc.js || true

brain-gcd:
		node bin/brain-gcd.js || true

brain-progression:
		node bin/brain-progression.js || true

brain-prime:
		node bin/brain-prime.js || true

publish:
		npm publish --dry-run

lint:
		npx eslint .

