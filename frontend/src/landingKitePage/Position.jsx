import React from 'react'

export default function Position() {
  return (
    <div style={{height:"100%",padding:"50px 0"}}>
       
                    <center>
                        <img style={{ height: "100px" }} src="/media/kite/positions.svg" alt="" />
                        <p>You don't have any positions yet</p>
                        <button className='mb-3' style={{ all: "unset", padding: "5px 20px", borderRadius: "5px", backgroundColor: "blue", color: "white" }}>Get Started</button>
                        <br />
                        <a   className='mt-3' style={{textDecoration:"none",fontSize:"1rem"}} href=""> <img style={{height:"15px",marginBottom:"5px",marginRight:"5px"}} src="/media/kite/console.svg" alt="" />Analytics</a>
                    </center>

             
    </div>
  )
}
