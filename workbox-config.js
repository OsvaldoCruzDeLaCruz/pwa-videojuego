module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,svg,png,gif,js,json,mp3,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};