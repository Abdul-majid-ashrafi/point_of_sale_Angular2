"use strict";
var sellingModel_1 = require("./sellingModel"); //import Member Class
var user = new sellingModel_1.User();
//Object
var Controller = {
    sellingSave_post: function (req, res) {
        console.log(req.body, "ssssssssssssssssssssssss");
        var Obj = req.body;
        user.create(Obj, function (err, data) {
            if (err) {
                res.json({ 'success': false, 'data': null, 'error': err });
            }
            else {
                res.json({ 'success': true, 'data': data, 'error': null });
            }
        });
    },
    getSeller: function (req, res) {
        sellingModel_1.sellingModel.find({}, function (err, data) {
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
