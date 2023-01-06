"use strict";

const express = require('express');
var path = require("path");
const about = express();

// ABOUT PAGE
about.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', "uploaded_files/about/index.html"));
});

about.get('/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, '..', "uploaded_files/general/style.css"));
});

about.get('/index.js', function (req, res) {
    res.type('.js');
    res.sendFile(path.join(__dirname, '..', "uploaded_files/about/index.js"));
});

module.exports = {about};