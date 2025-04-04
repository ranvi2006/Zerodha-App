import React, { useState } from 'react'

export default function Bid({bid}) {
    const [bck,setBCK]=useState("");


    function entered()
    {
        setBCK("#f4eeeb");
    }
    function leave()
    {
        setBCK("");
    }
  return (
    <a className='' onMouseEnter={entered} onMouseLeave={leave} style={{all:"unset", width:"100%",height: "10vh", borderTop: ".1px  solid #e7e8e9", borderBottom: ".1px solid #e7e8e9",display:"flex",backgroundColor:bck }}>
        <div className="col-4 ps-4" style={{ height: "100", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h6 style={{ fontWeight: "400", margin: "0" }}>{bid.name}</h6>
          <h6 style={{ color: "gray", fontWeight: "400", fontSize: ".7rem" }}>{bid.company}</h6>
        </div>
        <div className="col-2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p style={{ alignItems: "center", marginRight: "10px" }}>{bid.stDate}<sup>
    {bid.stDate == 1 ? "st" : 
     bid.stDate == 2 ? "nd" : 
     bid.stDate == 3 ? "rd" : "th"}
  </sup></p>
          <div style={{ height: "1px", width: "20px", border: "1.4px solid #e7e8e9", marginBottom: "10px" }}></div>
          <p style={{ alignItems: "center", marginLeft: "10px" }}>{bid.endDate}<sup>
    {bid.endDate == 1 ? "st" : 
     bid.endDate == 2 ? "nd" : 
     bid.endDate == 3 ? "rd" : "th"}
  </sup></p>
        </div>
        <div className="col-2" style={{ height: "100%", display: "flex", justifyContent: "end", alignItems: "center", borderRight: "1px solid #e7e8e9",paddingRight:"10px" }}>
          <p style={{ marginRight: "10px" }}>{bid.stPrice} </p>
          <div style={{ height: "1px", width: "10px", border: "1.3px solid black", marginBottom: "10px" }}></div>
          <p style={{ marginLeft: "10px" }}> {bid.endPrice}</p>
        </div>
        <div className="col-4" style={{ paddingLeft: "20px", height: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center",paddingRight:"10px" }}>
          <div style={{ height:"100%" }}>
            <div className="" style={{ height: "100%", display: "flex", flexDirection: "column",alignItems:"center",justifyContent:"center" }}>
              <h6 style={{ fontWeight: "400", margin: "0" }}>{bid.minAmmount}</h6>
              <h6 style={{ color: "gray", fontWeight: "400", fontSize: ".7rem" }}>{bid.quantity} Qts.</h6>
            </div>

          </div>
          {bid.state=="active"?<button style={{ margin: "0", padding: "0", border: "none", backgroundColor: "#1670ec", borderRadius: "5px", padding: "5px 25px", fontSize: ".8rem",color:"white" }}>Apply</button>:null}
          {bid.state=="closed"?<button style={{ margin: "0", padding: "0", border: "none", backgroundColor: "gray", borderRadius: "5px", padding: "5px 25px", fontSize: ".8rem",color:"white" }}>CLOSED</button>:null}
          {bid.state=="upcoming"?<button style={{ margin: "0", padding: "0", border: "none", backgroundColor: "gray", borderRadius: "5px", padding: "10px 25px", fontSize: ".5rem",color:"white", }}>UPCOMING</button>:null}
        </div>
      </a>
  )
}
