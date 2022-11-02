module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true,
		"jest/globals": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"jest"
	],
	"rules": {
		"array-bracket-spacing": [ "error", "always" ],
		"space-in-parens": [ "error", "always" ],
		"indent": [ "error", "tab" ],
		"object-curly-spacing": [ "error", "always" ],
		"react/jsx-curly-spacing": [ "error", "always" ],
		"react/react-in-jsx-scope": "off"
	}
}
