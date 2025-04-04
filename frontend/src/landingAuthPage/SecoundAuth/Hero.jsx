import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import axios from 'axios';
import validationRoutes from "../../function/Validation"

export default function Hero() {
    const user = useSelector((state) => state.user);
    const localUser = JSON.parse(localStorage.getItem("user"));
    // console.log("Local user -0-", localUser);
    // console.log("user -0-", user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [bg, setBg] = useState("#1a77eb");
    const [field, setField] = useState({ name: "", email: "" });
    const [err, setErr] = useState({
        name: { success: null, color: "gray", message: "" },
        email: { success: null, color: "gray", message: "" },
        global:{success:false,message:null}
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
    // console.log("Local user -0-", localUser);
    // console.log("user -0-", user);
    

     const handleField = async(e) => {
        setField({ ...field, [e.target.id]: e.target.value });
    };

    const handleBtn = async () => {
        setBg("white");
        setTimeout(() => setBg("#1a77eb"), 100);

        if(field.name!="" &&field.email!="")
        {
            try{
                const respone=await axios.post("http://localhost:3000/auth/sendDataAndUpdate",{
                    phoneNo:localUser.phoneNo,
                    name:field.name,
                    email:field.email
                });
                dispatch(updateUser(respone.data.user));
                navigate("/auth/step1");
            }catch(err)
            {
                setErr((res)=>{
                    return {
                        ...res,
                        global:{
                            ...res.global,
                            success:true,
                            message:err.message ||err
                        }
                    }
                });
            }
        }
    };

    return (
        <div style={{ height: "85vh" }}>
            <main style={{ minHeight: "60vh", padding: "20px", paddingTop: "100px" }}>
                <h2>What's your e-mail?</h2>
                <label>
                    Name
                    <input type="text" id="name" value={field.name} onChange={handleField} />
                </label>
                {err.name.success && <p style={{ color: err.name.color }}>{err.name.message}</p>}

                <label>
                    Email
                    <input type="email" id="email" value={field.email} onChange={handleField} />
                </label>
                {err.email.success && <p style={{ color: err.email.color }}>{err.email.message}</p>}

                <button onClick={handleBtn} style={{ backgroundColor: bg, color: "white" }}>Continue</button>
            </main>
        </div>
    );
}
