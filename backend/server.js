const express = require("express");
//import express from "express";
const app = express();
const port = 3000;
app.use(express.static("frontend/public"));

//do port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});