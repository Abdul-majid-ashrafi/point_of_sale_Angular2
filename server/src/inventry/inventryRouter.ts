/// <reference path="./../../typings/tsd.d.ts" />
import express = require("express");
var router : express.Router = express.Router();

//import controller
import * as controller from "./inventryController";

//Get
// router.get('/', controller.Index_get)
;
//router.post('/', controller.UserSave_post); 
router.get('/getInventry', controller.getInventry);
router.post('/Inventry', controller.InventrySave_post);
// router.post('/signin', controller.UserSigin_post);
// router.put('/updateUserStatus',controller.updateUserStatus);


export = router;