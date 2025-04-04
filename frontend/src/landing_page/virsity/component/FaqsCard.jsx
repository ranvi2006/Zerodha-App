import React from 'react'

export default function FaqsCard({data}) {
    const colors = [
        "#191970", // Midnight Blue
        "#7851A9", // Royal Purple
        "#50C878", // Emerald Green
        "#DC143C", // Crimson Red
        "#FFD700", // Gold
        "#005F56", // Deep Teal
        "#36454F", // Charcoal Gray
        "#FF4500", // Sunset Orange
        "#0F52BA", // Sapphire Blue
        "#B76E79"  // Rose Gold
      ];
      
  return (
   <div className="container">
    <div className='mt-4' style={{height:".7vh",width:"4vw",backgroundColor:colors[Math.floor(Math.random()*colors.length)]}}></div>
    <hr style={{marginTop:"0", width:"20vw"}}></hr>
    <h6>{data.question}</h6>
    <p style={{color:"gray"}}>{data.answer}</p>
   </div>
  )
}
