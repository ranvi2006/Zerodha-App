import React from 'react'

export default function Hero() {
  return (
  <div className="Hero d-flex " style={{padding:"60px 20px"}}>
    <div className="section1"style={{width:"60%",paddingRight:"50px"}} >
        <h1 style={{fontWeight:"700",fontSize:"4rem",lineHeight:"4rem",marginBottom:"24px"}}>Free and open</h1>
        <p className='mb-3' style={{fontSize:"2rem",fontWeight:"500"}}>stock market and financial education</p>
        <p className='fs-5' style={{color:"gray"}}>Varsity is an extensive and in-depth collection of stock market and financial lessons created by Karthik Rangappa at <a style={{textDecoration:"none"}} href="">Zerodha</a>. It is free and openly accessible to everyone and is one of the largest financial education resources on the web. No signup, no pay-wall, no ads.</p>

    </div>
    <div className="section2" style={{width:"40%"}}>
        <img style={{height:"100%",width:"100%"}} src="/media/varsity/landing.png" alt="" />

    </div>
  </div>
  )
}
