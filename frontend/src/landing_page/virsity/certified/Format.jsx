import React from 'react'

export default function Format() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6" style={{paddingLeft:"70px"}}>
                    <h3>Format</h3>
                    <p className='mb-5' style={{ color: "gray" }}>Answer 100 multiple-choice online questions in 100 minutes.</p>
                    <h3>Eligibility</h3>
                    <p className='mb-4' style={{ color: "gray" }}>Score a minimum of 65% and get a certificate as soon as you clear the test.</p>
                </div>
                <div className="col-6"style={{padding:" 0px 30px",paddingRight:"80px"}}><h3>Test topics</h3>
                <p className='mb-4' style={{ color: "gray" }}>Introduction to stock markets, Fundamental analysis, Technical Analysis, and Personal Finance (Mutual Funds)
                Study material is available in both text and video format. It is recommended to go through the text content for exhaustive information while using the videos as an aid to learning. Ensure to give yourself 2 to 4 weeks for preparation.</p></div>
            </div>
        </div>
    )
}
