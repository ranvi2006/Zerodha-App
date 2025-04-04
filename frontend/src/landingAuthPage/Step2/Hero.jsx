import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../features/user/userSlice';
import axios from 'axios';
import validationRoutes from "../../function/Validation"

export default function Hero() {
    const [checkbox,setCheckBox]=useState(false);
    const user = useSelector((state) => state.user);
    const localUser = JSON.parse(localStorage.getItem("user"));
    const [err,setErr]=useState({
        holderName:{
            success:false,
            message:""
        },
        accountNumber:{
            success:false,
            message:""
        },
        idfc:{
            success:false,
            message:""
        },
        global:{
            success:false,
            message:""
        },
    });
    
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Loading state for button
    
    const [field, setField] = useState({
        holderName: "",
        idfc: "",
        accountNumber: "",
    });

    // Fetch user data
    async function fatchData() {
        if (!localUser.phoneNo) {
            navigate("/signup");
        }
        else {
            try {
                const url = "http://localhost:3000/auth/getUser";
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
    // console.log("Local user -2-", localUser);
    // console.log("user -2-", user);

    // Handle input field change
    function handleField(e) {
        const { value, className } = e.target;
        setField((prevState) => ({
            ...prevState,
            [className]: value,
        }));
    }

    // Handle checkbox change
    function handleCheckbox() {
        setCheckBox(!checkbox);
    }

    // Handle submit button click
    async function handleBtn() {
        if( field.holderName!=""&&field.accountNumber!=""&&field.idfc!=""&&checkbox)
            {
                try{
                    const body={
                        phoneNo: localUser.phoneNo,
                        bank:{
                            holderName:field.holderName,
                            accountNumber:field.accountNumber,
                            idfc:field.idfc
                        }
                    }
                    const response=await axios.post("http://localhost:3000/auth/sendDataAndUpdate",body);
        
                    dispatch(updateUser(response.data.user));
                    
                    navigate("/auth/step3");
                  
        
                } catch(err)
                {
                    setErr((res)=>{
                        return  {
                            ...res,
                            global:{
                                ...res.global,
                                success:true,
                                message:"Bad Api Call"
                            }
                        }
                    });
                }
            }
        
    }

    return (
        <div style={{ height: "85vh" }}>
            <main style={{ minHeight: "60vh", padding: "0px 20px", overflow: "scroll", marginTop: "15vh", overflowX: "hidden", paddingBottom: "50vh" }}>
                <div className="row" style={{ paddingLeft: "6vw" }}>
                    <div className="col-12 ps-5">
                        <h4 className="mt-5 mb-3">Step 2 of 5</h4>
                        <div style={{ height: "1vh", background: "#dae2eb", width: "200px", borderRadius: "5px" }}>
                            <div style={{ height: "100%", width: "40%", backgroundColor: "#1081f7", opacity: "1", borderRadius: "5px" }}></div>
                        </div>
                        <h2 className="mt-5" style={{ opacity: "1", fontWeight: "400", marginBottom: "80px" }}>Let's get started</h2>

                        <label className="" htmlFor="name" style={{ height: "8vh", width: "30%", border: "1px solid gray", borderRadius: "3px", position: "relative", bottom: "20px", marginTop: "50px" }}>
                            <h6 style={{ backgroundColor: "white", opacity: "0.8", position: "relative", top: "-14px", left: "15px", display: "inline-block" }}>Holder Name</h6>
                            <br />
                            <input
                                onChange={handleField}
                                className="holderName"
                                placeholder="RAXXXXX"
                                id="name"
                                style={{ width: "95%", height: "90%", marginLeft: "2%", all: "unset", position: "relative", bottom: "20px", left: "25px" }}
                                type="text"
                            />
                        </label>
                        <br />
                        <label className="" htmlFor="idfc" style={{ height: "8vh", width: "30%", border: "1px solid gray", borderRadius: "3px", position: "relative", bottom: "20px", marginTop: "50px" }}>
                            <h6 style={{ backgroundColor: "white", opacity: "0.8", position: "relative", top: "-14px", left: "15px", display: "inline-block" }}>IDFC Code</h6>
                            <br />
                            <input
                                onChange={handleField}
                                className="idfc"
                                placeholder="BOIXXXX"
                                id="idfc"
                                style={{ width: "95%", height: "90%", marginLeft: "2%", all: "unset", position: "relative", bottom: "20px", left: "25px" }}
                                type="text"
                            />
                        </label>
                        <br />
                        <label className="" htmlFor="accountNumber" style={{ height: "8vh", width: "30%", border: "1px solid gray", borderRadius: "3px", position: "relative", bottom: "20px", marginTop: "50px" }}>
                            <h6 style={{ backgroundColor: "white", opacity: "0.8", position: "relative", top: "-14px", left: "15px", display: "inline-block" }}>Account Number</h6>
                            <br />
                            <input
                                onChange={handleField}
                                className="accountNumber"
                                placeholder="XXXXXXXXXXXXX"
                                id="accountNumber"
                                style={{ width: "95%", height: "90%", marginLeft: "2%", all: "unset", position: "relative", bottom: "20px", left: "25px" }}
                                type="number"
                            />
                        </label>

                        
                        
                    </div>
                </div>
            </main>
            <footer style={{ backgroundColor: "white", position: "fixed", bottom: "0", boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.3)", height: "25vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "90px" }}>
                <p style={{ marginRight: "200px" }}>
                    <input onClick={handleCheckbox} type="checkbox" /> I authorise Zerodha to fetch my KYC information from the CKC registry with my Bank Account <br />Learn more
                </p>
                <button
                    onClick={handleBtn}
                    style={{
                        color: "white",
                        backgroundColor: "#1a77eb",
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        padding: "15px 60px",
                        border: "none",
                        borderRadius: "5px",
                    }}
                    
                >Continew
                </button>
            </footer>
        </div>
    );
}
