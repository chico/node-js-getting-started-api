'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const config = require('./lib/config/config');

const hapi = require('hapi');
const server = new hapi.Server();

const plugins = require('./lib/hapi-plugins')(config)
const routes = require('./lib/routes')(config);

server.connection({ port: config.port, routes: { cors: true } });

server.register(plugins, function () {

    server.route(routes);

    server.start();

    console.log('Hapi server listening on port %d in %s mode', config.port, process.env.NODE_ENV);

});

