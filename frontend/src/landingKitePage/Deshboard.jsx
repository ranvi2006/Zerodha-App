import React from 'react'
import Investing from './Component/StratInvesting'
import MarketOverview from './Component/MarketOverview'
import { useSelector } from 'react-redux';

export default function Deshboard() {
    const user=useSelector((state)=>state.user);
     const order=useSelector((state)=>state.order);
      function getUsedMargin()
      {
        let sum=0;
        for(let i=0;i<order.length;i++)
        {
          sum=sum+order[i].price*order[i].quantity;
        }
        return (sum/100)*20;
      }
    return (
        <div style={{ height: "100%" }}>
            <h4 style={{ color: "black", fontWeight: "400", paddingBottom: "20px" }}>Hii, {user.name}</h4>
            <hr />
            <div className="row" style={{ height: "35vh", padding: "10px" }}>
                <div className="col-6">
                    <div className="row">
                        <h6 className='mt-3 mb-3' style={{ fontWeight: "400" }}><i class="fa-solid fa-clock" style={{ marginRight: "10px" }}></i>Equity</h6>

                        <div className="col-6">

                            <h1 style={{ fontSize: "3rem", fontWeight: "10" }}>{(((user.totalFunds)-getUsedMargin())+"").substring(0,6)}</h1>
                            <p style={{ color: "gray", fontSize: ".8rem" }}>Margin available</p>
                        </div>
                        <div className="col-6" style={{ borderLeft: "0.5px solid gray", height: "fit-content" }}>
                            <p style={{ color: "gray", fontSize: ".8rem" }}>Margin available <b className='ms-2' style={{ color: "black" }}>{(getUsedMargin()+"").substring(0,6)}</b> </p>
                            <p style={{ color: "gray", fontSize: ".8rem" }}>Opening balance  <b className='ms-2' style={{ color: "black" }}>{user.totalFunds}</b>   </p>
                            <a   className='mt-3' style={{textDecoration:"none",fontSize:".7rem"}} href=""> <img style={{height:"10px",marginBottom:"5px",marginRight:"5px"}} src="/media/kite/console.svg" alt="" /> View Statement</a>
                        </div>
                    </div>

                </div>
                <div className="col-6">
                    <div className="row">
                        <h6 className='mt-3 mb-3' style={{ fontWeight: "400" }}><i class="fa-solid fa-droplet" style={{ marginRight: "10px" }}></i>Commodity</h6>


                        <div className="col-6">

                            <h1 style={{ fontSize: "3rem", fontWeight: "10" }}>0</h1>
                            <p style={{ color: "gray", fontSize: ".8rem" }}>Margin available</p>
                        </div>
                        <div className="col-6" style={{ borderLeft: "0.5px solid gray", height: "fit-content" }}>
                            <p style={{ color: "gray", fontSize: ".8rem" }}>Margin available <b className='ms-2' style={{ color: "black" }}>0</b> </p>
                            <p style={{ color: "gray", fontSize: ".8rem" }}>Opening balance  <b className='ms-2' style={{ color: "black" }}>0</b>   </p>
                            <a   className='mt-3' style={{textDecoration:"none",fontSize:".7rem"}} href=""> <img style={{height:"10px",marginBottom:"5px",marginRight:"5px"}} src="/media/kite/console.svg" alt="" />View Statement</a>
                        </div>
                    </div>

                </div>

            </div>
            <hr />
            <Investing />
            <hr />
            <MarketOverview/>

        </div>
    )
}
