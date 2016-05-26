"use strict";
var ProductModel_1 = require("./ProductModel"); //import Member Class
var user = new ProductModel_1.User();
//Object
var Controller = {
    ProductSave_post: function (req, res) {
        console.log(req.body, "pppppppppppppppppppppppppppp");
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
    getAllgetProducts: function (req, res) {
        ProductModel_1.ProductModel.find({}, function (err, data) {
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
