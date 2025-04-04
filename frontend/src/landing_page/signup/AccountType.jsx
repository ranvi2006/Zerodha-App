import React from 'react'

export default function AccountType() {
  return (
    <div className="container mt-5">
      <div className="row" style={{flexWrap:"wrap",display:"flex"}}>
        <div className='p-3' style={{width:"27%", border:".4px solid gray",borderRadius:".3rem",margin:"2rem"}}>
              <div className="d-flex">
                <img style={{height:"40px",width:"40px",borderRadius:"50%",position:"relative" ,right:"36px",backgroundColor:"white"}} src="/media/images/download (4).svg" alt="" />
                <h5 style={{marginLeft:"-30px"}}>Individual Account</h5>
              </div>
              <p>Invest in equity, mutual funds and derivatives</p>
        </div>
        
        
        <div className='p-3' style={{width:"27%", border:".4px solid gray",borderRadius:".3rem",margin:"2rem"}}>
              <div className="d-flex">
                <img style={{height:"40px",width:"40px",borderRadius:"50%",position:"relative" ,right:"36px",backgroundColor:"white"}} src="/media/images/download (5).svg" alt="" />
                <h5 style={{marginLeft:"-30px"}}>HUF Account</h5>
              </div>
              <p>Make tax-efficient investments <br /> for your family</p>
        </div>

        
        <div className='p-3' style={{width:"27%", border:".4px solid gray",borderRadius:".3rem",margin:"2rem"}}>
              <div className="d-flex">
                <img style={{height:"40px",width:"40px",borderRadius:"50%",position:"relative" ,right:"36px",backgroundColor:"white"}} src="/media/images/download (6).svg" alt="" />
                <h5 style={{marginLeft:"-30px"}}>NRI Account
                </h5>
              </div>
              <p>Invest in equity, mutual funds, <br /> debentures, and more</p>
        </div>

        
        <div className='p-3' style={{width:"27%", border:".4px solid gray",borderRadius:".3rem",margin:"2rem"}}>
              <div className="d-flex">
                <img style={{height:"40px",width:"40px",borderRadius:"50%",position:"relative" ,right:"36px",backgroundColor:"white"}} src="/media/images/download (7).svg" alt="" />
                <h5 style={{marginLeft:"-30px"}}>Minor Account</h5>
              </div>
              <p>Teach your little ones about <br /> money & invest for their future <br /> with them</p>
        </div>

        
        <div className='p-3' style={{width:"27%", border:".4px solid gray",borderRadius:".3rem",margin:"2rem"}}>
              <div className="d-flex">
                <img style={{height:"40px",width:"40px",borderRadius:"50%",position:"relative" ,right:"36px",backgroundColor:"white"}} src="/media/images/download (8).svg" alt="" />
                <h5 style={{marginLeft:"-30px"}}>Corporate / LLP/ Partnership</h5>
              </div>
              <p>Manage your business surplus <br /> and investments easily</p>
        </div>

        
      </div>
    </div>
  )
}
