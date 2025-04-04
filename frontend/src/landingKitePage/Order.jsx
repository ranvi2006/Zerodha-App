import React, { useState } from 'react'
import OrderOverview from './Component/OrderOverview'
import { Link, Outlet } from 'react-router-dom'

export default function Order() {
  const style={textDecoration:"none",color:"black",marginRight:"20px",fontSize:".8rem",fontWeight:"500"};
  const style1={textDecoration:"none",color:"red",marginRight:"20px",fontSize:".8rem",fontWeight:"500",borderBottom:"2px solid red"};

  const [link,setLink]=useState({a:true,
    b:false,
    c:false,
    d:false,
    e:false,
  });

  function handleClick(e)
  {
   const ob={a:false,
    b:false,
    c:false,
    d:false,
    e:false,
  }
  ob[e.target.className]=true;
  setLink(ob);
  }
  
  return (
    <div style={{height:"100%"}}>
      <div style={{height:"4vh",borderBottom:".5px solid gray"}}>
        <ul style={{listStyle:"none",display:"flex",}}>
          <Link className='a' onClick={handleClick} to="/kite/orders/order" style={link.a==false?style:style1}>Orders</Link>
          <Link className='b' onClick={handleClick} to="/kite/orders/gtt" style={link.b==false?style:style1}>GTT</Link>
          <Link className='c' onClick={handleClick} to="/kite/orders/baskets" style={link.c==false?style:style1}>Baskets</Link>
          <Link className='d' onClick={handleClick} to="/kite/orders/sip" style={link.d==false?style:style1}>SIP</Link>
          <Link className='e' onClick={handleClick} to="/kite/orders/alerts" style={link.e==false?style:style1}>Alerts</Link>
        </ul>
      </div>
    <Outlet/>
    </div>
  )
  
}