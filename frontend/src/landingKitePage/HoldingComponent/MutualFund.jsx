import React from 'react'

export default function MutualFund() {
  return (
   <>
    <h5 className='mt-3' style={{fontWeight:"400"}}>Holdings</h5>
    <div style={{padding:"80px 20px"}}>
    
 <center>
    <img className='mb-3' style={{height:"35px"}} src="/media/kite/coin-holdings.png" alt="" />
    <p className='mb-3' style={{color:"gray",fontWeight:"400"}}>Start investing in commission-free direct mutual funds.</p>
    <button className='mb-2' style={{all:'unset',padding:"8px 20px",backgroundColor:"blue",color:"white",borderRadius:"5px"}}>Get Started</button>
    <br />
    <a  className='mt-3' style={{textDecoration:"none"}} href=""> <img style={{height:"15px",marginBottom:"5px",marginRight:"5px"}} src="/media/kite/console.svg" alt="" />Analytics</a>
 </center>
</div>
   </>
  )
}
