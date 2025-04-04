import React from 'react'
import { Link } from 'react-router-dom'

export default function Video() {
    return (
        <div className="Video" style={{ padding: "80px 20px" }}>
            <h3 className='mb-3'>Videos</h3>
            <div className="div" style={{ padding: "20px", display: "flex", justifyContent: "space-between" }}>
               

                <Link className="card" style={{ textDecoration: "none", width: "22%", height: "40vh", overflow: "hidden" }}>
                    <div className="half" style={{ width: "100%", height: "65%", backgroundColor: "#78B4F1" }}>
                        <img style={{ height: "100%", width: "100%" }} src="/media/varsity/mqdefault.jpg" alt="" />
                    </div>
                    <div className="half" style={{ width: "100%", height: "28%", padding: " 35px 20px", padding: "20px"}}>
                        <h6>Impact cost and how it can ...</h6>
                        <a style={{textDecoration:"none"}} href=""> <i class="fa-solid fa-circle-play me-1"></i>Play</a>

                    </div>
                </Link>
                <Link className="card" style={{ textDecoration: "none", width: "22%", height: "40vh", overflow: "hidden" }}>
                    <div className="half" style={{ width: "100%", height: "65%", backgroundColor: "#78B4F1" }}>
                        <img style={{ height: "100%", width: "100%" }} src="/media/varsity/mqdefault (3).jpg" alt="" />
                    </div>
                    <div className="half" style={{ width: "100%", height: "28%", padding: " 35px 20px", padding: "20px"}}>
                        <h6>5 types of share capital</h6>
                        <a style={{textDecoration:"none"}} href=""> <i class="fa-solid fa-circle-play me-1"></i>Play</a>

                    </div>
                </Link>
                <Link className="card" style={{ textDecoration: "none", width: "22%", height: "40vh", overflow: "hidden" }}>
                    <div className="half" style={{ width: "100%", height: "65%", backgroundColor: "#78B4F1" }}>
                        <img style={{ height: "100%", width: "100%" }} src="/media/varsity/mqdefault (2).jpg" alt="" />
                    </div>
                    <div className="half" style={{ width: "100%", height: "28%", padding: " 35px 20px", padding: "20px"}}>
                        <h6>How OFS allotment is done</h6>
                        <a style={{textDecoration:"none"}} href=""> <i class="fa-solid fa-circle-play me-1"></i>Play</a>

                    </div>
                </Link>
                <Link className="card" style={{ textDecoration: "none", width: "22%", height: "40vh", overflow: "hidden" }}>
                    <div className="half" style={{ width: "100%", height: "65%", backgroundColor: "#78B4F1" }}>
                        <img style={{ height: "100%", width: "100%" }} src="/media/varsity/mqdefault (1).jpg" alt="" />
                    </div>
                    <div className="half" style={{ width: "100%", height: "28%", padding: " 35px 20px", padding: "20px"}}>
                        <h6>How OFS allotment is done...</h6>
                        <a style={{textDecoration:"none"}} href=""> <i class="fa-solid fa-circle-play me-1"></i>Play</a>

                    </div>
                </Link>
               

               

               
            </div>
        </div>
    )
}
