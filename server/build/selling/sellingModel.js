"use strict";
var mongoose = require('mongoose'); //import mongodb
//////////////////// Mongoose ////////////////////////
//Creating Schema for User in MongoDB
var userSchema = new mongoose.Schema({
    productName: String,
    unit: String
});
exports.sellingModel = mongoose.model("Selling", userSchema); //Create Collection with the name of Users (in db it shows Todos)
//user class
var User = (function () {
    function User() {
    }
    //constructor
    // constructor(user?: IUser) {
    //     if (user) {
    //         this.categoryName = user.categoryName
    //         this.productName = user.productName
    //         this.rate = user.rate
    //         this.userName = user.userName
    //         this.unit = user.unit
    //     }
    // }
    //create user
    User.prototype.create = function (user, cb) {
        var Obj = new exports.sellingModel(user);
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
