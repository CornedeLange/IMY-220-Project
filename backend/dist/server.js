"use strict";

var express = require("express");
var path = require('path');
//import express from "express";
var app = express();
var port = process.env.PORT || 3000;

// app.use(express.static("frontend/public"));
// Serve static files from the "frontend/public" directory
app.use(express["static"](path.join(__dirname, '..', '..', 'frontend', 'public')));

// Log the path to index.html to debug
// const indexPath = path.resolve(__dirname, '..', '..', 'frontend', 'public', 'index.html');
// console.log(`Serving index.html from: ${indexPath}`);

// Serve index.html for all other routes
app.get('*', function (req, res) {
  // res.sendFile(indexPath);
  res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'public', 'index.html'));
});

//do port
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

app.listen(port, function () {
  console.log("Server is running on http://localhost:".concat(port));
});