import React from 'react'

export default function ChargeForService() {
  return (
    <div className="container " style={{ paddingTop: "80px", paddingBottom:"80px" }}>
    <h2 className='pb-4' style={{ fontSize: "1.5rem", fontWeight: "500" }}>Charges for optional value added services</h2>

    <table className="w-100 table table-borderless table-striped" style={{ border: "1px solid #e0e0e0", borderRadius: "5px" }}>
  <thead style={{ borderBottom: "1px solid #e0e0e0" }}>
    <tr>
      <th style={{ width: "25%", color: "#4a4a4a", fontWeight: "600" }}>Service</th>
      <th style={{ width: "25%", color: "#4a4a4a", fontWeight: "600" }}>Billing Frequency</th>
      <th style={{ width: "25%", color: "#4a4a4a", fontWeight: "600" }}>Charges</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tickertape</td>
      <td>Monthly / Annual</td>
      <td>
        <span style={{ fontWeight: "500",}}>Free: 0</span> | Pro: ₹249 / ₹2399
      </td>
    </tr>
    <tr style={{ backgroundColor: "#f9f9f9" }}>
      <td>Smallcase</td>
      <td>Per transaction</td>
      <td>Buy & Invest More: ₹100 | SIP: ₹10</td>
    </tr>
    <tr>
      <td>Kite Connect</td>
      <td>Monthly</td>
      <td>Connect: ₹2000 | Historical: ₹2000</td>
    </tr>
  </tbody>
</table>

  </div>
  )
}
