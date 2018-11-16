const Express = require('express'),
    Router = Express.Router(),
    UserController = require(`${process.cwd()}/api/controllers/user.js`);
    

Router
    .route('/')
    .post(UserController.createUser)
    // .delete(UserController.delete);

module.exports = Router