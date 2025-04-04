import React from 'react'
import Card from '../component/Card'

export default function Important() {
    const imps=[{
      img:"/media/varsity/certified-video.jpg",
      topic:"Why Varsity Certified?",
      answer:"Finance is a crucial subject we cannot afford to neglect. We all deal with money in our lives, regardless of our occupation, yet often lack sufficient knowledge about it. Watch Nithin and Karthik discuss the importance of financial literacy and why you should be taking the Varsity Certified test.",
      button:["Watch more"]
    },
    {
      img:"/media/varsity/certified.svg",
    topic:"Joint certification",
    answer:"If you are a school or college interested in associating with Zerodha Varsity to offer the certification program to your students and maybe even offer joint certification, please get in touch with us.",
    button:["Get in touch"]
  },];
  return (
  <div className="container mt-t5 mb-5 d-flext justify-content-center">
   {imps.map((res)=>{
    return <Card data={res}/>
    })}
  </div>
  )
}

