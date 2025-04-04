import React from 'react'
import FaqsCard from '../component/FaqsCard'

export default function FAQS() {
  const faqs=[{
    question:"What is Varsity Certified?",
    answer:"Varsity Certified is an online certification program by Zerodha Varsity. It requires you to complete studying the Basics of stock market, Fundamental Analysis, Technical Analysis, and Personal Finance – Mutual Funds modules of Varsity and take a proctored test."
  },
  { question:"Does Zerodha provide study material for the test?",
    answer:"Yes, the study material is available in both text and video format. Check out the first three and Personal Finance – Mutual Funds (No. 11) modules of Varsity."},
  { question:"How do I schedule a test?",
    answer:"Click on the Register for Certificate button above and follow the on-screen instructions."},
  { question:"Is there a fee for the online test?",
    answer:"Yes, a nominal fee of Rs. 250 (+18% GST) is charged for the test. The test is proctored and the fee charged is to cover the cost of organising the test."},
  { question:"What is the test format? What is the cut-off to be certified?",
    answer:"The test contains 100 multiple choice questions to be answered within 100 minutes. The certificate is awarded to candidates who score more than 65%."},
  { question:"When will I get the test result?",
    answer:"The test result, along with the certificate, will be available instantly after the test."},
  { question:"Does Zerodha offer a job if I pass this test?",
    answer:"No, Zerodha doesn’t offer a job solely based on the result of this test."},
  

];
  return (
  <div className="container p-5">
    <h3>FAQs</h3>
   
    {faqs.map((faq)=>{
       return <FaqsCard data={faq}/>
    })}
  </div>
  )
}
