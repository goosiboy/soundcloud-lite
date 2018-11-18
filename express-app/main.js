"use strict";

// Imports
const routes = require("./routes/routes");

const express = require('express');
const app = express();
const port = 8080;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(
    port, 
    function() {
        console.log(`Express app listening on port ${port}!`);
    }
);

/* ROUTES */
routes.index(app);
routes.test(app);