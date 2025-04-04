import React from 'react'

export default function MarketOverview() {
    return (
        <div style={{ padding: "40px 20px" }}>
            <h6 style={{ fontWeight: "400" }}><i class="fa-solid fa-chart-line"></i> &nbsp;&nbsp; Market overview</h6>
            <div className="row">
                <div className="col-6">
                    <img style={{ width: "100%" }} src="/media/kite/image.png" alt="" />
                </div>
                <div className="col-6">
                    <center>
                        <img style={{ height: "100px" }} src="/media/kite/positions.svg" alt="" />
                        <p>You don't have any positions yet</p>
                        <button style={{ all: "unset", padding: "5px 20px", borderRadius: "5px", backgroundColor: "blue", color: "white" }}>Get Started</button>
                    </center>

                </div>
            </div>
        </div>
    )
}
