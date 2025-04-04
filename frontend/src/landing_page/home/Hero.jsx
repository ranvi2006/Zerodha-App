import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='container p-5 mb-5' >
      <div className='row text-center' >
        <img src="/media/images/homeHero.png" alt="HeroImg" className='mb-5' />
        <h1 className='mt-5 '>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <Link to="/signup" className='p-1 btn fs-5' style={{width:"22%", margin:" auto",backgroundColor:"#387ED1",color:"#ffff"}} >Sign up for free</Link>
      </div>

    </div>
  )
}
