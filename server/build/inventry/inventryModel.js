"use strict";
var mongoose = require('mongoose'); //import mongodb
//////////////////// Mongoose ////////////////////////
//Creating Schema for User in MongoDB
var userSchema = new mongoose.Schema({
    categoryName: String,
    productName: String,
    rate: String,
    userName: String,
    unit: String
});
exports.InventryModel = mongoose.model("Inventry", userSchema); //Create Collection with the name of Users (in db it shows Todos)
//user class
var User = (function () {
    //constructor
    function User(user) {
        if (user) {
            this.categoryName = user.categoryName;
            this.productName = user.productName;
            this.rate = user.rate;
            this.userName = user.userName;
            this.unit = user.unit;
        }
    }
    //create user
    User.prototype.create = function (user, cb) {
        var Obj = new exports.InventryModel(user);
        console.log("Checking DATA", Obj);
        Obj.save(function (error, data) {
            if (error) {
                cb(error, null);
            }
            cb(null, data);
        });
    };
    ;
    return User;
}());
exports.User = User;
