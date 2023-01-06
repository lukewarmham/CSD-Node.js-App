"use strict";

const express = require('express');
var path = require("path");
const home = express();

// HOME PAGE
home.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', "uploaded_files/home/index.html"));
});

home.get('/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, '..', "uploaded_files/general/style.css"));
});

home.get('/index.js', function (req, res) {
    res.type('.js');
    res.sendFile(path.join(__dirname, '..', "uploaded_files/home/index.js"));
});

module.exports = {home};