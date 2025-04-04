import React from 'react'

import Hero from './Hero'
import Team from './Team'

import People from './People'
import Info from './Info'

export default function AboutPage() {
  return (
    <>
    
    <Hero/>
    <hr style={{margin:"15vh"}}></hr>
    <Info/>
    <People/>

    <Team/>
    
    </>
  )
}
