/// <reference path="./../../typings/tsd.d.ts" />
import express = require("express");
var router : express.Router = express.Router();

//import controller
import * as controller from "./rateController";

//Get
// router.get('/', controller.Index_get)
;
//router.post('/', controller.UserSave_post); 
router.get('/getRate', controller.getRate);
router.post('/Rate', controller.RateSave_post);
// router.post('/signin', controller.UserSigin_post);
// router.put('/updateUserStatus',controller.updateUserStatus);


export = router;