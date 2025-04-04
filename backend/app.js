const dotEnv = require("dotenv");
dotEnv.config();
const express = require("express");
const cors = require("cors");
const twilio=require("twilio");
const app = express();
const connectDB=require("./init/db");
const User=require("./models/User.model");
const authRoute=require("./routes/auth.route");
const Bid=require("./models/Bid.model");


// ------ Middlewares ------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));


// ------ API Routes ------

app.use("/auth",authRoute)


// app.use("/api", require("./routes/apiRoutes"));  // Example route (add your actual routes here)

// ------ Unknown API Handling ------
app.use("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "The requested API endpoint does not exist. Please check the URL and try again."
    });
});

// ------ Global Error Handling ------
app.use((err, req, res, next) => {
    console.error("Error:", err.stack);  // Log error for debugging
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Something went wrong"
    });
});

module.exports = app;
