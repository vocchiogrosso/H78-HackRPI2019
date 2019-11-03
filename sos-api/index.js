require('dotenv').config();
const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');

const api = new express();
const port = process.env.PORT || 3000;

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(cors());

//Database Connection
const ConnectionString = require('./database/connection');
const Connection_String = ConnectionString.BuildConnectionString();
mongoose.connect(Connection_String,{ useNewUrlParser: true, useUnifiedTopology: true, });
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
console.log(ConnectionString.CheckConnectionState());
mongoose.connection.once('open', function(res) { 
  console.log(ConnectionString.CheckConnectionState());
  nextup();
});

function nextup(){

    //Routes
    api.post('/add',()=>{

    });




    // Listen For Port
    api.listen(port, () => 
        // Move Function Somewhere Else In Future
        console.log(chalk.green.inverse("Your "+process.env.SYSTEM_TYPE+" is live in "+modeDectection()+" mode at: http://localhost:"+port))
    );

    function modeDectection(){
        if(process.env.NODE_ENV=="Development"){
            return chalk.yellow(process.env.NODE_ENV)
        }else{
            return chalk.green(process.env.NODE_ENV);
        }
    }
}

