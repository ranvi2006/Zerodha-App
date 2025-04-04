import React, { useState } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

export default function Navbar() {
  const [menu,setMenu]=useState(false);
  function handleMenu()
  {
    setMenu(!menu);
  }

   async function verifyNumber()
  {
    setMenu(false);
  }
  return (
 <div className="" style={{backgroundColor:"white",position:"sticky",top:"0",borderBottom:"2px solid rgba(235, 232, 232, 0.8)",zIndex:"2",padding:"0 60px"}}>
  <div className="row">
    <div className="col-6 d-flex justify-content-between align-items-center">
   <Link to="/home"> <img style={{width:"30%"}} className="" src="/media/images/logo.svg" alt="" /></Link>
    </div>
    <div className="col-6">
      <ul className='d-flex justify-content-between align-items-baseline p-3' style={{listStyle:"none",fontSize:".9rem"}}>
        <li><Link style={{textDecoration:"none",color:"black"}} to="/signup">Signup</Link></li>
        <li><Link style={{textDecoration:"none",color:"black"}} to="/about">About</Link></li>
        <li><Link style={{textDecoration:"none",color:"black"}} to="/product">Products</Link></li>
        <li><Link style={{textDecoration:"none",color:"black"}} to="/price">Pricing</Link></li>
        <li><Link style={{textDecoration:"none",color:"black"}} to="/support">support</Link></li>
        <li><button onClick={handleMenu} style={{all:"unset" ,cursor:"pointer"}}><i class="fa-solid fa-bars"></i></button></li>
      </ul>
    </div>
  </div>
  {menu?<div className="menu-box " style={{height:"60vh",width:"60vw",position:"fixed",top:"12vh",right:"5vw",boxShadow:"2px 2px 8px gray",backgroundColor:"white"}}>
   <div className="div d-flex justify-content-around align-items-center" style={{height:"40%"}}>
    <Link onClick={verifyNumber} to="/signup" style={{display:"flex",textDecoration:"none",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}}>
      <img src="/media/images/kite-logo.svg" alt="" />
      <h6 style={{color:"black"}}>Kite</h6>
      <p style={{fontSize:".7rem",fontWeight:"500",color:"gray"}} >Trading platform</p>
    </Link>
    <Link style={{display:"flex",textDecoration:"none",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}}>
      <img src="/media/images/console.svg" alt="" />
      <h6 style={{color:"black"}}>Console</h6>
      <p style={{fontSize:".7rem",fontWeight:"500",color:"gray"}} >Trading platform</p>
    </Link>
    <Link style={{display:"flex",textDecoration:"none",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}}>
      <img src="/media/images/kite-connect.svg" alt="" />
      <h6 style={{color:"black"}}>Kite Connect</h6>
      <p style={{fontSize:".7rem",fontWeight:"500",color:"gray"}} >Trading platform</p>
    </Link>
    <Link style={{display:"flex",textDecoration:"none",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"20px"}}>
      <img src="/media/images/coin.svg" alt="" />
      <h6 style={{color:"black"}}>Coin</h6>
      <p style={{fontSize:".7rem",fontWeight:"500",color:"gray"}} >Trading platform</p>
    </Link>
   </div>
   <div className="d-flex" style={{height:"60%",backgroundColor:"#FAFAFB"}}>
             <div style={{height:"100%",width:"30%",padding:"40px 20px"}}>
              <h6>Utilities</h6>
               <Link style={{textDecoration:"none",fontSize:".9rem",color:"gray",marginBottom:"7px"}}>Brokerage calculator</Link>
               <br />
               <Link style={{textDecoration:"none",fontSize:".9rem",color:"gray",marginBottom:"7px"}}>Margin calculator</Link>
               <br />
               <Link style={{textDecoration:"none",fontSize:".9rem",color:"gray",marginBottom:"7px"}}>Holiday calendar</Link>
               <br />
               <Link style={{textDecoration:"none",fontSize:".9rem",color:"gray",marginBottom:"7px"}}>Markets</Link>
             </div>
             <div style={{height:"100%",width:"30%",padding:"40px 20px"}}>
             <h6>Updates</h6>
               <Link style={{textDecoration:"none",fontSize:".9rem",color:"gray",marginBottom:"7px"}}>Z-Connect blog</Link>
               <br />
               <Link style={{textDecoration:"none",fontSize:".9rem",color:"gray",marginBottom:"7px"}}>Pulse News</Link>
               <br />
               <Link style={{textDecoration:"none",fontSize:".9rem",color:"gray",marginBottom:"7px"}}>Circulars / Bulletin</Link>
               <br />
               <Link style={{textDecoration:"none",fontSize:".9rem",color:"gray",marginBottom:"7px"}}>IPOs</Link>
             </div>
             <div style={{height:"100%",width:"40%",padding:"40px 20px"}}>
             <h6>Education</h6>
             <div style={{display:"flex",alignItems:"baseline"}}>
             <div>
              <img className='m-3' src="media/images/varsity (1).png" alt="" /><br />
              <Link style={{textDecoration:"none",fontSize:".9rem",color:"gray",marginBottom:"7px"}}>Varsity</Link>
             
              </div>
             <div><img className='' src="media/images/tqna.png" alt="" /> <br />
             <Link style={{textDecoration:"none",fontSize:".9rem",color:"gray",marginBottom:"7px"}}>Trading Q&A</Link></div>
             </div>
             </div>

   </div>
  </div>:null}
 </div>
  )
}
