import React from 'react'

export default function Module() {
  return (
    <div className="container mt-5 pt-5 pb-5 mb-5">
        <div className="row">
            <div className="col-6 text-end">
                <img style={{width:"75%"}} src="/media/varsity/modules.svg" alt="" />
            </div>
            <div className="col-6 ps-4">
            <h1 style={{fontSize:"4rem",fontWeight:"700",marginBottom:"1.5rem"}}>Modules</h1>
            <p style={{color:"gray"}}>Explore all the open-access Varsity modules that cover the entire spectrum of financial literacy and capital markets; everything from savings and taxation to option strategies and technical analysis.</p>
            <button className='btn btn-primary' style={{height:"fit-content",width:"fit-content",borderRadius:"1.5rem",padding:"10px 25px"}}>Learn more</button>
            </div>
        </div>
    </div>
  )
}
