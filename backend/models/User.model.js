const mongoose = require("mongoose");

// Define the schema
const userSchema = new mongoose.Schema({
    phoneNo: {
        type: String,
        required: [true, "Phone number is required"],
        unique: true, // Prevent duplicate phone numbers
        trim: true // Removes extra spaces
    },
    name:{
        type: String,
        default:null
    },
    email: {
        type: String,
        default:null
    },
    hashPassword: {
        type: String,
        default:null
    },
    userId: { 
        type: String, 
        default: null,
    },
    totalFunds: {
        type: Number,
        default: 0
    },
    userMargin: {
        type: Number,
        default: 0
    },
    avlMargin: {
        type: Number,
        default: 0
    },
    bids: [{
        type: mongoose.Schema.ObjectId,
        ref: "Bid"
    }],
    orders: [{
        type: mongoose.Schema.ObjectId,
        ref: "Share"
    }],
    shares: [{
        type: mongoose.Schema.ObjectId,
        ref: "Share"
    }],
    watchList: [{
        type: mongoose.Schema.ObjectId,
        ref: "Share"
    }],
    bank: {
        holderName: { type: String, default: null },
        accountNumber: { type: String, default: null },
        idfc: { type: String, default: null }
    },
    adharCard:{
        name:{
            type:String,
            default:null
        },
        number:{
            type:String,
            default:null
        },
        dob:{
            type:String,
            default:null
        }
    },
    panCard:{
        name:{
            type:String,
            default:null
        },
        number:{
            type:String,
            default:null
        },
        dob:{
            type:String,
            default:null
        }
    },
    isDone:{
        type:Boolean,
        default:false
    }

}, { timestamps: true }); // Adds createdAt & updatedAt fields automatically

// Create the User model
const User = mongoose.model("User", userSchema);

// Export the model
module.exports = User;
