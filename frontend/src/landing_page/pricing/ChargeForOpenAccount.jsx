import React from 'react'

export default function ChargeForOpenAccount() {
  return (
    <div className="container " style={{ paddingTop: "80px" }}>
      <h2 className='pb-4' style={{ fontSize: "1.5rem", fontWeight: "500" }}>Charges for account opening</h2>

      <table className="w-100 table table-borderless table-striped" style={{ border: "1px solid #e0e0e0", borderRadius: "5px" }}>
  <thead style={{ borderBottom: "1px solid #e0e0e0" }}>
    <tr>
      <th style={{ width: "80%", color: "#4a4a4a", fontWeight: "600" }}>Type of account</th>
      <th style={{ width: "20%", color: "#4a4a4a", fontWeight: "600" }}>Charges</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Online account</td>
      <td>
        <div className="p-1 text-center" style={{ display: "inline-block", borderRadius: "0.2rem", backgroundColor: "#4CAF50", color: "#fff", height: "23px", width: "50px" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: "500", margin: "0" }}>FREE</p>
        </div>
      </td>
    </tr>
    <tr style={{ backgroundColor: "#f9f9f9" }}>
      <td>Offline account</td>
      <td>
        <div className="p-1 text-center" style={{ display: "inline-block", borderRadius: "0.2rem", backgroundColor: "#4CAF50", color: "#fff", height: "23px", width: "50px" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: "500", margin: "0" }}>FREE</p>
        </div>
      </td>
    </tr>
    <tr>
      <td>NRI account (offline only)</td>
      <td>₹ 500</td>
    </tr>
    <tr style={{ backgroundColor: "#f9f9f9" }}>
      <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
      <td>₹ 500</td>
    </tr>
  </tbody>
</table>

    </div>
  )
}
