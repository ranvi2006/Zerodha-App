import React, { useState } from 'react'
import CommentCard from './CommentCard'


export default function Comment() {
    const comments=[
        {
          author: "YASHRAJ GUPTA",
          authorImage:"/media/varsity/e8d25c7e3a1f6c21a2eb806499bd8f14.png",
          topic: "The Debt funds (Part 2)",
          comment: "Remember, if you want to park funds for more than three months or 90 days, you are better off looking at a liquid fund. Can you please tell me the reason for the same?",
          date: "26 Feb 2025",
          replies: 162
        },
        {
          author: "Karthik Rangappa",
          authorImage:"/media/varsity/f77c3f8361982099ed9ac6d852b2e2b1.png",
          topic: "Gamma (Part 2)",
          comment: "Yes, thats right.",
          date: "26 Feb 2025",
          replies: 682
        },
        {
          author: "Karthik Rangappa",
          authorImage:"/media/varsity/f77c3f8361982099ed9ac6d852b2e2b1.png",
          topic: "वोलैटिलिटी की गणना (हिस्टोरिकल-ऐतिहासिक)",
          comment: "Do check this - https://youtu.be/MX-6rdHDPbE?si=5w31s86ywrpFKMT8",
          date: "26 Feb 2025",
          replies: 22
        },
        {
          author: "Karthik Rangappa",
          authorImage:"/media/varsity/f77c3f8361982099ed9ac6d852b2e2b1.png",
          topic: "Call Ratio Back Spread",
          comment: "Sorry, dint really get the query. Can you kindly elaborate? Thansk.",
          date: "26 Feb 2025",
          replies: 550
        },
        {
          author: "Karthik Rangappa",
          authorImage:"/media/varsity/f77c3f8361982099ed9ac6d852b2e2b1.png",
          topic: "The Finale - Helping you get started",
          comment: "You can exclude the trading day and look at the last 3 candles for this.",
          date: "26 Feb 2025",
          replies: 2312
        }
      ];
   
  return (
    <div className='container'>
      <div className="  row d-flex justify-content-center">
        <div className="col-10 card p-5">
               <h1 className='mb-3'>Recent comments</h1>
            {comments.map((comment)=>{
                return <CommentCard commentData={comment}/>
            })}
           
        </div>
      </div>
    </div>
  )
}
