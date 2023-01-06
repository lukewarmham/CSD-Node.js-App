"use strict";

const express = require('express');
var path = require("path");
const contacts = express();

// HOME PAGE
contacts.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', "uploaded_files/contacts/index.html"));
});

contacts.get('/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, '..', "uploaded_files/general/style.css"));
});

contacts.get('/index.js', function (req, res) {
    res.type('.js');
    res.sendFile(path.join(__dirname, '..', "uploaded_files/contacts/index.js"));
});

module.exports = {contacts};