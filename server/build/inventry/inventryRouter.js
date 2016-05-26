"use strict";
/// <reference path="./../../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();
//import controller
var controller = require("./inventryController");
//Get
// router.get('/', controller.Index_get)
;
//router.post('/', controller.UserSave_post); 
router.get('/getInventry', controller.getInventry);
router.post('/Inventry', controller.InventrySave_post);
module.exports = router;
