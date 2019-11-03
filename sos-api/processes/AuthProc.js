const chalk = require('chalk');
const User = require('../databases/models/Users');
const generateString = require('../middleware/generateString');

module.exports={
    AddUser:_AddUser,
    LoginUser:_LoginUser
}

async function _AddUser(req,res){
    try {
        console.log(generateString.generateID(256));
        var result = await User.create({
            Username:req.body.Username,
            Password:req.body.Password,
            Email:req.body.Email,
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            Username:req.body.Username,
            AdminKey:generateString.generateID(20),
            Verified:false
        });
        console.log(result);
        res.send(result);
        console.log(chalk.blue("Sent Successfully"));
    } catch (error) {
        console.log(chalk.red("Unsuccessful"));
        console.log(error);
        res.status(500).send(error);
    }
    return;
}

async function _LoginUser(req,res){
    try {
        var result = await User.find({
            Username:req.body.Username
        });
        res.send(result);
    } catch (error) {
        console.log(chalk.red("Unsuccessful"));
        console.log(error);
        res.status(500).send(error);
    }
    return;
}