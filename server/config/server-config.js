'use strict';

const express = require('express');
const applyMiddleware = require('./middleware');

let app = express();

applyMiddleware(app, express);

module.exports = app;