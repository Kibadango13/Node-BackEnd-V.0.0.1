const express = require('express');
//const logger = require('./logger');
const middleware= (app)=>{
   // app.use(express.static('public'));
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
   // app.use("/images", express.static(path.join("backend/images")));
    //app.use(logger);
};

module.exports = middleware;