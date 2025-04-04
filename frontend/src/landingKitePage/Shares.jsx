import React, { useState } from 'react'
import { activeBuy } from '../features/buy/buySlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Shares({ share, i }) {
    const dispatch=useDispatch();
    const buy=useSelector((state)=>state.buy);
    const [visible, setVisible] = useState("none");
    function mouseIn() {
setVisible("flex");
    }
    function mouseOut() {
setVisible("none");
    }

    const style={
        height: "5vh",
        borderRadius: "5px",
        position: "absolute",
        top: "25%",
        left: "40%",
        display:visible,
        justifyContent:"space-evenly"
      }

      function activeBuyButton()
      { const data={
        isBuy:true,
        _id:share._id,
        shareName:share.shareName,
        profitPercentage:share.profitPercentage,
        isUp:share.isUp,
        price:share.price
       } 
       
        dispatch(activeBuy(data));
      }
      function activeSellButton()
      { const data={
        isBuy:false,
        _id:share._id,
        shareName:share.shareName,
        profitPercentage:share.profitPercentage,
        isUp:share.isUp,
        price:share.price
       } 
       
        dispatch(activeBuy(data));
      }
    return (

        <div onMouseEnter={mouseIn} onMouseLeave={mouseOut}a key={i} style={{ width: "100%",position:"relative" }}>
            <a  className="row" style={{ height: "7vh", borderBottom: ".3px solid gray", textDecoration: "none" }}>
                <div className="col-5" style={{ height: "7vh", display: "flex", alignItems: "center" }}>
                    <p style={{ margin: "0 15px", fontWeight: "400", fontSize: ".8rem", paddingLeft: "10px", color: !share.isUp ? "#e26056" : "green" }}>{share.shareName} <sub style={{ color: "gray" }}>{share.isBse ? "BSE" : null}</sub></p> <div className="div" style={{height:"60vh",backgroundColor:"red"}}>
            
            </div>
                </div>
                <div className="col-3" style={{ height: "7vh", display: "flex", alignItems: "center", justifyContent: "space-evenly", paddingLeft: "30px" }}>
                    <p style={{ margin: "0 5px", color: "gray", opacity: "8", fontSize: ".8rem" }}>{share.percentage}</p>
                    <p style={{ margin: "0", color: "black", opacity: "8", fontSize: ".8rem" }}>{share.profitPercentage}%</p></div>
                <div className="col-2" style={{ height: "7vh", display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>

                    {share.isUp ? <i style={{ margin: " 0 10px", color: "green", fontSize: ".8rem" }} class="fa-solid fa-chevron-up"></i> : <i style={{ margin: " 0 10px", color: "#e26056", fontSize: ".8rem" }} class="fa-solid fa-chevron-down"></i>}
                    <p style={{ margin: "0", color: !share.isUp ? "#e26056" : "green", opacity: "8", fontSize: ".8rem" }}>{share.price}</p>

                </div>
            </a>

            <div style={style}>
                <button onClick={activeBuyButton} style={{ height: "4vh", width: "6vh",border:".5px solid black", borderRadius: "5px",marginRight:"5px",backgroundColor:"blue",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",}}>
                  <h6  className='mt-2' style={{color:"white",fontSize:".8rem"}}>B</h6>
                </button>
                <button onClick={activeSellButton} style={{ height: "4vh", width: "6vh",border:".5px solid black", borderRadius: "5px",marginRight:"5px",marginLeft:"5px",backgroundColor:"red",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"}}>
                <h6  className='mt-2' style={{color:"white",fontSize:".8rem"}}>s</h6>
                </button>
                <button style={{ height: "4vh", width: "6vh",border:".5px solid black", borderRadius: "5px",marginRight:"5px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",paddingTop:"15px",paddingLeft:"7px"}}>
                 <p style={{rotate:"90deg",fontSize:".9rem"}}> ||||</p>
                
                </button>
                <button style={{ height: "4vh", width: "6vh",border:".5px solid black", borderRadius: "5px",marginRight:"5px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center"}}>
                
               {/* // ------------------- */}
               <i class="fa-solid fa-chart-simple"></i>
                
                </button>
                <button style={{ height: "4vh", width: "6vh",border:".5px solid black", borderRadius: "5px",marginRight:"5px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"}}>
                     {/* ---------------------------- */}
                     <i class="fa-solid fa-trash"></i>
                     
                </button>
                <button style={{ height: "4vh", width: "6vh",border:".5px solid black", borderRadius: "5px",marginRight:"5px",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"}}>
                   {/* ---------------------------- */}
                   <i class="fa-solid fa-ellipsis"></i>
                </button>
               

            </div>
            
        </div>
        
    )
}
