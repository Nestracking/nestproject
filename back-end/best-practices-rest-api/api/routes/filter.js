const Express = require('express'),
    Router = Express.Router(),
    FilterController = require(`${process.cwd()}/api/controllers/filter.js`);
    

Router
    .route('/')
    .get(FilterController.filter);

module.exports = Router