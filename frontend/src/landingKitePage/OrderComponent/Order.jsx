import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addOrder, deleteOrder } from '../../features/order/orderSlice';
import axios from 'axios';
import ShowOrderData from './ShowOrderData';


export default function Order() {
  const user = useSelector((state) => state.user);
  const localUser = JSON.parse(localStorage.getItem("user"));
  const orders = useSelector((state) => state.order);
  //  orders = [];
  const dispatch = useDispatch();

  async function fatchOrder() {
    if (localUser.phoneNo) {
      const response = await axios.post("http://localhost:3000/auth/getOrder", { phoneNo: localUser.phoneNo });
      
      dispatch(addOrder(response.data.orders));
    }
  }

  useEffect(() => {
    fatchOrder();
  },);

  // console.log("orders", orders);

  return (
    <>
    {orders.length==0?
  <div style={{ padding: "60px 20px" }}>
  <center>
    <img className='mb-3' style={{ height: "100px" }} src="/media/kite/orderbook.svg" alt="" />
    <p className='mb-3' style={{ color: "gray", fontWeight: "400" }}>You haven't placed any orders today</p>
    <button className='mb-2' style={{ all: 'unset', padding: "8px 20px", backgroundColor: "blue", color: "white", borderRadius: "5px" }}>Get Started</button>
    <br />
    <a className='mt-3' style={{ textDecoration: "none" }} href=""> <img style={{ height: "15px", marginBottom: "5px", marginRight: "5px" }} src="/media/kite/console.svg" alt="" />View History</a>
  </center>
</div>
:
// """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""'
<div className="orderContainer" style={{height:"100%",width:"100%"}}>
 {/* Oder Area */}


 <center>
        <div style={{ width: "95%", height: "8vh", borderTop: "1px solid gray", borderBottom: "1px solid gray", display: "flex", justifyContent: "space-between",alignItems:"center" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "14%" }}>
            <p style={{fontSize:".8rem",color:"gray",fontWeight:"500"}}>Time</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "14%" }}>
           <p style={{fontSize:".8rem",color:"gray",fontWeight:"500"}}>Type</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "14%" }}>
          <p style={{fontSize:".8rem",color:"gray",fontWeight:"500"}}>Instrument</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "14%" }}>
             <p style={{fontSize:".8rem",color:"gray",fontWeight:"500"}}>Product</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "14%" }}>
          <p style={{fontSize:".8rem",color:"gray",fontWeight:"500"}}>Qty.</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "14%" }}>
             <p style={{fontSize:".8rem",color:"gray",fontWeight:"500"}}>AVG. price</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "14%", borderLeft: "1px solid gray" }}>

             <p style={{fontSize:".8rem",color:"gray",fontWeight:"500"}}>Status</p>
          </div>
        </div>
      </center>

{orders.map((res,i)=>{
  return  <ShowOrderData order={res} key={i}/>
})}

</div> 
// """""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""' 
  }
    </>
  )
}
