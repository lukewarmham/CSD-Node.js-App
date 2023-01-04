"use strict";

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/uploaded_files/index.html");
});

app.get('/style.css', function (req, res) {
    res.sendFile(__dirname + "/uploaded_files/style.css");
});

app.listen(3000);