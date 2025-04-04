import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Certified from './Certified'
import Comment from './Comment'
import Footer from '../Footer'
import Module from './Module'
import OpenAccount from './OpenAccount'
import Varsity from './Varsity'
import Video from './Video'

export default function VarsityPage() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Varsity/>
    <Video/>
    <Certified/>
    <Module/>
    <Comment/>
    <OpenAccount/>
    <Footer/>

    </>
  )
}
