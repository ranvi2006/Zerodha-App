const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema({
    name: String,
    company: String,
    stDate: Number,
    endDate: Number,
    stPrice: Number,
    endPrice: Number,
    minAmmount: Number,
    quantity: Number,
    state: String
});

const Bid = mongoose.model("Bid", bidSchema);
const bids=require('../init/bidData');

const seedBids = async () => {
    const data=await Bid.find({});
    if(data.length==0)
    {
        try {
            await Bid.deleteMany(); // Clear old data (optional)
            await Bid.insertMany(bids);
            console.log("Bids inserted successfully!");
            mongoose.connection.close(); // Close connection after insertion
        } catch (err) {
            console.error(err);
        }
    }
};

seedBids();

module.exports = Bid;
