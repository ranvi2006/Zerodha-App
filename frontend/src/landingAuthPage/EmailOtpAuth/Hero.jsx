import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Hero() {
    const user = useSelector((state) => state.user)
    const localUser=JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const navigate = useNavigate();
    
    const [err, setErr] = useState({
        otp: {
            success: false,
            message: ""
        }
    });
    const [btnC, setBtnC] = useState("#1a77eb");
    const [otp, setOtp] = useState("");


    const [placeholder, setPlaceHolder] = useState("Enter The Otp");
    function name(params) {

    }


    function handleBtn() {
        setBtnC("white");
        setTimeout(() => {
            setBtnC("#1a77eb");
        }, 100);

        if (otp != "" && otp.length == 6) {
            navigate("/auth/step1");
        }
        else if (otp == "") {
            setErr((res) => {
                return {
                    ...res,
                    otp: {
                        ...res.otp,
                        success: true,
                        message: "Otp Must be Filled"
                    }
                }
            });
            setPlaceHolder("Enter Otp First");
        }
        else if (otp.length != 6) {
            setErr((res) => {
                return {
                    ...res,
                    otp: {
                        ...res.otp,
                        success: true,
                        message: "Enter Valid 6 digit Code"
                    }
                }
            });
            setPlaceHolder("Enter 6 Digit Otp");

        }
    }

    function handleField(e) {
        e.preventDefault();
        setOtp(e.target.value);
        console.log(otp);
    }
    return (
        <div style={{ height: "85vh" }} >

            <main style={{ minHeight: "60vh", padding: "0px 20px", paddingTop: "100px", overflow: "scroll", marginTop: "15vh", overflowX: "hidden", paddingBottom: "50vh" }}>
                <div className="row">
                    <div className="col-6" style={{ textAlign: "end", paddingRight: "70px" }}>
                        <img src="/media/auth/page-otp-DLrksP7J.svg" alt="" />
                    </div>
                    <div className="col-6 ps-5" >
                        <h2 style={{ opacity: ".8" }}>Email Otp</h2>
                        <h6 className='mt-4 mb-4'>Sent to {localUser.email} <Link style={{ textDecoration: "none" }} to="/signup">(change email)</Link></h6>


                        <Link style={{ textDecoration: "none" }} ><div style={{ textDecoration: "none", width: "60%", height: "12vh", border: "1px solid gray", borderRadius: "3px" }}>

                            <div className="row" style={{ height: "100%" }}>
                                <div className="" style={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center", borderRight: "1px solid gray", paddingLeft: "27px" }}>
                                    <img src="/media/auth/downloadPhone.svg" alt="" />
                                </div>
                                <div className="" style={{ height: "100%", width: "80%", display: "flex", justifyContent: "center", alignItems: "center", }}>

                                    <input onChange={handleField} style={{ width: "100%", height: "100%", fontSize: "1rem", border: 'none' }} type="number" placeholder={placeholder} />

                                </div>
                                {err.otp.success && err.otp.message != "" ?
                                    <p style={{
                                        color: "red",
                                        fontSize: "14px",
                                        marginTop: "5px",
                                        fontWeight: "bold"
                                    }}>
                                        {err.otp.message}
                                    </p>
                                    : null}


                            </div>
                        </div></Link>
                    </div>
                </div>

            </main>
            <footer style={{ backgroundColor: "white", position: "fixed", bottom: "0", boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.3)", height: "25vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "90px" }}>
                <button onClick={handleBtn} style={{ color: btnC == "#1a77eb" ? "white" : "black", backgroundColor: btnC, fontSize: "1.2rem", fontWeight: "600", padding: "15px 60px", border: "none", borderRadius: "5px" }}>Continue</button>
            </footer>
        </div>
    )
}
