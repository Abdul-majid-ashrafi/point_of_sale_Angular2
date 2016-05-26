import mongoose = require('mongoose'); 	//import mongodb
import * as helper from './../helpers/helper';
//import q = require('q');			
	//if using promise pattren

//interface of user
export interface IUser {
    categoryName: string;
    categoryDec : string[];  
}




//////////////////// Mongoose ////////////////////////
//Creating Schema for User in MongoDB
let userSchema = new mongoose.Schema({									//Create Schema for User Collection
    categoryName : String,
    categoryDec : []
});

export const categoryModel = mongoose.model("Categorie", userSchema);			//Create Collection with the name of Users (in db it shows Todos)



//user class
export class User implements IUser {
    categoryName: string;
    categoryDec : string[];  
    
    //constructor
    constructor(user?: IUser) {
        if (user) { 
            this.categoryName = user.categoryName
            this.categoryDec = user.categoryDec
           
        }
    }
    
       //is user exists checking
    static isUserExists(_name: string, cb: helper.CallBackFunction): void {
        categoryModel.findOne({ categoryName: _name }, function(err, user: IUser) {
            if (err) {
                cb(true, null)      // err true
            }
            if (user && user.categoryName) {
                cb(true, null)      //err true if user exists
            } else {
                
                cb(false, null)     //err false if user not exixts
            }
        })
    }; 
    
    
        //create user
    create(user: IUser, cb: helper.CallBackFunction): void {
        User.isUserExists(user.categoryName, (err, data) => {
            if (err) {
                cb(err, null);
            } else {
                // delete user._id;
                let categoryObj = new categoryModel(user);
                categoryObj.save((error, data: IUser) => {
                    if (error) {
                        cb(err, null);
                    }
                    cb(null, data);
                });
            }
        });     //User.isUserExists
    }; // create user
    
    
     getAllUser(req,res){
        categoryModel.find({}, (err,data) => {
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