const Express = require('express'),
    Router = Express.Router(),
    FilterController = require(`${process.cwd()}/api/controllers/filter.js`);
    

Router
    .route('/filter')
    .get(FilterController.filter);

module.exports = Router