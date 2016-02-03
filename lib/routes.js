'use strict';

module.exports = function(config) {

	const apibase = config.api.base;
	const api = require('./api')(config);
	const tags = ['api']

	var routes = [];

	routes.push(
		{
      method: 'GET',
      path: apibase + '/ping',
      config: {
        description: 'Ping',
        tags: tags
      },
      handler: api.ping
    }
  );

  return routes;

};

