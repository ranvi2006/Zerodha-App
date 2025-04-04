import React from 'react'
import { Link } from 'react-router-dom'
import { activeBuy } from '../../features/buy/buySlice'
import { useDispatch } from 'react-redux'

export default function ShowOrderData({ order, key }) {
  const dispatch=useDispatch();

  async function activeB()
  {
    dispatch(activeBuy(order));
  }
  return (
    <Link onClick={activeB} className=''style={{overflow:"hidden",all:"unset",cursor:"pointer"}}>
      <center>
        <div style={{ width: "95%", height: "100%", borderBottom: "1px solid gray", display: "flex", justifyContent: "space-between",alignItems:"center" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "14%" }}>
           {Math.floor(Math.random()*24)}:{Math.floor(Math.random()*60)}:{Math.floor(Math.random()*60)}
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", height: "100%", width: "14%",}}>
          <p  style={{padding:"0", fontSize: ".8rem", padding: "3px 10px ",backgroundColor:"#e2c7c7",borderRadius:"3px",color:"red" ,opacity:"0.6",position:'relative',top:"10px"}}>BUY</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "14%" }}>
            {order.shareName}<sub style={{color:"gray",fontSize:".6rem",padding:"0"}}> NSE</sub>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", height: "100%", width: "14%" }}>
            MIS
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", height: "100%", width: "14%" }}>
            {order.quantity}/{order.quantity}
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", height: "100%", width: "14%" }}>
            {order.price}
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", height: "100%", width: "14%", borderLeft: "1px solid gray" }}>

            <p style={{ fontSize: ".8rem", padding: "5px 10px ",backgroundColor:"#e1efd8",borderRadius:"3px",color:"green" ,opacity:"0.6",position:'relative',top:"10px"}}>COMPLETE</p>
          </div>


        </div>
      </center>
    </Link>
  )
}

