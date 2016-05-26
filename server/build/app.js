///<reference path="./../typings/tsd.d.ts" />
"use strict";
var express = require("express");
var http = require("http");
var path = require("path");
var bodyParser = require("body-parser");
var socket = require("socket.io");
// if use mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://pos:pos@ds011933.mlab.com:11933/point_of_sale');
var port = process.env.PORT || 4000;
var categoryRoutes = require("./category/categoryRouter");
var sellingRoutes = require("./selling/sellingRouter");
var userRoutes = require("./user/userRouter");
var productRoutes = require("./product/productRouter");
var InventryRoutes = require("./inventry/inventryRouter");
var rateRoutes = require("./rate/rateRouter");
//Server Creation
var app = express();
var server = http.createServer(app);
var io = socket(server);
server.listen(port, function () {
    console.log('listening on http://localhost:' + port);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Middlewaress
app.use('/api/user', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api/inven', InventryRoutes);
app.use('/api/rate', rateRoutes);
app.use('/api/sell', sellingRoutes);
// res.header("Access-Control-Allow-Origin", "*");
// res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
// res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
// logger middle ware
app.use(function (req, res, next) {
    console.log("Logging: " + req.method.toString() + ": " + req.url.toString());
    next();
});
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
