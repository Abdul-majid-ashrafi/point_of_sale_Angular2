import mongoose = require('mongoose'); 	//import mongodb
import * as helper from './../helpers/helper';
//import q = require('q');			
//if using promise pattren

//interface of user
export interface IUser {
    productName: string;
    unit: string
}




//////////////////// Mongoose ////////////////////////
//Creating Schema for User in MongoDB
let userSchema = new mongoose.Schema({									//Create Schema for User Collection
    productName: String,
    unit: String
});

export const sellingModel = mongoose.model("Selling", userSchema);			//Create Collection with the name of Users (in db it shows Todos)



//user class
export class User implements IUser {
    productName: string;
    unit: string

    //constructor
    // constructor(user?: IUser) {
    //     if (user) {
    //         this.categoryName = user.categoryName
    //         this.productName = user.productName
    //         this.rate = user.rate
    //         this.userName = user.userName
    //         this.unit = user.unit
    //     }
    // }



    //create user
    create(user: IUser, cb: helper.CallBackFunction): void {
        let Obj = new sellingModel(user);
        
        Obj.save((error, data: IUser) => {
            if (error) {
                cb(error, null);
            }
            cb(null, data);
        });


    }; // create user




    //  getInventry(req,res){
    //     InventryModel.find({}, (err,data) => {
    //          if (err) {
    //             //if error on finding user
    //             res.send("Error")
    //         } else { 
    //            res.send(data)
    //         }

    //     }); 
    // };
} 