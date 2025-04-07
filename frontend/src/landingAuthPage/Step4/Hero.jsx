import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import validationRoutes from "../../function/Validation"
import axios from 'axios';

export default function Hero() {
    // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

    const user = useSelector((state) => state.user);
    const localUser = JSON.parse(localStorage.getItem("user"));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

    // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    const [checkbox, setCheckBox] = useState(false);

    async function fatchData() {
        if (!localUser.phoneNo) {
            navigate("/signup");
        }
        else {
            try {
                const url = `${import.meta.env.VITE_API_URL}/auth/getUser`;
                const response = await axios.post(url, {
                    phoneNo: localUser.phoneNo
                });
                const newUserData = response.data.user;
                dispatch(updateUser(newUserData));

            } catch (err) {
                setErr((res) => {
                    return {
                        ...res,
                        global: {
                            ...res.global,
                            success: true,
                            message: err.message || "Some Api Error Occure"
                        }
                    }
                });
            }
        }
    }

    useEffect(() => {
        fatchData();
    }, []);
    useEffect(() => {

        navigate(validationRoutes(user));
    }, [user]);
   
    function generateUsername(length = 8) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let username = "";
        
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            username += chars[randomIndex];
        }
    
        return username;
    }


    function handleCheckbox() {
        setCheckBox(!checkbox);
    }
    const [bg, setBg] = useState("#1a77eb");

    async function handleBtn() {
        setBg("white");
        setTimeout(() => {
            setBg("#1a77eb");
        }, 100);

        if (checkbox) {
            try {
              const body = {
                phoneNo: localUser.phoneNo,
                userId:generateUsername(),
                isDone:true
              }
              const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/sendDataAndUpdate`, body);
      
              dispatch(updateUser(response.data.user));
              localStorage.setItem("login", JSON.stringify({ login: true }));
      
              navigate("/kite");
      
      
            } catch (err) {
              // setErr((res) => {
              //   return {
              //     ...res,
              //     global: {
              //       ...res.global,
              //       success: true,
              //       message: "Bad Api Call"
              //     }
              //   }
              // });
            }
        }


    }
    return (
        <div style={{ height: "85vh" }} >

            <main style={{ minHeight: "60vh", padding: "0px 20px", overflow: "scroll", marginTop: "15vh", overflowX: "hidden", paddingBottom: "50vh", }}>


                <div className='mt-5'>
                    <h3>Income Proof & Trading Preferences</h3>
                    <p>To enable <strong>Futures & Options (F&O) trading</strong>, you need to upload valid <strong>income proof</strong>, such as:</p>
                    <ul>
                        <li><strong>Salary Slip</strong> (latest 3 months)</li>
                        <li><strong>Income Tax Return (ITR)</strong></li>
                        <li><strong>Bank Statement</strong> (showing sufficient balance)</li>
                    </ul>

                    <p>Select your <strong>investment preferences</strong> based on your trading goals:</p>
                    <ul>
                        <li>📌 <strong>Equity</strong> – Buy & sell company shares</li>
                        <li>📌 <strong>Derivatives (F&O)</strong> – Trade in futures & options</li>
                        <li>📌 <strong>Commodities</strong> – Invest in gold, silver, crude oil, etc.</li>
                        <li>📌 <strong>Currencies</strong> – Trade in forex markets</li>
                    </ul>

                    <p>🔒 <em>Your documents are securely processed, and once verified, you’ll be ready to trade!</em> 🚀</p>
                    <label htmlFor="file"><b>Upload Bank Statement/Bank Account Copy</b> </label><br />
                    <input type="file" id="file" />
                </div>




            </main>
            <footer style={{ backgroundColor: "white", position: "fixed", bottom: "0", boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.3)", height: "25vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "90px" }}>
                <p style={{ marginRight: "200px" }}> <input onClick={handleCheckbox} type="checkbox" /> I authorise Zerodha to fetch my KYC information from the CKC registry with my Bank Account <br />Learn more </p>
                <button onClick={handleBtn} style={{ color: bg == "white" ? "black" : "white", backgroundColor: bg, fontSize: "1.2rem", fontWeight: "600", padding: "15px 60px", border: "none", borderRadius: "5px" }}>Continue</button>
            </footer>
        </div>
    )
}
