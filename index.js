"use strict";

const express = require('express');
const app = express();

// include other pages
const about = require('./about.js');
const home = require('./home.js');

// initialize pages
app.use('/about', about.about);
app.use('/', home.home);

app.listen(3000);