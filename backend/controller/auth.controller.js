const { Message } = require("twilio/lib/twiml/MessagingResponse");
const User = require("../models/User.model");
const userValidation = require("../schema/User.schema");
const Share = require("../models/Share.model");
const Bid=require("../models/Bid.model");


const sendOtpAndAddNumber = async (req, res, next) => {
    // Validate request body using Joi
    const { error, value } = await userValidation.validate(req.body);

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details ? error.details[0].message : error.message
        });
    }

    // Check if the phone number already exists in the database
    const user = await User.findOne({ phoneNo: value.phoneNo });

    if (!user) {
        const newUser = await User.create(value); // Create a new user if not found
        return res.status(201).json({
            success: true,
            message: "Phone Number Added",
            data: newUser
        });
    }

    return res.status(200).json({
        success: true,
        message: "Phone Number Added",
        data: user
    });

}
const sendDataAndUpdate = async (req, res, next) => {
    // console.log("Received Data:", req.body);

    // Validate request body using Joi
    const { error, value } = await userValidation.validate(req.body);

    if (error) {
        console.error("Validation Error:", error.details ? error.details[0].message : error.message);
        return res.status(400).json({
            success: false,
            message: error.details ? error.details[0].message : error.message
        });
    }

    // Check if the user exists
    const user = await User.findOne({ phoneNo: value.phoneNo });
    // console.log("user--", user);
    const data = {
        bank: {
            holderName: value.bank.holderName || user.bank.holderName,
            accountNumber: value.bank.accountNumber || user.bank.accountNumber,
            idfc: value.bank.idfc || user.bank.idfc,
        },
        panCard: {
            name: value.panCard.name || user.panCard.name,
            number: value.panCard.number || user.panCard.number,
            dob: value.panCard.dob || user.panCard.dob,
        },
        adharCard: {
            name: value.adharCard.name || user.adharCard.name,
            number: value.adharCard.number || user.adharCard.number,
            dob: value.adharCard.dob || user.adharCard.dob,
        },
        name: value.name || user.name,
        phoneNo: value.phoneNo || user.phoneNo,
        email: value.email || user.email,
        hashPassword: value.hashPassword || user.hashPassword,
        userId: value.userId || user.userId,
        isDone: value.isDone || user.isDone
    }

    const finalUser = await User.findByIdAndUpdate({ _id: user._id }, { $set: data });
    res.json({
        success: true,
        data: finalUser
    });

};




const getUser = async (req, res, next) => {

    const { phoneNo } = req.body;

    // Check if phone number is provided
    if (!phoneNo) {
        return res.status(400).json({
            success: false,
            message: "Invalid Data, Bad Request",
        });
    }

    // Find user by phone number
    const user = await User.findOne({ phoneNo });

    // If user does not exist
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User does not exist",
        });
    }

    // Return user details
    return res.status(200).json({
        success: true,
        message: "User found",
        user,  // Sending user details
    });


};


const getWatchList = async (req, res, next) => {
    const { phoneNo } = req.body; // Extract phoneNo properly
    // console.log(req.body);

    if (phoneNo) {
        const user = await User.findOne({ phoneNo: phoneNo }).populate("watchList");
        const watchlist = user.watchList || ["raju"]

        res.status(200).json({
            success: true,
            watchlist: watchlist
        });
    } else {
        res.status(400).json({ success: false, message: "Phone number is required" });
    }

}

const addWatchList = async (req, res, next) => {
    const { id, phoneNo } = req.body;
    if (!id) {
        return res.json({
            success: false,
            message: "Share Id Required"
        });
    }

    const share = await Share.findOne({ _id: id });
    if (!share) {
        return res.json({
            success: false,
            message: "Share is Not Present in the date base"
        });
    }
    if (!phoneNo) {
        return res.json({
            success: false,
            message: "Phone Number Required"
        });
    }

    const updatedUser = await User.findOneAndUpdate(
        { phoneNo: phoneNo },
        { $push: { watchList: share._id } }, // Adds new ID to array
        { new: true }
    );

    res.json({
        success: true,
        message: "Share Added to your WatchList"
    });



}

const getOrder = async (req, res, next) => {
    const { phoneNo } = req.body; // Extract phoneNo properly
    // console.log(req.body);

    if (phoneNo) {
        const user = await User.findOne({ phoneNo: phoneNo }).populate("orders");
        const orders = user.orders || []

        res.status(200).json({
            success: true,
            orders: orders
        });
    } else {
        res.status(400).json({ success: false, message: "Phone number is required" });
    }

}
const addOrder = async (req, res, next) => {
    const { id, phoneNo, quantity } = req.body;
    if (!id) {
        return res.json({
            success: false,
            message: "Share Id Required"
        });
    }
    if (!phoneNo) {
        return res.json({
            success: false,
            message: "Phone Number Required"
        });
    }

    if(!quantity)
    {
        return res.json({
            success: false,
            message: " Missing Data, quantity undefined"
        }); 
    }

    const share = await Share.findOne({ _id: id });
    console.log("share--", share);
    console.log(id);
    if (!share) {
        return res.json({
            success: false,
            message: "Share is Not Present in the date base"
        });
    }


    for(let i =1;i<=quantity;i++)
    {
        const updatedUser = await User.findOneAndUpdate(
            { phoneNo: phoneNo },
            { $push: { orders: share._id } }, // Adds new ID to array
            { new: true }
        );
    }
  return  res.json({
        success: true,
        message: ` ${quantity} Order Added to your OrderList `
    });



}
const removeOrder = async (req, res, next) => {
    const { id, phoneNo, quantity } = req.body;

    if (!id) {
        return res.json({
            success: false,
            message: "Share Id Required"
        });
    }

    if (!phoneNo) {
        return res.json({
            success: false,
            message: "Phone Number Required"
        });
    }

    if (!quantity) {
        return res.json({
            success: false,
            message: "Missing Data, quantity undefined"
        });
    }

    const user = await User.findOne({ phoneNo });
    if (!user) {
        return res.json({
            success: false,
            message: "User not found"
        });
    }

    let removed = 0;

    for (let i = 0; i < quantity; i++) {
        const index = user.orders.indexOf(id);
        if (index > -1) {
            user.orders.splice(index, 1);
            removed++;
        } else {
            break; // Stop loop if no more instances are found
        }
    }

    await user.save();

    return res.json({
        success: true,
        message: `${removed} Order(s) removed from your OrderList`
    });
};



const getBid=async (req,res,next)=>{
    const bids=await Bid.find({});
    return res.json({
        success:true,
        bids:bids ||[]
    });
    
}


const creditFunds=async (req,res,next)=>{
    const {phoneNo,amount}=req.body;
    
    if(!phoneNo)
    {
        return res.json({
            success:false,
            message:"Phone Number required"
        });
    }
    let money=parseInt(amount)||0;

    const user= await User.findOne({phoneNo:phoneNo});
    if(!user)
    {
        return res.json({
            success:false,
            message:"User Not Found"
        });
    }
    money=money+user.totalFunds;
    
   await User.findOneAndUpdate({phoneNo:phoneNo},{$set:{totalFunds:money}})

   return  res.json({
    success:true,
    message:"Credit to Your Account"
   });
}
const debitFunds=async (req,res,next)=>{
    const {phoneNo,amount}=req.body;
    
    if(!phoneNo)
    {
        return res.json({
            success:false,
            message:"Phone Number required"
        });
    }
    let money=parseInt(amount)||0;

    const user= await User.findOne({phoneNo:phoneNo});
    if(!user)
    {
        return res.json({
            success:false,
            message:"User Not Found"
        });
    }
    money=user.totalFunds-money;
    
   await User.findOneAndUpdate({phoneNo:phoneNo},{$set:{totalFunds:money}})

   return  res.json({
    success:true,
    message:"Debited from Your Account"
   });
}

module.exports = {
    sendOtpAndAddNumber
    , sendDataAndUpdate
    , getUser,
    getWatchList,
    addWatchList,
    getOrder,
    addOrder,
    getBid,
    removeOrder,
    creditFunds,
    debitFunds
}