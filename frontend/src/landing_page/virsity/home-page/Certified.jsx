import React from 'react'

export default function Certified() {
  return (
    <div className="container " >
        <div className="row p-5">
            <div className="col-4 text-end">
                <img src="/media/varsity/ico-certified-big.svg" alt="" />
            </div>
            <div className="col-8" style={{paddingLeft:"100px",marginTop:"20px",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <h1 style={{fontSize:"4rem",fontWeight:"700",marginBottom:"1.5rem"}}>Varsity Certified</h1>
                <p>An online certification program designed to test your market knowledge and give you the confidence to start your career in capital markets.</p>
                <button className='btn btn-primary' style={{height:"fit-content",width:"fit-content",borderRadius:"1.5rem",padding:"10px 25px"}}>Learn more</button>
            </div>
        </div>
    </div>
  )
}
