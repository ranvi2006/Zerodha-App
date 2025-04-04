import React, { useState } from 'react'

export default function Equity() {
    const [handleA, setHandleA] = useState({
        f: true,
        s: false,
        t: false
    });

    function handleButton(e) {
        e.preventDefault();
        console.log("cicked");
        const cl = e.target.className.charAt(0);
        const ob = {
            f: false,
            s: false,
            t: false
        }
        ob[cl] = true;
        setHandleA(ob);

    }
    return (
        <>
            <div className="container mb-5">
                <div>

                    <a onClick={handleButton} className='f fs-3 me-3' style={{ fontWeight: "500", padding: "10px 0px", padding: "10px 35px", textDecoration: "none", height: "100%", color: handleA.f ? "gray":"#387ED1", borderBottom: handleA.f ? "2px solid #387ED1" : "" }} href="">Equity</a>

                    <a onClick={handleButton} className='s fs-3 me-3' style={{ fontWeight: "500", padding: "10px 0px", padding: "10px 5px", textDecoration: "none", height: "100%", color: handleA.s ? "gray":"#387ED1", borderBottom: handleA.s ? "2px solid #387ED1" : "" }} href="">Currency</a>

                    <a onClick={handleButton} className='t fs-3 me-3' style={{ fontWeight: "500", padding: "10px 0px", padding: "10px 5px", textDecoration: "none", height: "100%", color: handleA.t ? "gray":"#387ED1", borderBottom: handleA.t ? "2px solid #387ED1" : "" }} href="">Commodity</a>

                </div>
                <hr className='m-2'></hr>
                {/* ------------------ */}
                {handleA.f ?

                    <div className="row pt-2">
                        <table
                            className=""
                            style={{ borderCollapse: "separate", borderSpacing: "10px" }}
                        >
                            <thead>
                                <tr style={{ borderBottom: "1px solid gray" }}>
                                    <th style={{ opacity: "0" }}>-----------</th>
                                    <th>Equity Delivery</th>
                                    <th>Equity Intraday</th>
                                    <th>F&O - Futures</th>
                                    <th>F&O - Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Brokerage</td>
                                    <td>Zero Brokerage</td>
                                    <td>0.03% or ₹20/executed <br /> order, whichever is lower</td>
                                    <td>0.03% or ₹20/executed <br /> order, whichever is lower</td>
                                    <td>Flat ₹20 per executed order</td>
                                </tr>
                                <tr>
                                    <td>STT/CTT</td>
                                    <td>0.1% on buy & sell</td>
                                    <td>0.025% on the sell side</td>
                                    <td>0.02% on the sell side</td>
                                    <td>
                                        <ul style={{ padding: "0", listStylePosition: "inside" }}>
                                            <li>0.125% of the intrinsic value on options exercised</li>
                                            <li>0.1% on sell side (on premium)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Transaction Charges</td>
                                    <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
                                    <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
                                    <td>NSE: 0.00297% <br /> BSE: 0.00375%</td>
                                    <td>NSE: 0.03503% (on premium) <br /> BSE: 0.0325% (on premium)</td>
                                </tr>
                                <tr>
                                    <td>GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <td>SEBI Charges</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                <tr>
                                    <td>Stamp Charges</td>
                                    <td>0.015% or ₹1500 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                    <td>0.002% or ₹300 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    : null}
                {/* ------------------- */}
                {/* ------------------ */}
                {handleA.s ?

                    <div className="row pt-5">

                        <table
                            className=""
                            style={{ borderCollapse: "separate", borderSpacing: "10px" }}
                        >
                            <thead>
                                <tr style={{ borderBottom: "1px solid gray" }}>
                                    <th style={{ opacity: "0" }}>-----------</th>
                                    <th>Currency futures</th>
                                    <th>Currency options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Brokerage</td>
                                    <td>Brokerage</td>
                                    <td>0.03% or ₹20/executed <br /> order, whichever is lower</td>

                                </tr>
                                <tr>
                                    <td>STT/CTT</td>
                                    <td>No STT</td>
                                    <td>No STT</td>


                                </tr>
                                <tr>
                                    <td>Transaction Charges</td>
                                    <td>NSE: 0.00035% <br />
                                        BSE: 0.00045%</td>
                                    <td>NSE: 0.0311% <br /> BSE: 0.001%</td>

                                </tr>
                                <tr>
                                    <td>GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>

                                </tr>
                                <tr>
                                    <td>SEBI Charges</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>

                                </tr>
                                <tr>
                                    <td>Stamp Charges</td>
                                    <td>0.0001% or ₹10 / crore on buy side</td>
                                    <td>0.0001% or ₹10 / crore on buy side</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>

                    : null}
                {/* ------------------- */}
                {/* ------------------ */}
                {handleA.t ?

                    <div className="row pt-5">

                        <table
                            className=""
                            style={{ borderCollapse: "separate", borderSpacing: "10px" }}
                        >
                            <thead>
                                <tr style={{ borderBottom: "1px solid gray" }}>
                                    <th style={{ opacity: "0" }}>-----------</th>
                                    <th>Currency futures</th>
                                    <th>Currency options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Brokerage</td>
                                    <td>Brokerage</td>
                                    <td>0.03% or ₹20/executed <br /> order, whichever is lower</td>

                                </tr>
                                <tr>
                                    <td>STT/CTT</td>
                                    <td>0.01% on sell side (Non-Agri)</td>
                                    <td>0.05% on sell side</td>


                                </tr>
                                <tr>
                                    <td>Transaction Charges</td>
                                    <td>MCX: 0.0021% <br />
                                        NSE: 0.0001%</td>
                                    <td>MCX: 0.0418% <br />
                                        NSE: 0.001%</td>

                                </tr>
                                <tr>
                                    <td>GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>

                                </tr>
                                <tr>
                                    <td>SEBI Charges</td>
                                    <td>Agri: <br />
                                        ₹1 / crore <br />
                                        Non-agri: <br />
                                        ₹10 / crore</td>
                                    <td>₹10 / crore</td>

                                </tr>
                                <tr>
                                    <td>Stamp Charges</td>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>

                            </tbody>
                        </table>


                    </div>


                    : null}
                {/* ------------------- */}


<div className="row text-center mt-4 mb-4">
    <h4><a href="" style={{textDecoration:"none"}}>Calculate your costs upfront</a> using our brokerage calculator</h4>
</div>
            </div>
            <script>

            </script>
        </>

    )
}
