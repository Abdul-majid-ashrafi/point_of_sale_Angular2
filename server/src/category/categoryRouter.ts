/// <reference path="./../../typings/tsd.d.ts" />
import express = require("express");
var router : express.Router = express.Router();

//import controller
import * as controller from "./categoryController";

//Get
// router.get('/', controller.Index_get)
;
//router.post('/', controller.UserSave_post); 
router.get('/getCategory', controller.getAllUsers);
router.post('/Category', controller.CategorySave_post);
// router.post('/signin', controller.UserSigin_post);
// router.put('/updateUserStatus',controller.updateUserStatus);


export = router;