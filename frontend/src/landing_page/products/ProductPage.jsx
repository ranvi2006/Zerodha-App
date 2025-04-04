import React from 'react'

import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

export default function ProductPage() {

  const data1 = {
    mainImg: "/media/images/kite.png",
    h1: "kite",
    p: <p>
      Our ultra-fast flagship trading platform with <br /> streaming market data, advanced charts, an <br /> elegant UI, and more. Enjoy the Kite <br /> experience seamlessly on your Android and <br /> iOS devices.
    </p>,
    a: ["Try demo ","Learn more"],
    button: ["/media/images/googlePlayBadge.svg","/media/images/appstoreBadge.svg"]
  };
  const data2 = {
    mainImg: "/media/images/console.png",
    h1: "Console",
    p: <p>
     The central dashboard for your Zerodha <br /> account. Gain insights into your trades and <br /> investments with in-depth reports and <br /> visualisations.
    </p>,
    a: ["Learn more"],
    button: []
  };
  const data3 = {
    mainImg: "/media/images/coin.png",
    h1: "Coin",
    p: <p>
     Buy direct mutual funds online, commission- <br /> free, delivered directly to your Demat <br /> account. Enjoy the investment experience <br /> on your Android and iOS devices.
    </p>,
    a: ["Coin"],
    button: ["/media/images/googlePlayBadge.svg","/media/images/appstoreBadge.svg"]
  };
  const data4 = {
    mainImg: "/media/images/kiteconnect.png",
    h1: "Kite Connect API",
    p: <p>
    Build powerful trading platforms and <br /> experiences with our super simple <br /> HTTP/JSON APIs. If you are a startup, build <br /> your investment app and showcase it to our <br /> clientbase.
    </p>,
    a: ["Kite Connect "],
    button: []
  };
  const data5 = {
    mainImg: "/media/images/varsity.png",
    h1: "Varsity mobile",
    p: <p>
   An easy to grasp, collection of stock market <br /> lessons with in-depth coverage and <br /> illustrations. Content is broken down into <br /> bite-size cards to help you learn on the go.
    </p>,
    a: ["Kite Connect "],
    button: ["/media/images/googlePlayBadge.svg","/media/images/appstoreBadge.svg"]
  };
  return (
    <>
      
      <Hero />
      <LeftSection data={data1} />
      <RightSection data={data2} />
      <LeftSection data={data3} />
      <RightSection data={data4} />
      <LeftSection data={data5} />
      <Universe />
    
    </>
  )
}
