"use strict";

var express = require("express");
//import express from "express";
var app = express();
app.use(express["static"]("public"));

//do port
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});