"use strict";
/// <reference path="./../../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();
//import controller
var controller = require("./productController");
//Get
// router.get('/', controller.Index_get)
;
//router.post('/', controller.UserSave_post); 
router.get('/getProducts', controller.getAllgetProducts);
router.post('/Category', controller.ProductSave_post);
module.exports = router;
