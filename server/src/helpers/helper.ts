import * as _User from './../category/categoryModel';


//create type for callback function
export type CallBackFunction = (error, data) => void;

//for response of api
export type customServerResponseObject = { 'success': boolean, 'data': any, 'error': any };






function CreateCategory(cb) {
    var u1: _User.IUser = {categoryName: 'MuZz', categoryDec : "Something"};
    var userObj = new _User.User(u1);
    
    //checking user exists or not
    _User.User.isUserExists(userObj.categoryName, (error, result) => {
        console.log('user -- exists?', error);
        if (!error) {
            userObj.create(userObj, (err, data: _User.IUser) => {
                if (err) {
                    console.log('User Create Err');
                    console.log(err)
                    cb(false);
                } else {
                    console.log('User Created');
                    console.log(data);
                   
                }
            }); //userObj.create
        } else {
            console.log('User/Member not created...Err!');
            console.log(error);
            cb(false);
        }
    }); //User.isUserExists
} //CreateUserAndMember