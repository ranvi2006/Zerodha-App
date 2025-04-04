import React from 'react'
import { Link } from 'react-router-dom'

export default function Varsity() {
  return (
    <div className="varsity" style={{padding:"80px 20px"}}>
        <h3 className='mb-3'>Explore Varsity</h3>
        <div className="div" style={{padding:"20px",display:"flex",justifyContent:"space-evenly"}}>
            <Link className="card" style={{textDecoration:"none",width:"17%",height:"25vh",borderRadius:"10px",overflow:"hidden"}}>
                <div className="half" style={{width:"100%",height:"73%",padding:"20px",backgroundColor:"#78B4F1",paddingTop:"20%"}}>
                    <img src="/media/varsity/ico-modules.svg" alt="" />
                </div>
                <div className="half" style={{width:"100%",height:"28%",padding:"20px",padding:"20px",display:"flex",alignItems:"center"}}>
                    <h5>Modules</h5>
                </div>
            </Link>
            <Link className="card" style={{textDecoration:"none",width:"17%",height:"25vh",borderRadius:"10px",overflow:"hidden"}}>
                <div className="half" style={{width:"100%",height:"73%",padding:"20px",backgroundColor:"#F2C8CA",paddingTop:"20%"}}>
                    <img src="/media/varsity/ico-blog.svg" alt="" />
                </div>
                <div className="half" style={{width:"100%",height:"28%",padding:"20px",padding:"20px",display:"flex",alignItems:"center"}}>
                    <h5>Live</h5>
                </div>
            </Link>
            <Link className="card" style={{textDecoration:"none",width:"17%",height:"25vh",borderRadius:"10px",overflow:"hidden"}}>
                <div className="half" style={{width:"100%",height:"73%",padding:"20px",backgroundColor:"#EEB560",paddingTop:"20%"}}>
                    <img src="/media/varsity/ico-videos.svg" alt="" />
                </div>
                <div className="half" style={{width:"100%",height:"28%",padding:"20px",padding:"20px",display:"flex",alignItems:"center"}}>
                    <h5>Videos</h5>
                </div>
            </Link>
            <Link className="card" style={{textDecoration:"none",width:"17%",height:"25vh",borderRadius:"10px",overflow:"hidden"}}>
                <div className="half" style={{width:"100%",height:"73%",padding:"20px",backgroundColor:"#B6ADF4",paddingTop:"20%"}}>
                    <img src="/media/varsity/ico-certified.svg" alt="" />
                </div>
                <div className="half" style={{width:"100%",height:"28%",padding:"20px",padding:"20px",display:"flex",alignItems:"center"}}>
                    <h5>Certified</h5>
                </div>
            </Link>
            <Link className="card" style={{textDecoration:"none",width:"17%",height:"25vh",borderRadius:"10px",overflow:"hidden"}}>
                <div className="half" style={{width:"100%",height:"73%",padding:"20px",backgroundColor:"#A5CC65",paddingTop:"20%"}}>
                    <img src="/media/varsity/ico-junior.svg" alt="" />
                </div>
                <div className="half" style={{width:"100%",height:"28%",padding:"20px",padding:"20px",display:"flex",alignItems:"center"}}>
                    <h5>Junior</h5>
                </div>
            </Link>
        </div>
        <div className='d-flex' style={{marginTop:"80px",padding:"40px", backgroundColor:"#F5F5F7"}}>
            <div className="half" style={{width:"50%",display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <h4>Varsity on mobile</h4>
                <p style={{color:"gray"}}>Explore stock market lessons in bite size modules, quizzes, and tests.</p>
            </div>
            <div className="half" style={{width:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
               <Link style={{width:"32%"}}><img style={{width:"100%"}} src="/media/varsity/playstore.png" alt="" /></Link>
              <Link style={{width:"32%",marginLeft:"20px"}}> <img style={{width:"100%"}} src="/media/varsity/appstore.png" alt="" /></Link>
            </div>

        </div>

    </div>
  )
}
