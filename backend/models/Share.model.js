const mongoose = require("mongoose");

const shareSchema = new mongoose.Schema({
    shareName: {
        type: String,
        required: true,
        trim: true // Ensures no extra spaces
    },
    percentage: {
        type: Number,
        required: true,
        
    },
    profitPercentage: {
        type: Number,
        required: true,
        
    },
    isUp: {
        type: Boolean,
        required: true,
        default: false // Default to false if not provided
    },
    price: {
        type: Number,
        required: true,
        
    }
});

const Share = mongoose.model("Share", shareSchema);

// Insert data into the database only if it doesn't already exist
const allShare=require("../init/shares.data");
async function insertInitialShares() {
    try {
        const existingShares = await Share.countDocuments();
        if (existingShares === 0) {
            await Share.insertMany(allShare);
            console.log("✅ Initial shares inserted successfully!");
        } else {
            console.log("⚠️ Shares already exist, skipping insertion.");
        }
    } catch (error) {
        console.error("❌ Error inserting shares:", error);
    }
}

// Run the insert function when the script runs
insertInitialShares();

module.exports = Share;
