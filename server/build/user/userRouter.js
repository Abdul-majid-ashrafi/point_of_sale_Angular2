"use strict";
/// <reference path="./../../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();
//import controller
var controller = require("./userController");
//Get
// router.get('/', controller.Index_get)
;
//router.post('/', controller.UserSave_post); 
router.get('/getUser', controller.getAllUsers);
router.post('/User', controller.UserSave_post);
module.exports = router;
