import React from 'react'
import { Link } from 'react-router-dom'

export default function Eduction() {
  return (
   <div className="container">
    <div className="row">
      <div className="col-6"  >
        <img className='p-1' style={{height:"80%",width:"80%"}} src="/media/images/education.svg" alt="" />
        </div>
      <div className="col-6">
        <h2 className='mb-5'>Free and open market education</h2>
        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
        <Link to="/varsity" style={{textDecoration:"none",color:"skyblue",fontWeight:"normal"}} href="">Varsity <i class="fa-solid fa-arrow-right"></i></Link>


        <p className='mt-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
        <a className='' style={{textDecoration:"none",color:"skyblue",fontWeight:"normal"}} href="">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>
   </div>
  )
}
