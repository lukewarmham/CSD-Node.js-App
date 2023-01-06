"use strict";

const express = require('express');
const app = express();

// include other pages
const about = require('./other_pages/about.js');
const home = require('./other_pages/home.js');
const contacts = require('./other_pages/contacts.js');

// initialize pages
app.use('/about', about.about);
app.use('/', home.home);
app.use('/contacts', contacts.contacts);

app.listen(3000);