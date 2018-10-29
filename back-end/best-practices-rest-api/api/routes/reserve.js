const Express = require('express'),
    Router = Express.Router(),
    ReserveController = require(`${process.cwd()}/api/controllers/reserve.js`);
    

Router
    .route('/reserve')
    .post(ReserveController.new)
    .delete(ReserveController.delete);

module.exports = Router