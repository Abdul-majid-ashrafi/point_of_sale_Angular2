"use strict";
var _User = require('./../category/categoryModel');
function CreateCategory(cb) {
    var u1 = { categoryName: 'MuZz', categoryDec: "Something" };
    var userObj = new _User.User(u1);
    //checking user exists or not
    _User.User.isUserExists(userObj.categoryName, function (error, result) {
        console.log('user -- exists?', error);
        if (!error) {
            userObj.create(userObj, function (err, data) {
                if (err) {
                    console.log('User Create Err');
                    console.log(err);
                    cb(false);
                }
                else {
                    console.log('User Created');
                    console.log(data);
                }
            }); //userObj.create
        }
        else {
            console.log('User/Member not created...Err!');
            console.log(error);
            cb(false);
        }
    }); //User.isUserExists
} //CreateUserAndMember
