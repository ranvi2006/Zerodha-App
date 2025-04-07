import React, { useEffect } from 'react'
import Bid from './BidsComp/Bid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addBid,deleteBid } from '../features/bid/bidSlice';
import axios from 'axios';


export default function Bids() {
  const dispatch=useDispatch();
  
  const bids=useSelector((state)=>state.bid);



  

  async function fatchBid() {
    const response=await axios.post(`${import.meta.env.VITE_API_URL}/auth/getBid`,{});
    dispatch(addBid(response.data.bids));
    
  }
  useEffect(()=>{
    fatchBid()
  });

  
  
  return (
    <div style={{ height: "100%",width:"100%"}}>
    
    {bids.length!=0?<a className='' style={{all:"unset", width:"100%",height: "10vh", borderTop: ".1px  solid #e7e8e9", borderBottom: ".1px solid #e7e8e9",display:"flex" }}>
        <div className="col-4 ps-4" style={{ height: "100", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h6 style={{ color: "gray", fontWeight: "400", fontSize: ".7rem" }}>Instrument</h6>
        </div>
        <div className="col-2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          
          <p style={{ color: "gray", fontWeight: "400", fontSize: ".7rem" ,alignItems: "center", marginLeft: "10px" }}>Date</p>
        </div>
        <div className="col-2" style={{ height: "100%", display: "flex", justifyContent: "end", alignItems: "center", borderRight: "1px solid #e7e8e9",paddingRight:"10px" }}>
        <p style={{ color: "gray", fontWeight: "400", fontSize: ".7rem" ,alignItems: "center", marginLeft: "10px" }}>{"Price (₹)"}</p>
        </div>
        <div className="col-4" style={{ paddingLeft: "20px", height: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center",paddingRight:"10px" }}>
          <div style={{ height:"100%" }}>
            <div className="" style={{ height: "100%", display: "flex", flexDirection: "column",alignItems:"center",justifyContent:"center" }}>
            <p style={{ color: "gray", fontWeight: "400", fontSize: ".7rem" ,alignItems: "center", marginLeft: "10px" }}>{"Min. amount (₹)"}</p>
            </div>
          </div>
        </div>
      </a>:<div style={{height:"100%",width:"100%"}}>
        <center style={{color:"reds"}}>No Bids Available At this Time</center>
        </div>}

     {/* active-- */}
      {bids.map((res,i)=>{
       if(res.state=="active")
       {
        return <Bid bid={res}/>
       }else{
        return null;
       }
      })}

      {/* upcoming----- */}

      {bids.map((res,i)=>{
       if(res.state=="upcoming")
       {
        return <Bid bid={res}/>
       }else{
        return null;
       }
      })}

      {/* // closed--- */}
      {bids.map((res,i)=>{
       if(res.state=="closed")
       {
        return <Bid bid={res}/>
       }else{
        return null;
       }
      })}


    </div>
  )
}
