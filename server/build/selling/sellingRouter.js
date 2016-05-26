"use strict";
/// <reference path="./../../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();
//import controller
var controller = require("./sellingController");
//Get
// router.get('/', controller.Index_get)
;
//router.post('/', controller.UserSave_post); 
router.get('/getSellers', controller.getSeller);
router.post('/Selling', controller.sellingSave_post);
module.exports = router;
