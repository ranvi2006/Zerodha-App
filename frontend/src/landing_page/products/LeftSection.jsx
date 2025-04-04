import React from 'react'

export default function LeftSection({data}) {
  return (
    <>
      
      <div className="container mt-5">
        <div className="row " style={{display:"flex",alignItems:'center'}}>
          <div className="col-7 p-1">
            <img src={data.mainImg} alt="" />
          </div>
          <div className="col-5 p-1">
            <h2 className='mt-5'>{data.h1}</h2>
            <p className='' style={{fontSize:"1.1rem",lineHeight:"2rem"}}>{data.p}</p>
            {data.a.map((value)=>{
              return  <a href="" style={{textDecoration:"none",marginRight:"2rem"}}>{value} <i  class="fa-solid fa-arrow-right-long"></i></a>
            })}
            <hr className='mt-2' style={{display:"block" ,opacity:"0"}} />
           {data.button.map((path)=>{
                
             return <a style={{marginRight:"1rem"}} href=""><img src={path} alt="" /></a> 
           })}
          </div>
        </div>
      </div>

    </>
  )
}
