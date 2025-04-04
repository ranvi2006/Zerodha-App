import React from 'react'

export default function BenifitOpen() {
  return (
    <div className="container mb-5 mt-5">
      <div className="row ">
        <div className="col-7 " >
          <div  className="container" style={{paddingLeft:"10vw"}}> <img style={{ width: "80%" ,}} src="media/images/landing-benefits-CWI4Vhs2.svg" alt="" />
            <h2 className='p-5'>Benefits of opening a <br /> Zerodha demat account</h2>
          </div>

        </div>
        <div className="col-5 " style={{borderLeft:".4px solid gray",paddingLeft:"40px"}}>
          

          <h4 className='mt-4'>Unbeatable pricing</h4>
          <p>Zero charges for equity & mutual fund <br /> investments. Flat ₹20 fees for intraday <br /> and F&O trades.</p>
          <h4 className='mt-4'>Best investing experience</h4>
          <p>Simple and intuitive trading platform with <br /> an easy-to-understand user interface.</p>
          <h4 className='mt-4'>No spam or gimmicks</h4>
          <p>Committed to transparency — no <br /> gimmicks, spam, "gamification", or <br /> intrusive push notifications.</p>
          <h4 className='mt-4'>The Zerodha universe</h4>
          <p>More than just an app — gain free access <br /> to the entire ecosystem of our partner <br /> products.</p>
        </div>
      </div>
    </div>
  )
}
