'use strict';

module.exports = function(config) {
	return {
		base: config.api.base,
		endpoints: {
			ping: require('./api/ping')
		},
		docs: {
			ping: require('./docs/ping')
		}
	}
};

