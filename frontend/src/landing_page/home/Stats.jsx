import React from 'react'
import { Link } from 'react-router-dom'

export default function Stats() {
  return (
    <div className="container mb-5" >
      <div className="row">
        <div className="col-5">
          <h2 className='mb-5 mt-4'>Trust with confidence</h2>
          <p className='fs-4' style={{fontWeight:"10px"}}>Customer-first always</p>
          <p className='mb-4'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India. </p>
          <p className='fs-4' style={{fontWeight:"10px"}} >No spam or gimmicks</p>
          <p className='mb-4'>No gimmicks, spam, "gamification" or annoying push notification. High quality apps that you use at your pace, the way you like.</p>
          <p className='fs-4' style={{fontWeight:"10px"}}>The Zerodha universe</p>
          <p className='mb-4'>Not just an app, but a whole ecosystem. Our investmenst in 30+ fintech startups offer you tailored service specific your needs.</p>
          <p className='fs-4' style={{fontWeight:"10px"}}>Do better with money</p>
          <p className='mb-4'>With initiatives ike Nudge and kill Switch, we don't just facilities transaction, bit actively help you do better with your money.</p>
        </div>
        <div className="col-7">
          <img className='w-100 h-85'  src="/media/images/ecosystem.png" alt="" />
          <Link  to="/product" style={{textDecoration:"none",color:"skyblue",fontWeight:"normal",marginLeft:'30%'}} href="">Explore our product <i class="fa-solid fa-arrow-right"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a style={{textDecoration:"none",color:"skyblue",fontWeight:"normal"}} href="">Try kite <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  )
}
