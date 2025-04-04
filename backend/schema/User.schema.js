const Joi = require("joi");

// Define ObjectId pattern for MongoDB
const userSchema =Joi.object({
    phoneNo: Joi.string()
        .pattern(/^[0-9]{10}$/) // Ensure it's a 10-digit number
        .required()
        .messages({
            "string.pattern.base": "Phone number must be a 10-digit number",
            "any.required": "Phone number is required"
        }),
    
    name: Joi.string().min(3).allow(null, "").max(100),
    email: Joi.string().email().allow(null, ""),
    hashPassword: Joi.string().allow(null, ""),
    userId: Joi.string().allow(null, ""),
    
    totalFunds: Joi.number().default(0),
    userMargin: Joi.number().default(0),
    avlMargin: Joi.number().default(0),
    orders: Joi.array().items(Joi.string().hex().length(24)),

    bids: Joi.array().items(Joi.string().hex().length(24)), // MongoDB ObjectId
    shares: Joi.array().items(Joi.string().hex().length(24)), 
    watchList: Joi.array().items(Joi.string().hex().length(24)), 

    bank: Joi.object({
        holderName: Joi.string().allow(null, ""),
        accountNumber: Joi.string().allow(null, ""),
        idfc: Joi.string().allow(null, "")
    }).default({}),

    adharCard: Joi.object({
        name: Joi.string().allow(null, ""),
        number: Joi.string().allow(null, ""), // Aadhaar: 12-digit number
        dob: Joi.string().allow(null, "")
    }).default({}),

    panCard: Joi.object({
        name: Joi.string().allow(null, ""),
        number: Joi.string().allow(null, ""), // PAN format: ABCDE1234F
        dob: Joi.string().allow(null, "")
    }).default({}),

    isDone: Joi.boolean().default(false)
});

module.exports = userSchema;
