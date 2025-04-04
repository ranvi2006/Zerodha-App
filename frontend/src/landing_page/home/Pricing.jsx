import React from 'react'
import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
  <div className="container mt-5 mb-5">
    <div className="row">
      <div className="col-5">
        <h1 className='mb-4'>Unbeatable pricing</h1>
        <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges. </p>
        <Link to="/price" style={{textDecoration:"none",color:"skyblue",fontWeight:"normal"}} href="">See pricing  <i class="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className="col-2 d-flex align-items-center p-0">
        <img style={{height:"100px"}} src="/media/images/pricingEquity.svg" alt="" />
        <p style={{position:"relative",right:'25px',fontSize:"0.7rem"}}>Free account
        opening</p>
      </div>
      <div className="col-3 d-flex align-items-center">
      <img style={{height:"100px"}} src="/media/images/pricingEquity.svg" alt="" />
      <p style={{position:"relative",right:'25px',fontSize:"0.7rem"}}>Free equity delivery
      and direct mutual funds</p>
      </div>
      <div className="col-2 d-flex align-items-center p-0">
      <img style={{height:"100px"}} src="/media/images/intradayTrades.svg" alt="" />
      <p style={{position:"relative",right:'25px',fontSize:"0.7rem"}}>Intraday and F&O</p>

      </div>
    </div>
  </div>
  )
}
