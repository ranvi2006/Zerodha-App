const mongoose = require('mongoose');
const Share=require("../models/Share.model");
try
{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Data Base Connected");
    });
}catch(e)
{
console.log("Data Base Error");
}