import React from 'react'

export default function Footer() {
  return (
    <div className="container pt-5" style={{ borderTop: ".2px solid gray", backgroundColor: "#FBFBFB" }} >
      <div className="row mb-5">
        <div className="col-3 ">
          <img className="mb-2" style={{width:"60%"}} className="" src="/media/images/logo.svg" alt="" />
           <p className=' mb-3' style={{fontSize:'.8rem'}}>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
          <i style={{curser:"pointer"}} class="fa-brands fa-x-twitter fs-5"></i> &nbsp;&nbsp;&nbsp;
          <i style={{curser:"pointer"}} class="fa-brands fa-square-facebook fs-5"></i>&nbsp;&nbsp;&nbsp;
          <i style={{curser:"pointer"}} class="fa-brands fa-instagram fs-5"></i> &nbsp;&nbsp;&nbsp;
          <i style={{curser:"pointer"}} class="fa-brands fa-linkedin-in fs-5"></i>&nbsp;&nbsp;&nbsp;
          <hr />
          <i style={{curser:"pointer"}} class="fa-brands fa-youtube fs-5"></i> &nbsp;&nbsp;&nbsp;
          <i style={{curser:"pointer"}} class="fa-brands fa-whatsapp fs-5"></i>&nbsp;&nbsp;&nbsp;
          <i style={{curser:"pointer"}} class="fa-brands fa-telegram fs-5"></i> &nbsp;&nbsp;&nbsp;
        </div>
        <div className="col-3 pl-5">
          <h5 className='mb-4'>Company</h5>
          <h6 className='mb-3'>About</h6>
          <h6 className='mb-3'>Products</h6>
          <h6 className='mb-3'>Pricing</h6>
          <h6 className='mb-3'>Referral programme</h6>
          <h6 className='mb-3'>Careers</h6>
          <h6 className='mb-3'>Zerodha.tech</h6>
          <h6 className='mb-3'>Open source</h6>
          <h6 className='mb-3'>Press & media</h6>
          <h6 className='mb-3'>Zerodha Cares (CSR)</h6>

        </div>
        <div className="col-3">
          <h5 className='mb-4'>Support</h5>
          <h6 className='mb-3'>Contact us</h6>
          <h6 className='mb-3'>Support portal</h6>
          <h6 className='mb-3'>Z-Connect blog</h6>
          <h6 className='mb-3'>List of charges programme</h6>
          <h6 className='mb-3'>Downloads & resources</h6>
          <h6 className='mb-3'>Videos</h6>
          <h6 className='mb-3'>Market overview</h6>
          <h6 className='mb-3'>How to file a complaint?</h6>
          <h6 className='mb-3'>Status of your complaints</h6>

        </div>

        <div className="col-3">
          <h5 className='mb-4'>Account</h5>
          <h6 className='mb-3'>Open an account</h6>
          <h6 className='mb-3'>Fund transfer</h6>

        </div>
      </div>
      <div className="row mt-5">
      <p className=' mt-4 mb-3' style={{fontSize:'.7rem'}}>
      Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a style={{textDecoration:"none"}} href="">complaints@zerodha.com</a>, for DP related to <a style={{textDecoration:"none"}}   href="">dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
      </p>


       <p className=' mb-3' style={{fontSize:'.7rem'}}>
      Procedure to file a complaint on <a style={{textDecoration:"none"}}  href="">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
      </p>
       <p className=' mb-3' style={{fontSize:'.7rem'}}>
      <a  style={{textDecoration:"none"}} href="">Smart Online Dispute Resolution | Grievances Redressal Mechanism</a>
      </p>

       <p className=' mb-3' style={{fontSize:'.7rem'}}>
      Investments in securities market are subject to market risks; read all the related documents carefully before investing.
      </p>
       <p className=' mb-3' style={{fontSize:'.7rem'}}>
      Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
      </p>

       <p className=' mb-3' style={{fontSize:'.7rem'}}>
      "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a style={{textDecoration:"none"}} href="">create a ticket here</a>.
      </p>
       

      </div>
    </div>
  )
}
