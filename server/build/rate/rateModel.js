"use strict";
var mongoose = require('mongoose'); //import mongodb
//////////////////// Mongoose ////////////////////////
//Creating Schema for User in MongoDB
var userSchema = new mongoose.Schema({
    rates: String,
    rateDec: String
});
exports.RateModel = mongoose.model("Rate", userSchema); //Create Collection with the name of Users (in db it shows Todos)
//user class
var User = (function () {
    //constructor
    function User(user) {
        if (user) {
            this.rates = user.rates;
            this.rateDec = user.rateDec;
        }
    }
    //is user exists checking
    User.isUserExists = function (_name, cb) {
        exports.RateModel.findOne({ rates: _name }, function (err, user) {
            if (err) {
                cb(true, null); // err true
            }
            if (user && user.rates) {
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
        User.isUserExists(user.rates, function (err, data) {
            if (err) {
                cb(err, null);
            }
            else {
                // delete user._id;
                var Obj = new exports.RateModel(user);
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
    User.prototype.getRates = function (req, res) {
        exports.RateModel.find({}, function (err, data) {
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
