"use strict";

const express = require('express');
const home = express();

// HOME PAGE
home.get('/', function (req, res) {
    res.sendFile(__dirname + "/uploaded_files/home/index.html");
});

home.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/uploaded_files/home/style.css");
});

home.get('/index.js', function (req, res) {
    res.type('.js');
    res.sendFile(__dirname + "/uploaded_files/home/index.js");
});

module.exports = {home};