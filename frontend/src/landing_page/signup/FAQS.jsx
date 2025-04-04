import React, { useState } from 'react'

export default function FAQS() {
  const [handleBtn,setHandleBtn]=useState({btn1:false,
    btn2:false,
    btn3:false,
    btn4:false,
    btn5:false
  });

  function activateDown(e) {
    const value = e.target.className;
  
    // Create a new copy of the object to avoid mutating state directly
    const updatedHandleBtn = {
      ...handleBtn, // Spread existing state
      [value]: !handleBtn[value], // Dynamically update the button
    };
  
    setHandleBtn(updatedHandleBtn);
    console.log(updatedHandleBtn);
  }
  return (
   <div className="container " style={{padding:" 2rem 7vw"}}>
   <h3>FAQs</h3>
   <div className="row">
    <div className="col-12 mt-3" style={{borderTop:".4px solid gray",marginBottom:"3vh"}}>
      <button className='btn1' onClick={activateDown} style={{all:"unset",cursor:"pointer",width:"100%", display:"flex",justifyContent:"space-between"}}> <h6  className='btn1' >What is a Zerodha account?</h6> {handleBtn.btn1 ?<i className='btn1' style={{justifySelf:"flex-end"}}>▲</i> :<i className='bn11' style={{justifySelf:"flex-end"}}>▼</i> }  </button>
      <div style={{display:!handleBtn.btn1?"none":"block",color:"#8B919C"}}>

        {/* // content here */}

        <p >A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally.</p>

      </div>
    </div>

    
    <div className="col-12 mt-3" style={{borderTop:".4px solid gray",marginBottom:"3vh",marginBottom:"3vh"}}>
      <button className='btn2' onClick={activateDown} style={{all:"unset",cursor:"pointer",width:"100%", display:"flex",justifyContent:"space-between"}}> <h6  className='btn2' >What documents are required to open a demat account?</h6> {handleBtn.btn2 ?<i className='btn2' style={{justifySelf:"flex-end"}}>▲</i> :<i className='bn11' style={{justifySelf:"flex-end"}}>▼</i> }  </button>
      <div style={{display:!handleBtn.btn2?"none":"block",color:"#8B919C"}}>

        {/* // content here */}
        <p style={{color:"#8B919C"}}>The following documents are required to open a Zerodha account online:</p>
        <ul>
<li>PAN number</li>
<li>Aadhaar Card (Linked with a phone number for OTP verification)</li>
<li>Cancelled cheque or bank account statement (To link your bank account)</li>
<li>Income proof (Required only if you wish to trade in Futures & options)</li>
        </ul>

      </div>
    </div>

    <div className="col-12 mt-3" style={{borderTop:".4px solid gray",marginBottom:"3vh"}}>
      <button className='btn3' onClick={activateDown} style={{all:"unset",cursor:"pointer",width:"100%", display:"flex",justifyContent:"space-between"}}> <h6  className='btn3' >Is Zerodha account opening free?</h6> {handleBtn.btn3 ?<i className='btn3' style={{justifySelf:"flex-end"}}>▲</i> :<i className='bn11' style={{justifySelf:"flex-end"}}>▼</i> }  </button>
      <div style={{display:!handleBtn.btn3?"none":"block",color:"#8B919C"}}>

        {/* // content here */}
        <p style={{color:"#8B919C"}}>Yes, It is completely free</p>

      </div>
    </div>

    <div className="col-12 mt-3" style={{borderTop:".4px solid gray",marginBottom:"3vh"}}>
      <button className='btn4' onClick={activateDown} style={{all:"unset",cursor:"pointer",width:"100%", display:"flex",justifyContent:"space-between"}}> <h6  className='btn4' >Are there any maintenance charges for a demat account?</h6> {handleBtn.btn4 ?<i className='btn4' style={{justifySelf:"flex-end"}}>▲</i> :<i className='bn11' style={{justifySelf:"flex-end"}}>▼</i> }  </button>
      <div style={{display:!handleBtn.btn4?"none":"block",color:"#8B919C"}}>

        {/* // content here */}
        <p style={{color:"#8B919C"}}>The account maintaince charges is appliacable based on the account type. <br />
For Basic Services Demat Account: Zero charges if the holding value is less than ₹4,00,000. <br />
For non-Basic Services Demat Account demat accounts: ₹300 per year + GST <br />
To learn more about BSDA,<a style={{textDecoration:"none"}} href=""> Click here</a></p>

      </div>
    </div>

    <div className="col-12 mt-3" style={{borderTop:".4px solid gray",marginBottom:"3vh"}}>
      <button className='btn5' onClick={activateDown} style={{all:"unset",cursor:"pointer",width:"100%", display:"flex",justifyContent:"space-between"}}> <h6  className='btn5' >Can I open a demat account without a bank account?</h6> {handleBtn.btn5 ?<i className='btn5' style={{justifySelf:"flex-end"}}>▲</i> :<i className='bn11' style={{justifySelf:"flex-end"}}>▼</i> }  </button>
      <div style={{display:!handleBtn.btn5?"none":"block",color:"#8B919C"}}>

        {/* // content here */}
        <p>To open a demat account, you must have a bank account in your name. <br />
        If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to <br /> provide either a cancelled cheque or a bank statement to link your bank account to Zerodha.</p>

      </div>
    </div>








    
   </div>
   </div>
  )
}
