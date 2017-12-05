'use strict';

const express = require('express');
const app = express();
const jsonParser = require("body-parser").json; //for parsing data from the body of POST requests


app.use(jsonParser());


const port = process.env.PORT || 3000; //eval to 3000 unless deploying to production env

app.listen(port, () => console.log('Express server listening on port', port));