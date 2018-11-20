const Express = require('express'),
    Router = Express.Router(),
    JwtController = require(`${process.cwd()}/api/controllers/jwt.js`);
    

Router
    .route('/')
    .get(JwtController.jwtVerified)

module.exports = Router