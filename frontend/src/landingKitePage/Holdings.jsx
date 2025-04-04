import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Holdings() {
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
          <Link className='a' onClick={handleClick} to="/kite/holdings/all" style={link.a==false?style:style1}>All</Link>
          <Link className='b' onClick={handleClick} to="/kite/holdings/equity" style={link.b==false?style:style1}>Equity</Link>
          <Link className='c' onClick={handleClick} to="/kite/holdings/mutualfund" style={link.c==false?style:style1}>Mutual Funds</Link>
        </ul>
      </div>
    <Outlet/>
    </div>
  )
  
}