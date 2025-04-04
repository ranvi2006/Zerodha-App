import React from 'react'

export default function All() {
  return (
    <div style={{padding:"20px 20px"}}>
        <h5 style={{fontWeight:"400"}}>Holdings</h5>
     <center>
        <img className='mb-3' style={{height:"100px"}} src="/media/kite/holdings (1).svg" alt="" />
        <p className='mb-3' style={{color:"gray",fontWeight:"400"}}>You don't have any stocks in your DEMAT yet. Get started <br /> with absolutely free equity investments.</p>
        <button className='mb-2' style={{all:'unset',padding:"8px 20px",backgroundColor:"blue",color:"white",borderRadius:"5px"}}>Get Started</button>
        <br />
        <a  className='mt-3' style={{textDecoration:"none"}} href=""> <img style={{height:"15px",marginBottom:"5px",marginRight:"5px"}} src="/media/kite/console.svg" alt="" />Analytics</a>
     </center>
    </div>
  )
}
