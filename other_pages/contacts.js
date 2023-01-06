"use strict";

const express = require('express');
const contacts = express();

// HOME PAGE
contacts.get('/', function (req, res) {
    res.sendFile(__dirname + "/uploaded_files/contacts/index.html");
});

contacts.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/uploaded_files/contacts/style.css");
});

contacts.get('/index.js', function (req, res) {
    res.type('.js');
    res.sendFile(__dirname + "/uploaded_files/contacts/index.js");
});

module.exports = {contacts};