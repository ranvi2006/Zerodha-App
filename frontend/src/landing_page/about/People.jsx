import React from 'react'

export default function People() {
    return (
        <div className="container mt-5 mb-5" >
            <h1 style={{ textAlign: "center" }}>People</h1>
            <div className="row" style={{paddingTop:"10vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div className="col-5" style={{ paddingLeft: "8%" }}>
                    <img style={{ height: "300px", width: "300px", borderRadius: "50%", rotate: "-5deg" }} src="/media/images/my pic-modified.jpg" alt="" />

                </div>
                <div className="col-7">
                    <p className='fs-5'>Raju Kumar Mandal is a passionate software developer who has built and deployed multiple <br /> projects, specializing in full-stack development using MERN, SQL, and Java. With hands-on <br /><br />experience in web development, coding challenges, and hackathons, he is constantly exploring new technologies. <br /><br />

                        He is dedicated to solving real-world problems through technology and has worked on <br /> projects like a Pet Adoption Website, Exam Results Portal, and a Foodie

                        Beyond coding, he enjoys staying up-to-date with tech trends and continuously improving his skills.</p>
                        <p className='fs-5'>Connect on<a style={{textDecoration:"none"}} href=""> Homepage</a>/<a style={{textDecoration:"none"}} href=""> TradingQnA</a> <a style={{textDecoration:"none"}} href="">/Twitter</a></p>
                </div>
            </div>
        </div>
    )
}
