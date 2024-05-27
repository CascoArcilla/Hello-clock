module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,html,css,json,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};