import mongoose = require('mongoose'); 	//import mongodb
import * as helper from './../helpers/helper';
//import q = require('q');			
//if using promise pattren

//interface of user
export interface IUser {
    categoryName: string;
    productName: string;
    rate: string;
    userName: string;
    unit: string
}




//////////////////// Mongoose ////////////////////////
//Creating Schema for User in MongoDB
let userSchema = new mongoose.Schema({									//Create Schema for User Collection
    categoryName: String,
    productName: String,
    rate: String,
    userName: String ;
    unit: String
});

export const InventryModel = mongoose.model("Inventry", userSchema);			//Create Collection with the name of Users (in db it shows Todos)



//user class
export class User implements IUser {
    categoryName: string;
    productName: string;
    rate: string;
    userName: string;
    unit: string

    //constructor
    constructor(user?: IUser) {
        if (user) {
            this.categoryName = user.categoryName
            this.productName = user.productName
            this.rate = user.rate
            this.userName = user.userName
            this.unit = user.unit
        }
    }



    //create user
    create(user: IUser, cb: helper.CallBackFunction): void {
        let Obj = new InventryModel(user);
        console.log("Checking DATA", Obj)
        
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