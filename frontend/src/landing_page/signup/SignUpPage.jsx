import React from 'react'

import OpenAccount from '../OpenAccount'
import Hero from './Hero' 
import SignUp from "./SignUp"
import InvestMentOption from './InvestMentOption'
import StepsToOpen from './StepsToOpen'
import BenifitOpen from './BenifitOpen'
import AccountType from './AccountType'
import FAQS from './FAQS'

export default function SignUpPage() {
  return (
   <>
 
  <Hero/>
  <SignUp/>
  <div className='mb-5 mt-5' style={{opacity:"0"}}>margin</div>
  <InvestMentOption/>
  <div className='mb-5 mt-5' style={{opacity:"0"}}>margin</div>
  <StepsToOpen/>
  <div className='mb-5 mt-5' style={{opacity:"0"}}>margin</div>
  <BenifitOpen/>
  <div className='mb-5 mt-5' style={{opacity:"0"}}>margin</div>
  <AccountType/>
  <div className='mb-5 mt-5' style={{opacity:"0"}}>margin</div>
  <FAQS/>
  <div className='mb-5 mt-5' style={{opacity:"0"}}>margin</div>
  <OpenAccount/>
  <div className='mb-5 mt-5' style={{opacity:"0"}}>margin</div>
 
   </>
  )
}
