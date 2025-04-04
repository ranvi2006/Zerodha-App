import React from 'react'

export default function Hero() {
  return (
  <div className="container-fluid" style={{padding:"60px 20px 40px 20px"}}>
    <div className="row ">
        <div className="col-4">
            <img style={{paddingLeft:"110px"}}  src="/media/varsity/certified.svg" alt="" />
        </div>
        <div className="col-8" style={{padding:" 0px 100px 0 60px"}}>
            <h1 style={{fontSize:"4rem",fontWeight:"700",marginBottom:"30px"}}>Varsity Certified</h1>
            <p className='mb-4' style={{color:"gray"}}>Varsity Certified is an online certification program designed to test your market knowledge and give you the confidence to start your career in capital markets. <br /><br />
            Easy registration by choosing an exam schedule convenient for you. A nominal fee of ₹250 + 18% GST is charged to cover the cost of organising the test.</p>

            <button style={{color:"white",backgroundColor:"#1569C9",padding:"8px 30px",borderRadius:"30px"}}>Register here</button>
        </div>
    </div>
    
  </div>
  )
}
