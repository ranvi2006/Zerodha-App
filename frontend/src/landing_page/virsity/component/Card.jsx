import React from 'react'

export default function Card({data}) {
  return (
    <div className="container  mt-5" style={{border:".3px solid gray",boxShadow:"2px 2px 5px gray",borderRadius:"5px",width:"95%"}}>
    <div className="row">
      <div className="col-4 p-2 d-flex justify-content-center align-items-center">
        <img style={{
          width:"100%"
        }} src={data.img} alt="" />
      </div>
      <div className="col-8 p-4">
        <h3>{data.topic}</h3>
        <p>{data.answer}</p>
       {data.button.map((data)=>{
        return <a style={{textDecoration:"none",marginRight:"30px"}} href="">{data}</a>
       })}
      </div>
    </div>
   </div>
  )
}
