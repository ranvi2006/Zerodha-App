import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
  <div className="Navbar d-flex" style={{padding:"40px 20px"}}>
    <div className="section1 "  style={{width:"60%"}}>
        <Link to="/varsity"><img src="/media/varsity/logo.png" alt="" /></Link>
    </div>
    <div className="section2 d-flex justify-content-around align-items-baseline" style={{width:"40%"}}>
        <Link to="/varsity/module" style={{textDecoration:"none",color:"black",fontWeight:"500"}}>Modules</Link>
        <Link to="/varsity/video"style={{textDecoration:"none",color:"black",fontWeight:"500"}} >Videos</Link>
        <Link to="/varsity/certified" style={{textDecoration:"none",color:"black",fontWeight:"500"}}>Certified</Link>
        <Link to="/varsity/junior" style={{textDecoration:"none",color:"black",fontWeight:"500"}}>Juniour</Link>
        <Link to="/varsity/blog" style={{textDecoration:"none",color:"black",fontWeight:"500"}}>Blog</Link>
        <div className="div d-flex align-items-baseline"><Link to="/varsity/live" style={{textDecoration:"none",color:"black",fontWeight:"500"}}><i style={{marginRight:".5rem"}} class="fa-solid fa-wifi"></i>Live</Link></div>

    </div>

  </div>
  )
}
