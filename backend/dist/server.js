"use strict";

var express = require("express");
//import express from "express";
var app = express();
var port = 3000;
app.use(express["static"]("frontend/public"));

//do port
app.listen(port, function () {
  console.log("Server is running on http://localhost:".concat(port));
});