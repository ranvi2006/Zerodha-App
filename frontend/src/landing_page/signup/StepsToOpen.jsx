import React from 'react'

export default function StepsToOpen() {
  return (
    <div className='container mt-5 mb-5' style={{backgroundColor:"#FBFBFB",paddingBottom:"10vh",paddingTop:"10vh"}}>
      <h2 className='' style={{textAlign:"center"}}>Steps to open a demat account with Zerodha</h2>
      <div className="row mt-5">
        <div className="col-6" style={{paddingLeft:"10%"}}>
          <img src="media/images/landing-open-account-KSru97mM.svg" alt="" />
        </div>
        <div className="col-6 " style={{paddingLeft:"20px"}}>
          <div style={{display:"flex",alignItems:"center"}}>
            <div className='d-flex justify-content-center align-items-center' style={{border:".4px solid black",borderRadius:"50%",height:"30px",width:"30px",marginRight:"20px"}}>1</div>
            <p className='mt-3 fs-5'>Enter the requested details</p>
          </div>
          <div style={{display:"flex",alignItems:"center"}}>
            <div className='d-flex justify-content-center align-items-center' style={{border:".4px solid black",borderRadius:"50%",height:"30px",width:"30px",marginRight:"20px"}}>2</div>
            <p className='mt-3 fs-5'>Complete e-sign & verification</p>
          </div>
          <div style={{display:"flex",alignItems:"center"}}>
            <div className='d-flex justify-content-center align-items-center' style={{border:".4px solid black",borderRadius:"50%",height:"30px",width:"30px",marginRight:"20px"}}>3</div>
            <p className='mt-3 fs-5'>Start investing!</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
