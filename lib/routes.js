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
        notes: ['Ping to check API is working'],
        tags: tags,
        response: {
        	schema: {
        		ok:true
        	}
        }
      },
      handler: api.ping
    }
  );

  return routes;

};

