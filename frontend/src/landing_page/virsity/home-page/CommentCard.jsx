import React, { useState } from 'react'

export default function CommentCard({commentData}) {
    
  return (
    <div className="CardComment" style={{height:"100%",width:"100%"}}>
        <div className='' style={{display:"flex",alignItems:"baseline"}}>
            <div className="first" style={{width:"85%",display:"flex",alignItems:""}}>
                <img className='me-2' style={{borderRadius:"50%",height:"40px",width:"40px"}} src={commentData.authorImage} alt="" />
                <div className="div " style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                    <h6 style={{fontWeight:"700"}}>{commentData.author} <i>on</i></h6>
                    <p style={{color:"gray"}}>The Debt funds (Part 2)</p>
                </div>

            </div>
            <div className="first" style={{width:"15%",textAlign:'end'}}>
            <i style={{fontSize:"1.5rem",color:"blue"}} class="fa-solid fa-message"></i>
            <p style={{fontSize:".7rem",fontWeight:"500",position:"relative",bottom:"25px",right:"3px",color:"white"}}>{commentData.replies}</p>
            </div>
        </div>
        <p style={{color:"gray"}}>{commentData.comment}</p>
        <p style={{color:"gray",textAlign:"end"}}>{commentData.date}</p>


     <hr />
    </div>
  )
}
