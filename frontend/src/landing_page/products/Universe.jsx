import React from 'react'

export default function Universe() {
  return (
    <div className="container text-center mt-5">
      <p className='fs-5 mt-5 mb-5'>Want to know more about our technology stack? Check out the <a style={{ textDecoration: "center" }} href="">Zerodha.tech</a> blog.</p>
      <h2 className='mb-4 mt-5'>The Zerodha Universe</h2>
      <p className='mb-4'>Extend your trading and investment experience even further with our partner platforms</p>

      <div className="" style={{display:"flex",justifyContent:"space-evenly" ,flexWrap:"wrap"}}>
        <div className="mb-5 mt-5"  style={{ display: "flex", justifyContent: "center", alignItems: "center",width:"32%",flexDirection:"column" }}>
          <img  style={{width:"50%",height:"10vh"}} src="/media/images/zerodhaFundhouse.png" alt="" />
          <p className='mt-2' style={{fontSize:".8rem"}}>Our asset management venture <br /> that is creating simple and transparent index <br /> funds to help you save for your goals.
          </p>
        </div>
        <div className="mb-5 mt-5"  style={{ display: "flex", justifyContent: "center", alignItems: "center",width:"32%",flexDirection:"column" }}>
          <img  style={{width:"50%",height:"10vh"}} src="/media/images/sensibullLogo.svg" alt="" />
          <p className='mt-2' style={{fontSize:".8rem"}}>
            Options trading platform that lets you <br /> create strategies, analyze positions, and examine <br />data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="mb-5 mt-5"  style={{ display: "flex", justifyContent: "center", alignItems: "center",width:"32%",flexDirection:"column" }}>
          <img  style={{width:"50%",height:"10vh"}} src="/media/images/tijori.svg" alt="" />
          <p className='mt-2' style={{fontSize:".8rem"}}>
            Investment research platform <br /> that offers detailed insights on stocks, <br /> sectors, supply chains, and more.

          </p>
        </div>
        <div className="mb-5 mt-5"  style={{ display: "flex", justifyContent: "center", alignItems: "center",width:"32%",flexDirection:"column" }}>
          <img  style={{width:"50%",height:"10vh"}} src="/media/images/streakLogo.png" alt="" />
          <p className='mt-2' style={{fontSize:".8rem"}}>Systematic trading platform <br /> that allows you to create and backtest <br /> strategies without coding.
          </p>
        </div>
        <div className="mb-5 mt-5"  style={{ display: "flex", justifyContent: "center", alignItems: "center",width:"32%",flexDirection:"column" }}>
          <img  style={{width:"50%",height:"10vh"}} src="/media/images/smallcaseLogo.png" alt="" />
          <p className='mt-2' style={{fontSize:".8rem"}}>
            Thematic investing platform  <br /> that helps you invest in diversified baskets <br /> of stocks on ETFs.
          </p>
        </div>
        <div className="mb-5 mt-5"  style={{ display: "flex", justifyContent: "center", alignItems: "center",width:"32%",flexDirection:"column" }}>
          <img  style={{width:"50%",height:"10vh"}} src="/media/images/dittoLogo.png" alt="" />
          <p className='mt-2' style={{fontSize:".8rem"}}>
            Personalized advice on life <br /> and health insurance. No spam <br /> and no mis-selling.


          </p>
        </div>

      </div>
      <button className='fs-5 mb-5 mt-5' style={{padding:"1vh 3vw" ,borderRadius:"5px",backgroundColor:"#387ED1",border:"none",color:"white"}}>Sign up for free</button>
    </div>
  )
}
