"use strict";
var RateModel_1 = require("./RateModel"); //import Member Class
var user = new RateModel_1.User();
//Object
var Controller = {
    RateSave_post: function (req, res) {
        console.log(req.body, "rrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
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
    getRate: function (req, res) {
        RateModel_1.RateModel.find({}, function (err, data) {
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
