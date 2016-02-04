'use strict';

module.exports = function(config) {

	const api = require('./api')(config);

  const ping = require('./routes/ping')(api)

	var routes = [
    ping
  ];

  return routes;

};

