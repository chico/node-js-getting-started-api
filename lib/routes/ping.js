'use strict';

module.exports = function(api) {
	return {
	  method: 'GET',
	  path: api.base + '/ping',
	  config: api.docs.ping,
	  handler: api.endpoints.ping
	};
};
