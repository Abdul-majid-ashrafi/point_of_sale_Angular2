///<reference path="./../../typings/tsd.d.ts" />
import express = require("express");
import {User, IUser,InventryModel} from "./InventryModel";     //import Member Class

 
let user = new User();

//Object
let Controller = {
    
    InventrySave_post: (req: express.Request, res: express.Response) => {
            console.log(req.body,"iiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
        var Obj: IUser = req.body;
                
        user.create(Obj, (err, data) => {
			if (err) {
				res.json({ 'success': false, 'data': null, 'error': err });
			} else {
				res.json({ 'success': true, 'data': data, 'error': null });
			}
        });
    },
    
    getInventry(req:express.Request, res:express.Response){
      InventryModel.find({},(err,data) => {
            console.log('controller err',err)
            console.log('controller data',data)
            if(err){
                res.send({'success': false , 'data': null, 'error': err})
            }
            else{
                res.send({'success': true,'data': data, 'error': err })
            }
        })
        
    },
   
};

//export controller object
export = Controller;
