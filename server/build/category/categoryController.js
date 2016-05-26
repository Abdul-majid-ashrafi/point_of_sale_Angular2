"use strict";
var categoryModel_1 = require("./categoryModel"); //import Member Class
var user = new categoryModel_1.User();
//Object
var Controller = {
    CategorySave_post: function (req, res) {
        console.log(req.body, "ccccccccccccccccccccccccccc");
        var categoryObj = req.body;
        user.create(categoryObj, function (err, data) {
            if (err) {
                res.json({ 'success': false, 'data': null, 'error': err });
            }
            else {
                res.json({ 'success': true, 'data': data, 'error': null });
            }
        });
    },
    getAllUsers: function (req, res) {
        categoryModel_1.categoryModel.find({}, function (err, data) {
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
