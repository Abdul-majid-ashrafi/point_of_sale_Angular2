///<reference path="./../typings/tsd.d.ts" />
"use strict";
var express = require("express");
var http = require("http");
var path = require("path");
var bodyParser = require("body-parser");
var socket = require("socket.io");
// if use mongoose
// import mongoose = require('mongoose'); 					
// mongoose.connect('mongodb://localhost:27017/dbName');	
var port = process.env.PORT || 4000;
//Server Creation
var app = express();
var server = http.createServer(app);
var io = socket(server);
server.listen(port, function () {
    console.log('listening on http://localhost:' + port);
});
// res.header("Access-Control-Allow-Origin", "*");
// res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
// res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
// logger middle ware
app.use(function (req, res, next) {
    console.log("Logging: " + req.method.toString() + ": " + req.url.toString());
    next();
});
// Middlewaress
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./../../client/build")));
// set vairiables in Express
app.set("port", port);
app.set("env", "development");
app.set("address", "localhost");
// Handle Routes after some middlewares
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./../../client/build/index.html"));
});
app.get("/api/test", function (req, res) {
    res.json({ success: true, data: "Hello World" });
});
// For Socket creating array of Fruits
var fruits = ['Apple', 'Banana'];
io.sockets.on("connection", function (socket) {
    socket.emit("message", { message: "you are using socket.io" });
    socket.on('addFruit', function (data) {
        io.sockets.emit('addedFruit', data);
        //fruits.push(data);
    });
    socket.on('getFruits', function () {
        io.sockets.emit('getAllFruits', fruits);
    });
});
