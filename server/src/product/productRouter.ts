/// <reference path="./../../typings/tsd.d.ts" />
import express = require("express");
var router : express.Router = express.Router();

//import controller
import * as controller from "./productController";

//Get
// router.get('/', controller.Index_get)
;
//router.post('/', controller.UserSave_post); 
router.get('/getProducts', controller.getAllgetProducts);
router.post('/Category', controller.ProductSave_post);
// router.post('/signin', controller.UserSigin_post);
// router.put('/updateUserStatus',controller.updateUserStatus);


export = router;