import React from 'react'

export default function Alerts() {
  return (
    <div style={{padding:"60px 20px"}}>
    <center>
       <img className='mb-3' style={{height:"100px"}} src="/media/kite/alert.svg" alt="" />
       <p className='mb-3' style={{color:"gray",fontWeight:"400",padding:"0 10vw"}}>You haven't created any alerts.</p>
       <button className='mb-2' style={{all:'unset',padding:"8px 20px",backgroundColor:"blue",color:"white",borderRadius:"5px"}}>Create new Alerts</button>
     
       
    </center>
   </div>
  )
}
