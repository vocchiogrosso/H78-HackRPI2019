require('dotenv').config();
const chalk = require('chalk');
const mongoose = require('mongoose');

// Creates Connection String
function _Build_Connection_String(){
    const MONGO_CONNECTION_STRING = "mongodb://"+process.env.MONGO_USERNAME+":"+process.env.MONGO_PASSWORD+"@"+process.env.SHARD_1+","+process.env.SHARD_2+","+process.env.SHARD_3+"/"+process.env.MONGO_DATABASE+"?ssl=true&replicaSet=Development-shard-0&authSource=admin&retryWrites=true"
    return MONGO_CONNECTION_STRING;
}

// Tests Connection
function _Check_Connection_State(){
    switch(mongoose.connection.readyState){
        case 0:
            return ("Database Status: "+chalk.red(" Disconnected"));
        case 1:
            return ("Database Status: "+chalk.green(" Connected"));
        case 2:
            return ("Database Status: "+chalk.blue(" Connecting"));
        case 3:
            return ("Database Status: "+chalk.yellow(" Disconnecting"));
    }

    return result;
}

module.exports={
    BuildConnectionString:_Build_Connection_String,
    CheckConnectionState:_Check_Connection_State
}