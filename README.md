# eslint-config-n8io

An opinionated eslint configuration for backend and frontend development.

## Adding to your project

1. `npm install -D eslint-config-n8io`
2. Add to your `.eslintrc`, `.eslintrc.js`, or `.eslintrc.json`
	```
	{
		"extends": [
			...,
			"n8io"
		]
	}
	```

## Rule set definitions
Rules cascade per the pseudo-code below.

1. `n8io = Object.assign('eslint:recommended', 'n8io/base', './frontend')`
2. `n8io/backend = Object.assign('eslint:recommended', './base', './backend')`
3. `n8io/frontend = Object.assign('eslint:recommended', './base', './frontend')`
4. `n8io/frontend-react = Object.assign('eslint:recommended', 'n8io/base', './frontend', './frontend-react')`

## Options
1. For example, to use the `n8io/backend` rule set
	```
	{
		"extends": [
			...,
			"n8io/backend"
		]
	}
	```
