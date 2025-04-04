import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateUser } from '../../features/user/userSlice';
import { useDispatch } from 'react-redux';


export default function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [err, setErr] = useState({
        phone: {
            success: false,
            message: ""
        },
        adhar: {
            success: false,
            message: ""
        }
    });
    const [btnColor, setBtnColor] = useState("green");

    const [phone, setPhone] = useState("");
    function handleForm(e) {
        e.preventDefault();
        setPhone(e.target.value);

    }


    async function handlebutton() {
        setBtnColor("white");
        setTimeout(() => {
            setBtnColor("green");
        }, 100);

        if (phone != "" && phone.length == 10) {
            const url = "http://localhost:3000/auth/sendOtpAndAddNUmber";
            const body = {
                phoneNo: phone
            };

            try {
                const response = await axios.post(url, body);
                console.log(response.data.data); // Correct way to access the response data
                if (response.data.success) {
                    dispatch(updateUser(response.data.data));
                    localStorage.setItem("user", JSON.stringify(body));
                    localStorage.setItem("login", JSON.stringify({isLogin:true}));
                    navigate("/auth/comfirmOtp");
                }
            } catch (error) {
                console.error("Error sending OTP:", error.response ? error.response.data : error.message);
            }
            // navigate("/auth/comfirmOtp");
        }
        else if (phone == "") {
            setErr((res) => {
                return {
                    ...res,
                    phone: {
                        ...res.phone,
                        success: true,
                        message: "Phone Number Required"
                    }
                }
            });
        }
        else if (phone.length != 10) {
            setErr((res) => {
                return {
                    ...res,
                    phone: {
                        ...res.phone,
                        success: true,
                        message: "Phone no must be 10 Digit"
                    }
                }
            });
        }

    }

    return (
        <div className="container mb-5 mt-5">
            <div className="row">
                <div className="col-6" style={{ padding: "0 1rem" }}>
                    <img className='' style={{ width: "80%", marginLeft: "4rem" }} src="media/images/landing-DQ76ex-B.svg" alt="" />
                </div>
                <div className="col-6 p-4">
                    <h3>Signup now</h3>
                    <h5>Or track your existing application</h5>
                    <div className="row mt-5 " >
                        <div className="col-7">
                            <div className="row">
                                <div style={{ border: ".5px solid black" }} className="col-4 p-2">
                                    <img style={{ border: "none" }} src="/media/images/indiaImg.svg" alt="" /> +91
                                </div>
                                <div style={{ border: ".5px solid black" }} className="col-8 p-2">
                                    <input onChange={handleForm} style={{ all: "unset" }} type="number" placeholder='Enter your mobile number' />
                                </div>
                                {err.phone.success && err.phone.message != "" ?
                                    <p style={{
                                        color: "red",
                                        fontSize: "14px",
                                        marginTop: "5px",
                                        fontWeight: "bold"
                                    }}>
                                        {err.phone.message}
                                    </p>
                                    : null}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4" >
                        <div className="">
                            <button onClick={handlebutton} className='btn btn-primary' style={{ padding: "15px 80px", backgroundColor: btnColor }}>Get OTP</button>
                        </div>
                    </div>

                    <p className='mt-5'>By proceeding, you agree to the Zerodha <a style={{ textDecoration: "none" }} href="">terms</a> & <a style={{ textDecoration: "none" }} href="">privacy policy</a></p>
                </div>
            </div>
        </div>
    )
}
