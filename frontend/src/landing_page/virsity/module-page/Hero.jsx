import React from 'react'
import ModuleComp from '../component/ModuleComp'
import { Link } from 'react-router-dom';

export default function Hero() {

    const modules = [
        {
          title: "Introduction to Stock Markets",
          chapters: 15,
          description:
            "The stock market can play a pivotal role in ensuring your financial security. In this module, you will learn how to get started in the stock market, its fundamentals, how it functions, and the various intermediaries that appertain it.",
        },
        {
          title: "Technical Analysis",
          chapters: 22,
          description:
            "Technical Analysis (TA) helps in developing a point of view. In this module, we will discover the complex attributes, various patterns, indicators, and theories of TA that will help you as a trader to find upright trading opportunities in the market.",
        },
        {
          title: "Fundamental Analysis",
          chapters: 16,
          description:
            "The Fundamental Analysis (FA) module explores Equity research by reading financial statements and annual reports, calculating and analyzing Financial Ratios, and evaluating the intrinsic value of a stock to find long-term investing opportunities.",
        },
        {
          title: "Futures Trading",
          chapters: 13,
          description:
            "Futures Trading is a segment of the derivatives market. This module covers the various intricacies involved in undergoing a futures trade, including margins, leverages, pricing, etc. It also discusses the use of derivatives for hedging purposes.",
        },
        {
          title: "Options Theory for Professional Trading",
          chapters: 25,
          description:
            "Options Trading is a segment of the derivatives segment. Options contracts grant the buyer the right to buy/sell the underlying without a compulsory obligation. This module discusses options contracts, Option Greeks, and their profit and loss payoffs.",
        },
        {
          title: "Option Strategies",
          chapters: 14,
          description:
            "A trader can use options strategies to monetize their views on volatility, sentiment, and timing. This module explores various options strategies that can be built with a multi-dimensional approach involving Option Greeks, Risk-Return, etc.",
        },
        {
          title: "Markets and Taxation",
          chapters: 8,
          description:
            "As a trader in India, you should be informed of the taxes applicable to your investments and trades. This module outlines essential topics like calculating your turnover, preparing balance sheet and P&L statements, and filing your Income Tax Returns.",
        },
        {
          title: "Currency, Commodity, and Government Securities",
          chapters: 8,
          description:
            "Interest rates, forex rates, and inflation impact each other and commodity prices. Commodity prices impact each other, too. This module discusses trading in currency and commodity derivatives and Government Securities (GSec) in the Indian markets.",
        },
        {
          title: "Risk Management and Trading Psychology",
          chapters: 16,
          description:
            "Trading and investing are subject to risks. Our emotions also influence our choices in the market and could aggravate risks. This module discusses risk and risk management tools along with the psychology required for sustaining in the markets.",
        },
        {
          title: "Trading Systems",
          chapters: 16,
          description:
            "Have you considered building your own Trading System? Well, then, this module is for you. In this module, we will learn about the components of a good trading system and rule, including the techniques and different types of Trading Systems.",
        },
        {
          title: "Personal Finance - Mutual Funds",
          chapters: 32,
          description:
            "Managing personal finances can help you achieve your short-term and long-term financial goals. This module encompasses the various aspects of personal finance, such as retirement planning, mutual funds, ETFs, bonds, and goal-oriented investments.",
        },
        {
          title: "Innerworth - Mind over markets",
          chapters: 603,
          description:
            "Originally a collection of newsletters on trading psychology published between 2002 and 2007 by Marketwise, a US stock broking firm, 'Innerworth - Mind over Markets' will guide you and prepare you psychologically to become a rational trader.",
        }, {
            title: "Integrated Financial Modelling",
            chapters: 18,
            description:
              "An integrated financial model of a company breaks down the financials of a company to give you granular insights. A financial model includes assets, reserves, debt schedules, cashflows, and valuation models. Learn all that and more in this module.",
          },
          {
            title: "Personal Finance - Insurance",
            chapters: 9,
            description:
              "If you have been working on your financial plan and prepared to tackle any unforeseen eventualities, it is crucial to be prepared for insurance. The short chapters in this module elucidate the importance of insurance in one's life.",
          },
          {
            title: "Sector Analysis",
            chapters: 15,
            description:
              "Sector analysis is an extension of fundamental analysis. Each sector exhibits unique features and reacts differently to the same market forces. This module helps you understand what to look for in each sector as a stock picker or an equity investor.",
          },
          {
            title: "Social Stock Exchanges (SSEs)",
            chapters: 4,
            description:
              "Social Stock Exchange is a new segment on stock exchanges meant to enable investors to donate/invest in social enterprises. SSEs will act as a bridge between the less-informed but willing donors and legitimate organizations doing real social work.",
          },
          {
            title: "NPS: National Pension Scheme",
            chapters: 8,
            description:
              "Know all the nuances of investing in the National Pension Scheme, a voluntary retirement scheme for all Indians. Understand how NPS compares to other retirement-focused investment products and the product's suitability.",
          },
      ];
      
  return (
   <div className="Hero" style={{padding:"40px 20px"}}>
    <h1 className='mb-5' style={{fontSize:"4rem",fontWeight:"700"}}>Modules</h1>
    <div style={{display:"flex",flexWrap:"wrap",alignItems:"baseline"}}>
  


  {
    modules.map((data,i)=>{
        return <ModuleComp module={data} number={i}/>
    })
  }
   
    </div>
   </div>
  )
}
