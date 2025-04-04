import React from 'react'
import { useSelector } from 'react-redux';

export default function Navbar() {
  const localUser=JSON.parse(localStorage.getItem("user"));
  const user=useSelector((state)=>state.user);
  return (
    <div  style={{backgroundColor:"white",width:"100%",height:"15vh",border:"1px solid gray",borderRadius:"10px",position:"fixed",top:"0",zIndex:"2"}}>
     <div className="row" style={{height:"100%"}}>
     <div className="col-6" style={{display:"flex",alignItems:"center",height:"100%",paddingLeft:"100px"}}>
        <img style={{width:"25%"}} src="/media/auth/download.svg" alt="" />
       
      </div>
      <div className="col-6" style={{display:"flex",alignItems:"center",height:"100%",paddingLeft:"34vw"}}>
        {localUser.name?localUser.name:null ||user.name}<img style={{marginLeft:"10px",width:"20%"}} src="/media/auth/download (1).svg" alt="" />
      </div>
     </div>
      
    </div>
  )
}
