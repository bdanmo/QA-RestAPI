'use strict';

const express = require('express');
const app = express();
const jsonParser = require("body-parser").json;

//use postman to run these routes

app.use(jsonParser());

app.use((req, res, next) => {
    req.body;
    next();
});

const port = process.env.PORT || 3000; //eval to 3000 unless deploying to production env

app.listen(port, () => console.log('Express server listening on port', port));