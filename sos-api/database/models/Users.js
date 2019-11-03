const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Username:{
        type:String,
        unique:[true,"Username Is Already Taken"]
    },
    Password:String,
    Email:{
        type:String,
        unique:[true,"Email Already Exists"]
    },
    FirstName:String,
    LastName:String,
    AdminTokenKey:{
        type:String,
        unique:[true,"AdminID Is Already Taken"]
    },
    AdminTokenValue:String,
    Verified:Boolean
});   

/* Exports As Admin */
const User = mongoose.model('Users', UserSchema);
module.exports = User;