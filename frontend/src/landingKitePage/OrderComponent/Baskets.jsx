import React from 'react'

export default function Baskets() {
  return (
    <div style={{padding:"60px 20px"}}>
     <center>
        <img className='mb-3' style={{height:"100px"}} src="/media/kite/basket.svg" alt="" />
        <p className='mb-3' style={{color:"gray",fontWeight:"400"}}>You haven't created any baskets.</p>
        <button className='mb-2' style={{all:'unset',padding:"8px 20px",backgroundColor:"blue",color:"white",borderRadius:"5px"}}>New Basket</button>
       
     </center>
    </div>
  )
}
