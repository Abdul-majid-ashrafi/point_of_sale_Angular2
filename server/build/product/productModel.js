"use strict";
var mongoose = require('mongoose'); //import mongodb
//////////////////// Mongoose ////////////////////////
//Creating Schema for User in MongoDB
var userSchema = new mongoose.Schema({
    productName: String,
    productDec: String,
    categoryName: String,
    unit: String
});
exports.ProductModel = mongoose.model("Product", userSchema); //Create Collection with the name of Users (in db it shows Todos)
//user class
var User = (function () {
    //constructor
    function User(user) {
        if (user) {
            this.productName = user.productName;
            this.productDec = user.productDec;
        }
    }
    //is user exists checking
    User.isUserExists = function (_name, cb) {
        exports.ProductModel.findOne({ productName: _name }, function (err, user) {
            if (err) {
                cb(true, null); // err true
            }
            if (user && user.productName) {
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
        User.isUserExists(user.productName, function (err, data) {
            if (err) {
                cb(err, null);
            }
            else {
                // delete user._id;
                var Obj = new exports.ProductModel(user);
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
        exports.ProductModel.find({}, function (err, data) {
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
