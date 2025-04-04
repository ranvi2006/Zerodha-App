import React from 'react'

export default function Hero() {
  return (
    <div style={{ backgroundColor: "#387ED1", color: "#ffff", padding: "60px",paddingBottom:"90px" }}>
      <div className="row">
        <div className="col-7">
          <h2 className='mb-5' style={{ fontSize: "1.5rem", fontWeight: "500" }}>Support Portal</h2>
          <h2 className='mb-5' style={{ fontSize: "1.5rem", fontWeight: "500" }}>Search for an answer or browse help topics to create a <br /> ticket</h2>
          <div className='d-flex justify-content-center align-items-center mb-3' style={{ height: "10vh", width: "100%", backgroundColor: "white", color: "black" }} >
            <input type="text" placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' style={{ width: "80%", padding: "10px",border:"none" }} />
            <i style={{ fontWeight: "600", color: "gray" }} class="fa-solid fa-magnifying-glass"></i>
          </div>
        <div className='d-flex flex-wrap justify-content-start align-items-baseline '>
        <a className='p-2  ' style={{textDecoration:"none",color:"white",borderBottom:"1px solid white",marginBottom:"7px"}} href="">Track account opening</a> &nbsp;&nbsp;&nbsp;
        <a className='p-2 ' style={{textDecoration:"none",color:"white",borderBottom:"1px solid white",marginBottom:"7px"}} href=""> Track segment activation</a> &nbsp;&nbsp;&nbsp;
        <a className='p-2 ' style={{textDecoration:"none",color:"white",borderBottom:"1px solid white",marginBottom:"7px"}} href="">Intraday margins</a> &nbsp;&nbsp;&nbsp;
        <a className='p-2 ' style={{textDecoration:"none",color:"white",borderBottom:"1px solid white",marginBottom:"7px"}} href="">Kite user manual</a>
        </div>
         
        </div>
        <div className="col-5 ps-4">
        <div className='mb-5 pb-3' style={{display:"flex" ,flexDirection:"row-reverse"}}><a className='p-2 ' style={{textDecoration:"none",color:"white",borderBottom:"1px solid white",marginBottom:"7px"}} href="">Track tickets</a></div>
        <h2 className='mb-3' style={{ fontSize: "1.5rem", fontWeight: "500" }}>Featured</h2>
        <ol>
          <li className='mb-3'>
          <a  style={{textDecoration:"none",color:"white",borderBottom:"1.5px solid white",marginBottom:"7px"}} href="">Offer for sale (OFS) - February 2025</a>
          </li>
          <li className='mb-3'>
          <a  style={{textDecoration:"none",color:"white",borderBottom:"1.5px solid white",marginBottom:"7px"}} href="">Surveillance measure on scrips - February 2025</a>
          </li>
        </ol>
        </div>
      </div>
    </div>
  )
}
