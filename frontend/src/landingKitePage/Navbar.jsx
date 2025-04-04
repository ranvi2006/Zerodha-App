import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom'


export default function Navbar() {
    const user=useSelector((state)=>state.user);
    const localUser=JSON.parse(localStorage.getItem("user"));
    const login=JSON.parse(localStorage.getItem("login"));
    console.log(login);
    useEffect(()=>{
        if(!localUser.phoneNo)
        {
            localStorage.setItem("login",JSON.stringify({
                isLogin:false
            }));
        }
    },[]);
    useEffect(()=>{
        if(!login.isLogin )
        {
            navigate("/signup");
        }
    },[]);
   
    const navigate=useNavigate();
    useEffect(()=>{
        if(login.isLogin==false)
            {
                
                navigate("/signup");
                // console.log("raju");
            }
            
    },[login]);
    // localStorage.setItem("login", JSON.stringify({ isLogin: false }));

    const [link,setLink]=useState({a:false,
        b:false,
        c:false,
        d:false,
        e:false,
        f:false,
      });
    
      function handleClick(e)
      {
       const ob={a:false,
        b:false,
        c:false,
        d:false,
        e:false,
        f:false,
      }
      ob[e.target.className]=true;
      setLink(ob);
      }

      function logout()
      {
        localStorage.setItem("login",JSON.stringify({isLogin:false}));
      }
      const style={textDecoration:"none",fontWeight:"400",fontSize:".8rem",color:"black"};
      const style1={textDecoration:"none",fontWeight:"400",fontSize:".8rem",color:"red",borderBottom:"2px soild red"};
    return (
        <div className='' style={{ height: "7vh", backgroundColor: "white", width: "100%", padding: "0px", boxShadow: "2px 2px   10px gray" ,overflow:"hidden",position:"fixed",top:"0"}}>
            <div className="row " style={{ height: "100%" }}>
                <div className="col-4 d-flex align-items-center justify-content-center" style={{ border: ".1px solid #8080805c " ,height:"100"}}>
                    <h6 className='' style={{ fontSize: ".80rem", fontWeight: "700", color: "#000000d4" }}> NIFTY 50 <span style={{ color: "green" }}>22552.50</span> <span style={{ fontSize: ".65rem", color: "gray" }}>7.80 (0.03%)</span>  SENSEX <span style={{ color: "#e05752" }}>74332.58</span>  <span style={{ fontSize: ".65rem", color: "gray" }}> -7.51 (-0.01%)</span></h6>
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-3 " style={{ height: "7vh", display: "flex", alignItems: "center" }}>
                            <img style={{ height: "2.5vh" }} src="/media/kite/kite-logo.svg" alt="" />
                        </div>
                        <div className="col-6" style={{height:"7vh",display:"flex",alignItems:"center",justifyContent:"space-evenly"}}>
                            <Link className='a' onClick={handleClick} to="/kite/dashboard" style={link.a==false?style:style1} >Dashboard</Link>
                            <Link className='b' onClick={handleClick} to="/kite/orders" style={link.b==false?style:style1}>Orders</Link>
                            <Link className='c' onClick={handleClick} to="/kite/holdings" style={link.c==false?style:style1}>Holdings</Link>
                            <Link className='d' onClick={handleClick} to="/kite/position" style={link.d==false?style:style1}>Position</Link>
                            <Link className='e' onClick={handleClick} to="/kite/bids" style={link.e==false?style:style1}>Bids</Link>
                            <Link className='f' onClick={handleClick} to="/kite/funds" style={link.f==false?style:style1}>Funds</Link>
                        </div>
                        <div className="col-3 d-flex align-items-baseline justify-content-evenly pt-2" style={{border: ".1px solid #8080805c " }}>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p>{user?.userId}</p>
                        <Link onClick={logout}><i class="fa-solid fa-right-from-bracket"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
