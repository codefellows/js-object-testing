module.exports = function(grunt) {
	'use strict';
	grunt.initConfig({
		simplemocha: {
			options: {
				timeout: 3000,
				useColors: false
				// I saw this in a mocha-phantomjs pull request
				// Mocha.reporters.Base.useColors = false
			},
			all: { src: ['test/**/*.js'] }
		},
		jshint: {
			options: {
				jshintrc: true,
			},
			all: ['Gruntfile.js','lib/**/*.js','test/**/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('default','simplemocha');
};
