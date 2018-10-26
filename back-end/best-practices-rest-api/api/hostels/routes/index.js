const Express = require('express');
const Router = Express.Router();
const Controller = require(`${process.cwd()}/controllers/hostels.js`);

// Define all routes for hostels
// Pourquoi ?
// Plus simple d'ajouter / modifier des routes
// Plus simple de déboguer : les responsabilités sont bien séparées : 
//      - Le Router est clairement défini et ne fait que router. Si tu rencontres un problème de route, c'est ici
//        et pas ailleurs qu'il faut déboguer

Router
    .get('/hostels/', Controller.get);


/*
const NewReservation = require("./Controller/NewReservation.js")
app.post("/NewReservation", NewReservation);

const DeleteReservation = require("./Controller/DeleteReservation.js");
app.delete("/DeleteReservation", DeleteReservation);
*/