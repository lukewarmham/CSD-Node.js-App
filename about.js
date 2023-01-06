"use strict";

const express = require('express');
const about = express();

// ABOUT PAGE
about.get('/', function (req, res) {
    res.sendFile(__dirname + "/uploaded_files/about/index.html");
});

about.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/uploaded_files/about/style.css");
});

about.get('/index.js', function (req, res) {
    res.type('.js');
    res.sendFile(__dirname + "/uploaded_files/about/index.js");
});

module.exports = {about};