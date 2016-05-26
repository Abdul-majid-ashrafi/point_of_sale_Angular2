import mongoose = require('mongoose'); 	//import mongodb
import * as helper from './../helpers/helper';
//import q = require('q');			
	//if using promise pattren

//interface of user
export interface IUser {
    fName: string;
    lName : string;  
    type : string;
}




//////////////////// Mongoose ////////////////////////
//Creating Schema for User in MongoDB
let userSchema = new mongoose.Schema({									//Create Schema for User Collection
    fName : String,
    lName : String,
    type : String
});

export const userModel = mongoose.model("User", userSchema);			//Create Collection with the name of Users (in db it shows Todos)



//user class
export class User implements IUser {
    fName: string;
    lName : string; 
    type : string; 
    
    //constructor
    constructor(user?: IUser) {
        if (user) { 
            this.fName = user.fName
            this.lName = user.lName
            this.type = user.type
           
        }
    }
    
       //is user exists checking
    static isUserExists(_name: string, cb: helper.CallBackFunction): void {
        userModel.findOne({ fName: _name }, function(err, user: IUser) {
            if (err) {
                cb(true, null)      // err true
            }
            if (user && user.fName) {
                cb(true, null)      //err true if user exists
            } else {
                
                cb(false, null)     //err false if user not exixts
            }
        })
    }; 
    
    
        //create user
    create(user: IUser, cb: helper.CallBackFunction): void {
        User.isUserExists(user.fName, (err, data) => {
            if (err) {
                cb(err, null);
            } else {
                // delete user._id;
                let Obj = new userModel(user);
                Obj.save((error, data: IUser) => {
                    if (error) {
                        cb(err, null);
                    }
                    cb(null, data);
                });
            }
        });     //User.isUserExists
    }; // create user
    
    
     getAllUser(req,res){
        userModel.find({}, (err,data) => {
            console.log('Model Errrrrrrrrrrr',err);
            console.log('Model Dataaaaaaaaaaaaaaaaa',data);
             if (err) {
                //if error on finding user
                res.send("Error")
            } else { 
               res.send(data)
            }
            
        }); 
    };
} 