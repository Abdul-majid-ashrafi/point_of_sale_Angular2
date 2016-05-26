"use strict";
var mongoose = require('mongoose'); //import mongodb
//////////////////// Mongoose ////////////////////////
//Creating Schema for User in MongoDB
var userSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    type: String
});
exports.userModel = mongoose.model("User", userSchema); //Create Collection with the name of Users (in db it shows Todos)
//user class
var User = (function () {
    //constructor
    function User(user) {
        if (user) {
            this.fName = user.fName;
            this.lName = user.lName;
            this.type = user.type;
        }
    }
    //is user exists checking
    User.isUserExists = function (_name, cb) {
        exports.userModel.findOne({ fName: _name }, function (err, user) {
            if (err) {
                cb(true, null); // err true
            }
            if (user && user.fName) {
                cb(true, null); //err true if user exists
            }
            else {
                cb(false, null); //err false if user not exixts
            }
        });
    };
    ;
    //create user
    User.prototype.create = function (user, cb) {
        User.isUserExists(user.fName, function (err, data) {
            if (err) {
                cb(err, null);
            }
            else {
                // delete user._id;
                var Obj = new exports.userModel(user);
                Obj.save(function (error, data) {
                    if (error) {
                        cb(err, null);
                    }
                    cb(null, data);
                });
            }
        }); //User.isUserExists
    };
    ;
    User.prototype.getAllUser = function (req, res) {
        exports.userModel.find({}, function (err, data) {
            console.log('Model Errrrrrrrrrrr', err);
            console.log('Model Dataaaaaaaaaaaaaaaaa', data);
            if (err) {
                //if error on finding user
                res.send("Error");
            }
            else {
                res.send(data);
            }
        });
    };
    ;
    return User;
}());
exports.User = User;
