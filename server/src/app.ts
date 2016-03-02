///<reference path="./../typings/tsd.d.ts" />

import express = require('express'); 					//import express module from dafinatelytyped file (d.ts)
import path = require('path'); 							//import path module (builten module from express/node)
import bodyParser = require('body-parser'); 			//import body-parser module/third party middleware

//if use mongoose
//import mongoose = require('mongoose'); 					//import mongodb driver
//mongoose.connect('mongodb://localhost:27017/dbName');	//connect to mongodb

//Start Express
let app: express.Express = express();						//Start Express

//logger middle ware
app.use((req, res, next) => {									//Logging on console
    console.log('Logging: ' + req.method.toString() + ': ' + req.url.toString());
    next();
});

//Middlewaress
app.use(bodyParser.json());										                   //Using bodyparser for getting post request variables (to support application/JSON-encoded bodies)
app.use(bodyParser.urlencoded({ extended: false }))				//parse application/x-www-form-urlencoded (to support URL-encoded bodies)
app.use(express.static(path.join(__dirname, './../../client/build')));	//defining static path for current project (client side....)

//Get port from environment and store in Express. 
var port: number = process.env.PORT || 4000;		//Defining port number

//set vairiables in Express
app.set('port', port);
app.set('env', 'development');
app.set('address', 'localhost') 

//Handle Routes after some middlewares
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './../../client/build/index.html'));
});

app.get('/api/test', (req, res) => {
    res.json({success: true, data: 'Hello World' });
});

//Starting / Listening 
var server = app.listen(port, () => {							//start listner
    var listeningPort: number = server.address().port;
    console.log('The server is listening on: ' + app.get('address') + ':' + listeningPort);
});