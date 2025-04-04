import React from 'react'

export default function ModuleComp({number,module}) {
     const premiumColors = [
        "#1E1E1E", // Dark Gray (Elegant & Professional)
        "#2C2C2C", // Charcoal Black (Modern)
        "#0F172A", // Deep Navy Blue (Sleek)
        "#4A5568", // Slate Gray (Subtle Luxury)
        "#8B5CF6", // Royal Purple (Premium & Vibrant)
        "#EAB308", // Gold (Luxury & Premium)
        "#C084FC", // Soft Purple (Futuristic)
        "#F97316", // Rich Orange (Bold & Attention-Grabbing)
        "#16A34A", // Emerald Green (Wealth & Prestige)
        "#64748B", // Cool Gray (Minimalist Aesthetic)
        "#FF6B6B", // Soft Red (Modern & Elegant)
        "#D97706", // Deep Amber (Warm & Premium)
        "#0EA5E9", // Neon Blue (Tech & Futuristic)
        "#D4AF37", // Metallic Gold (Luxury & Royal)
        "#A855F7", // Bright Violet (Premium & Playful)
      ];
    
    const colors=premiumColors[Math.floor(Math.random()*premiumColors.length)];
    // console.log(color);
  return (
    <div className='ModuleComp' style={{width:"33%",marginBottom:"20px",padding:"10px"}}>
      <div className='d-flex align-items-center'>
        <h2 className='me-2'>{number+1}</h2>
        <div style={{height:".8vh",backgroundColor:colors,width:"85%",opacity:".8"}}></div>
      </div>
      <h5>{module.title}</h5>
      <p style={{color:"gray"}}>{module.chapters} chapters</p>
      <p style={{color:"gray"}}>{module.description}</p>

      <a href="" style={{textDecoration:"none",marginRight:"10px"}}>View module</a>
      <a href="" style={{textDecoration:"none",marginRight:"10px"}}>Watch videos </a>
      <a href="" style={{textDecoration:"none",marginRight:"10px"}}>हिंदी</a>
    </div>
  )
}
