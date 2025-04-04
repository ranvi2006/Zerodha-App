import React from 'react'

import Hero from './Hero'
import Brokrjze from './Brokrjze'

import Equity from './Equity'
import ChargeForOpenAccount from './ChargeForOpenAccount'
import ChargeForService from './ChargeForService'
import Changes from './Changes'

export default function PricingPage() {
    return (
        <>
        
            <Hero />
            <Brokrjze />
            <Equity/>
            <Changes/>
            <ChargeForOpenAccount/>
            <ChargeForService/>
          
        </>
    )
}
