'use strict';

const express = require('express');
const app = express();

const port = process.env.PORT || 3000; //eval to 3000 unless deploying to production env

app.listen(port, () => console.log('Express server listening on port', port));