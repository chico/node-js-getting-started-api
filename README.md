# node-js-getting-started-api

A barebones API built using [Hapi](http://hapijs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:chico/node-js-getting-started-api.git # or clone your own fork
$ cd node-js-getting-started-api
$ npm install
$ npm start
```
Your app should now be running on [localhost:8080](http://localhost:8080/).

### Swagger

* URL: [http://localhost:8080/swagger.json](http://localhost:8080/swagger.json)

The Swagger UI is outside the scope of this project but can easily be added:
 * See [https://github.com/glennjones/hapi-swagger#viewing-the-documentation-page](https://github.com/glennjones/hapi-swagger#viewing-the-documentation-page)
 * See [https://github.com/jensoleg/swagger-ui](https://github.com/jensoleg/swagger-ui)

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
