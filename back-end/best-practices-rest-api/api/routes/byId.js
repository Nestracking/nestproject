const Express = require('express'),
    Router = Express.Router(),
    ByIdController = require(`${process.cwd()}/api/controllers/byId.js`);
    

Router
    .route('/')
    .get(ByIdController.byId);

module.exports = Router