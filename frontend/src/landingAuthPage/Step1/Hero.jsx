import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import axios from 'axios';
import validationRoutes from "../../function/Validation"

export default function Hero() {
    const user = useSelector((state) => state.user);
    const localUser = JSON.parse(localStorage.getItem("user"));
    // console.log("Local user -1-", localUser);
    // console.log("user -1-", user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [checkbox, setCheckBox] = useState(false);
    const [field, setField] = useState({ name:"", number: "",dob:"" ,check:false});
    const [err, setErr] = useState({
        name: { success: false, color: "gray", message: "" },
        number: { success: false, color: "gray", message: "" },
        dob: { success: false, color: "black", message: "" },
        check:{
            success:false,
            color:"black",
            message:""
        },global:{
            success:false,
            message:""
        }
    });
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
    // console.log("Local user -1-", localUser);
    // console.log("user -1-", user);
    useEffect(() => {
        fatchData();
    }, [])
    const [bg, setBg] = useState("#1a77eb");
    const handleField = (e) => {
        const { className, value } = e.target;
        if (className != "check") {
            setField((prev) => ({ ...prev, [className]: value }));
        }
        else{
            setField((prev) => ({ ...prev, [className]: !field.check }));
        }
        // console.log(field);
        
    };

    


    const handleBtn = async () => {
        setBg("white");
        setTimeout(() => setBg("#1a77eb"), 100);
        if(field.check&& field.name!=""&&field.number!=""&&field.dob!="")
        {
            try{
                const body={
                    phoneNo: localUser.phoneNo,
                    panCard:{
                        name:field.name,
                        number:field.number,
                        dob:field.dob
                    }
                }
                const response=await axios.post("http://localhost:3000/auth/sendDataAndUpdate",body);
    
                dispatch(updateUser(response.data.user));
                if(response.data.success==true)
                {
                    navigate("/auth/step2");
                }
    
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
        if(!checkbox)
        {
            setErr((res)=>{
                return {
                    ...res,
                    check:{
                        ...res.check,
                        success:true,
                        color:"red",
                        
                    }
                }
            });
        }
        else
        {
            setErr((res)=>{
                return {
                    ...res,
                    check:{
                        ...res.check,
                        success:true,
                        color:"black",
                        
                    }
                }
            }); 
        }
        
        

    };

    return (
        <div style={{ height: "85vh" }}>
    <main 
        style={{ 
            minHeight: "60vh", 
            padding: "20px", 
            marginTop: "15vh", 
            overflowY: "auto" // `scroll` can be replaced with `auto` for better UX
        }}
    >
        <h4>Step 1 of 5</h4>

        {/* Progress Bar */}
        <div style={{ height: "1vh", width: "200px", background: "#dae2eb", borderRadius: "5px" }}>
            <div style={{ height: "100%", width: "20%", backgroundColor: "#1081f7", borderRadius: "5px" }}></div>
        </div>

        <h2>Let's get started</h2>
        <h4>PAN DETAILS</h4>

        {/* Name Input */}
        <label>
            <h6>Name</h6>
            <input 
                value={field.name.toUpperCase()} 
                onChange={handleField} 
                className="name" 
                placeholder="" 
                type="text" 
                style={{ padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #ccc" }} 
            />
        </label>
        {err.name.success && <p style={{ color: "red", fontSize: "12px" }}>{err.name.message}</p>}

        <br />

        {/* PAN Number Input */}
        <label>
            <h6>Number</h6>
            <input 
                value={field.number.toUpperCase()} 
                onChange={handleField} 
                className="number" 
                placeholder="XXXXXXXXXXX" 
                type="text" 
                style={{ padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #ccc" }} 
            />
        </label>
        {err.number.success && <p style={{ color: "red", fontSize: "12px" }}>{err.number.message}</p>}

        <br />

        {/* Date of Birth Input */}
        <label>
            <h6>Date of Birth (as per PAN)</h6>
            <input 
                onChange={handleField} 
                className="dob" 
                type="date" 
                style={{ padding: "8px", width: "100%", borderRadius: "4px", border: "1px solid #ccc" }} 
            />
        </label>
        {err.dob.success && <p style={{ color: "red", fontSize: "12px" }}>{err.dob.message}</p>}
    </main>

    {/* Footer */}
    <footer style={{ padding: "10px", marginTop: "10px" }}>
        <p>
            <input className='check' onChange={handleField}  type="checkbox" /> I authorize Zerodha to fetch my KYC information from CKC registry.
        </p>
        <button 
            onClick={handleBtn} 
            style={{ 
                color: bg === "white" ? "black" : "white", 
                backgroundColor: bg, 
                padding: "10px 15px", 
                borderRadius: "5px", 
                border: "none", 
                cursor: "pointer" 
            }}
        >
            Continue
        </button>
    </footer>
</div>

    );
}
