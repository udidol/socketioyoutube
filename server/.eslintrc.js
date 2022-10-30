module.exports = {
	"env": {
		"node": true,
		"commonjs": true,
		"es2021": true
	},
	"extends": "eslint:recommended",
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "latest"
	},
	"rules": {
		"array-bracket-spacing": [ "error", "always" ],
		"space-in-parens": [ "error", "always" ],
		"indent": [ "error", "tab" ],
		"object-curly-spacing": [ "error", "always" ],
	}
};