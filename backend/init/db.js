const mongoose = require('mongoose');
const Share=require("../models/Share.model");
try
{
    mongoose.connect('mongodb://127.0.0.1:27017/Zerodha').then(()=>{
        console.log("Data Base Connected");
    });
}catch(e)
{
console.log("Data Base Error");
}