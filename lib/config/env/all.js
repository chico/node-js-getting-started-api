'use strict';

var path = require('path');

var rootPath = path.normalize(__dirname + '/../../..');

var pjson = require(rootPath + '/package.json');

module.exports = {
  appName: pjson.name,
  appVersion: pjson.version,
  root: rootPath,
  port: process.env.PORT || 8080,
  api: {
  	base: '/api/1.0'
  }
};

