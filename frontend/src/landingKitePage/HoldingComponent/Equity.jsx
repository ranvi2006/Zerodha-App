import React from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'

export default function Equity() {
  const navigate=useNavigate();
  function onchange(e)
  {
    // console.log(e.target.value);
    navigate(`/kite/holdings/equity/${e.target.value}`);
  }
  return (
    <div style={{ padding: "20px 20px" }}>
      <span style={{ fontWeight: "400", display: "inline", marginRight: "20px" }}>Holdings</span>
      <select
      onChange={onchange}
        style={{
          all: "unset",
          border: ".4px solid gray",
          borderRadius: "3px",
          padding: "4px 8px", // Adds padding inside select
          fontSize: "14px", // Adjust font size
          color: "gray", // Sets text color,
          display:"inline-flex",
          width:"fit-content",
          flexDirection:"column"
        }}
        
      >
       <option value="all">All equity</option>
        <option value="mtf">MTF</option>
        <option value="kiteonly">Kite only</option>
        <option value="smallcase">Small case</option>
       
      </select>

      <Outlet />

    </div>
  )
}
