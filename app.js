'use strict';

const express = require('express');
const app = express();

//use postman to run these routes

app.use((req, res, next) => {
    req.myMessage = "Hello midware two! This is midware one!"
    console.log(`The leaves on the tree are ${req.query.color}`);
    next();
});

app.use('/different/:id?', (req, res, next) => { //if :id param is not given, it returns undefined
    console.log(`Second piece of middleware { 
    ID: ${req.params.id}.
    Message: ${req.myMessage}
}`
);
    next();
});

const port = process.env.PORT || 3000; //eval to 3000 unless deploying to production env

app.listen(port, () => console.log('Express server listening on port', port));