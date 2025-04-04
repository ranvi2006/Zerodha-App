import React from 'react'

export default function Brokrjze() {
  return (
    <div className="container text-center" style={{padding:"100px 0 80px 0px"}}>
      <div className="row">
        <div className="col-4">
          <img src="/media/images/pricing0.svg" alt="" style={{height:"250px",width:"250px"}} />
          <h2 className='mb-3'>Free equity delivery</h2>
          <p className='' style={{color:"gray" ,fontSize:"1rem"}}>All equity delivery investments (NSE, BSE), <br />are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4">
        <img src="/media/images/intradayTrades.svg" alt="" style={{height:"250px",width:"250px"}} />
        <h2 className='mb-3'>Intraday and F&O trades
        </h2>
          <p className='' style={{color:"gray" ,fontSize:"1rem"}}>
          Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on intraday trades across <br /> equity, currency, and commodity trades. Flat <br /> ₹20 on all option trades.


          </p>

        </div>
        <div className="col-4">
        <img src="/media/images/pricing0.svg" alt="" style={{height:"250px",width:"250px"}} />
        <h2 className='mb-3'>Free direct MF</h2>
          <p className='' style={{color:"gray" ,fontSize:"1rem"}}>
          All direct mutual fund investments are <br /> absolutely free — ₹ 0 commissions & DP <br /> charges.
          </p>
        </div>
      </div>

    </div>
  )
}
