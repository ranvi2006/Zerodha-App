const express=require("express");
const router=express.Router();
const {debitFunds,creditFunds,removeOrder,sendOtpAndAddNumber,sendDataAndUpdate,getUser,getWatchList,addWatchList,addOrder,getOrder,getBid}=require("../controller/auth.controller");
const wrapAsync=require("../middleware/wrapAsync");

router.post("/sendOtpAndAddNumber",wrapAsync(sendOtpAndAddNumber));
router.post("/sendDataAndUpdate",wrapAsync(sendDataAndUpdate));
router.post("/getUser",wrapAsync(getUser));
router.post("/getWatchList",wrapAsync(getWatchList));
router.post("/addWatchList",wrapAsync(addWatchList));
router.post("/getOrder",wrapAsync(getOrder));
router.post("/getBid",wrapAsync(getBid));
router.post("/addOrder",wrapAsync(addOrder));
router.post("/removeOrder",wrapAsync(removeOrder));
router.post("/creditFunds",wrapAsync(creditFunds));
router.post("/debitFunds",wrapAsync(debitFunds));
router.get("/verify", (req, res) => {
    res.json({ success: true, message: "API is working!" });
});

module.exports=router;