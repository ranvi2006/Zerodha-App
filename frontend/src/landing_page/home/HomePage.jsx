import React from 'react'

import Hero from './Hero'
import Award from './Award'
import Stats from './Stats'
import Pricing from './Pricing'
import Eduction from './Eduction'
import OpenAccount from '../OpenAccount'


export default function HomePage() {
  return (
   <>
   
   <Hero/>
   <div className='mb-5 mt-5' style={{opacity:"0"}}>margin</div>
   <Award/>
   <div className='mb-5 mt-5' style={{opacity:"0"}}>margin</div>
   <Stats/>
   <div className='mb-5 mt-5' style={{opacity:"0"}}>margin</div>
   <Pricing/>
   <div className='mb-5 mt-5' style={{opacity:"0"}}>margin</div>
   <Eduction/>
   <div className='mb-5 mt-5' style={{opacity:"0"}}>margin</div>
   <OpenAccount/>
   <div className='mb-5 mt-5' style={{opacity:"0"}}>margin</div>
  
   </>
  )
}
