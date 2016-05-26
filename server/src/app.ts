///<reference path="./../typings/tsd.d.ts" />

import express = require("express");
import http = require("http");
import path = require("path");
import bodyParser = require("body-parser");
import socket = require("socket.io");
import * as helper from './helpers/helper'; 

// if use mongoose
import mongoose = require('mongoose');
mongoose.connect('mongodb://pos:pos@ds011933.mlab.com:11933/point_of_sale');

let port: number = process.env.PORT || 4000;
import categoryRoutes = require("./category/categoryRouter"); 
import sellingRoutes = require("./selling/sellingRouter")
import userRoutes = require("./user/userRouter"); 
import productRoutes = require("./product/productRouter"); 
import InventryRoutes = require("./inventry/inventryRouter"); 
import rateRoutes = require("./rate/rateRouter"); 



//Server Creation
let app: express.Express = express();
let server: http.Server = http.createServer(app);
let io: SocketIO.Server = socket(server);

server.listen(port, () => {
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
app.use('/api/sell' , sellingRoutes)







// res.header("Access-Control-Allow-Origin", "*");
// res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
// res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');

// logger middle ware
app.use((req, res, next) => {
    console.log("Logging: " + req.method.toString() + ": " + req.url.toString());
    next();
});

app.use(express.static(path.join(__dirname, "./../../client/build")));

// set vairiables in Express
app.set("port", port);
app.set("env", "development");
app.set("address", "localhost");

// Handle Routes after some middlewares
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./../../client/build/index.html"));
});

app.get("/api/test", (req, res) => {
    res.json({ success: true, data: "Hello World" });
});


// For Socket creating array of Fruits
let fruits = ['Apple', 'Banana'];

io.sockets.on("connection", function (socket) {

    socket.emit("message", { message: "you are using socket.io" });

    socket.on('addFruit', (data) => {
        io.sockets.emit('addedFruit', data);
        //fruits.push(data);
    });

    socket.on('getFruits', () => {
        io.sockets.emit('getAllFruits', fruits);
    });

});
