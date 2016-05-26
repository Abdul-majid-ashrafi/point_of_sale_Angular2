"use strict";
var InventryModel_1 = require("./InventryModel"); //import Member Class
var user = new InventryModel_1.User();
//Object
var Controller = {
    InventrySave_post: function (req, res) {
        console.log(req.body, "iiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
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
    getInventry: function (req, res) {
        InventryModel_1.InventryModel.find({}, function (err, data) {
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
