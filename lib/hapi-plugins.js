'use strict';

const swagger = require('hapi-swagger');

module.exports = function(config) {

	var plugins = [];

	plugins.push({
		register: swagger,
		options: {
			info: {
				title: config.appName,
				version: config.appVersion,
				description: 'API documentation for ' + config.appName + '.'
			},
			pathPrefixSize: 3,
			jsonPath: config.api.base + '/swagger',
			basePath: config.api.base,
    	enableDocumentation: false
    }
	});

	return plugins;

};

