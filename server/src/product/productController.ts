///<reference path="./../../typings/tsd.d.ts" />
import express = require("express");
import {User, IUser,ProductModel} from "./ProductModel";     //import Member Class

 
let user = new User();

//Object
let Controller = {
    
    ProductSave_post: (req: express.Request, res: express.Response) => {
            console.log(req.body,"pppppppppppppppppppppppppppp")
        var Obj: IUser = req.body;
        user.create(Obj, (err, data) => {
			if (err) {
				res.json({ 'success': false, 'data': null, 'error': err });
			} else {
				res.json({ 'success': true, 'data': data, 'error': null });
			}
        });
    },
    
    getAllgetProducts(req:express.Request, res:express.Response){
      ProductModel.find({},(err,data) => {
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
