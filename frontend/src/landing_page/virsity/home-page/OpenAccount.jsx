
import React from 'react'
import { Link } from 'react-router-dom'

export default function OpenAccount() {
    return (
        <div className='container text-center mb-5'>
            <div className="row">
                <div className="col-6">
                    <h1 className='mt-5 mb-4 '>Open a Zerodha account</h1>
                    <p className='mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades. </p>
                    
                </div>
                <div className="col-6" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Link to="/signup" className=' btn fs-5' style={{ backgroundColor: "#387ED1", color: "#ffff" }} >Sign up for free</Link>
                </div>
                
            </div>
        </div>
    )
}


