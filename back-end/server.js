const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");

const uri = "mongodb://Voyage:15oct18@ds223009.mlab.com:23009/arnaudscieur";

const db = mongoose.connect( uri, function( err, response){
    if(err){console.log(err);}
    });
    
    var app = express();
    app.use(bodyParser());
    app.use(bodyParser.json({limit:'10mb'}));
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use(function(req,res,next){
      // res.setHeader( 'Access-Control-Allow-Origin', process.env.PORT);
        res.setHeader( 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
        res.setHeader( 'Access-Control-Allow-Headers', 'Accept,Accept-Language,Content-Language,Content-Type');
        res.setHeader( 'Access-Control-Expose-Headers', 'Content-Length,Content-Range');
    next();
    });

    app.get("/Filter", async function (req,res,){
        let FilterList = req.query.Filter;
        let ArticleList = await modele.find({ "Champ1" : FilterList.Pays, "Champ2": FilterList.ville}, {}).sort({'Article.Date': -1});
        console.log(ArticleList);
        res.json(ArticleList);
        }
      });

    

    app.listen(process.env.PORT ||8014, ()=>{
        console.log('waf waf 8014 waf waf');
    })