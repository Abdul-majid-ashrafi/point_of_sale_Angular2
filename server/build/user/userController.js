"use strict";
var userModel_1 = require("./userModel"); //import Member Class
var user = new userModel_1.User();
//Object
var Controller = {
    UserSave_post: function (req, res) {
        console.log(req.body, "uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
        var userObj = req.body;
        user.create(userObj, function (err, data) {
            if (err) {
                res.json({ 'success': false, 'data': null, 'error': err });
            }
            else {
                res.json({ 'success': true, 'data': data, 'error': null });
            }
        });
    },
    getAllUsers: function (req, res) {
        userModel_1.userModel.find({}, function (err, data) {
            console.log('controller err', err);
            console.log('controller data', data);
            if (err) {
                res.send({ 'success': false, 'data': null, 'error': err });
            }
            else {
                res.send({ 'success': true, 'data': data, 'error': err });
            }
        });
    },
};
module.exports = Controller;
