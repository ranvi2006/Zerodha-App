import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function Fund() {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);
  const [field, setField] = useState({
    credit: 0,
    debit: 0
  });

  const [active, setActive] = useState({
    credit: false,
    debit: false
  });

  function handleField(e) {
    setField((res) => {
      return {
        ...res,
        [e.target.className]: e.target.value
      }
    });
    console.log(field);
  }
  function getUsedMargin() {
    let sum = 0;
    for (let i = 0; i < order.length; i++) {
      sum = sum + order[i].price * order[i].quantity;
    }
    return (sum / 100) * 20;
  }

  async function creditfunds() {
    if (localUser.phoneNo && field.credit!=0) {
      const responce = await axios.post(`${import.meta.env.VITE_API_URL}/auth/creditFunds`, {
        phoneNo: localUser.phoneNo,
        amount: field.credit
      });
      
console.log(responce.data);
      if(responce.data.success)
      {
        setActive((res) => {
          return {
            ...res,
            debit:!active.credit,
            credit: !active.credit
          }
        });
      }
    }
    else{
      setActive((res) => {
        return {
          ...res,
          debit:active.credit,
          credit: !active.credit
        }
      });
    }
    

  }
  async function debitfunds() {
    if (localUser.phoneNo && field.debit!=0) {
      const responce = await axios.post(`${import.meta.env.VITE_API_URL}/auth/debitFunds`, {
        phoneNo: localUser.phoneNo,
        amount: field.debit
      });
      
console.log(responce.data);
      if(responce.data.success)
      {
        setActive((res) => {
          return {
            ...res,
            debit:!active.debit,
            credit: !active.debit
          }
        });
      }
    }
    else{
      setActive((res) => {
        return {
          ...res,
          debit:active.debit,
          credit: !active.debit
        }
      });
    }
    
  }

  console.log("funds", order);
  return (
    <div style={{ height: "100%", padding: "20px 0 " }}>
      <div style={{ height: "10vh", display: "flex", flexDirection: "row-reverse", alignItems: "baseline" }}>
        <button onClick={debitfunds} style={{ backgroundColor: "blue", borderRadius: "5px", height: "fit-content", padding: "5px 20px", border: "none", marginLeft: "4px", color: "white" }}>Withdraw</button>
        {active.debit ? <input onChange={handleField} className='debit' type="number" /> : null}
        <button onClick={creditfunds} style={{ backgroundColor: "green", borderRadius: "5px", height: "fit-content", padding: "5px 20px", border: "none", marginLeft: "4px", color: "white" }}>Add</button>
        {active.credit ? <input onChange={handleField} className='credit' type="number" /> : null}
        <p style={{ color: "gray", fontSize: ".8rem", marginRight: "10px" }}>Instant, zero-cost fund transfers with <img src="/media/kite/UPI.svg" style={{ height: "7px" }} alt="" /> </p>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <p style={{ fontSize: "1.1rem", paddingTop: "20px", paddingLeft: "30px" }}> <i class="fa-solid fa-clock me-2"></i>Equity</p>
            </div>
            <div className="col-6" style={{ display: "flex", alignItems: "center", flexDirection: "row-reverse", paddingRight: ".5vw" }}>

              <a className='mt-3' style={{ textDecoration: "none", fontSize: ".6rem", marginLeft: "20px" }} href=""><i class="fa-solid fa-circle-exclamation"></i> help</a>
              <a className='mt-3' style={{ textDecoration: "none", fontSize: ".6rem" }} href=""> <img style={{ height: "9px", marginBottom: "5px", marginRight: "5px" }} src="/media/kite/console.svg" alt="" />view statement</a>
            </div>
          </div>
          <div style={{ width: "98%", minHeight: "80vh", border: ".5px solid rgb(242, 242, 242)", paddingTop: "30px" }}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px" }}> Available margin</p>
              <b style={{ marginLeft: "100 px", fontSize: "2rem", fontWeight: "400" }}>{(((user.totalFunds) - getUsedMargin()) + "").substring(0, 6)}</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px" }}> Used margin</p>
              <b style={{ marginLeft: "100 px", fontSize: "2rem", fontWeight: "400" }}>{(getUsedMargin() + "").substring(0, 6)}</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px" }}>Available cash</p>
              <b style={{ marginLeft: "100 px", fontSize: "2rem", fontWeight: "400" }}>{user.totalFunds}.00</b>
            </div>

            {/* -- */}
            <hr style={{ width: "80%", margin: "auto", paddingTop: "40px" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}>Opening balance</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}> Payin</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}>Payout</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}> SPAN</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}> Delivery margin</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}>Exposure</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}>Options premium</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>

            {/* -- */}
            <hr style={{ width: "80%", margin: "auto", padding: "40px 0" }} />


            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}> Collateral (Liquid funds)</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}>Collateral (Equity)</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}>Total collateral</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>



          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <p style={{ fontSize: "1.1rem", paddingTop: "20px", paddingLeft: "30px" }}> <i class="fa-solid fa-droplet me-2"></i>  commodity</p>
            </div>
            <div className="col-6" style={{ display: "flex", alignItems: "center", flexDirection: "row-reverse", paddingRight: ".5vw" }}>

              <a className='mt-3' style={{ textDecoration: "none", fontSize: ".6rem", marginLeft: "20px" }} href=""><i class="fa-solid fa-circle-exclamation"></i> help</a>
              <a className='mt-3' style={{ textDecoration: "none", fontSize: ".6rem" }} href=""> <img style={{ height: "9px", marginBottom: "5px", marginRight: "5px" }} src="/media/kite/console.svg" alt="" />view statement</a>
            </div>
          </div>
          <div style={{ width: "98%", minHeight: "80vh", border: ".5px solid rgb(242, 242, 242)", paddingTop: "30px" }}>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px" }}> Available margin</p>
              <b style={{ marginLeft: "100 px", fontSize: "2rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px" }}> Used margin</p>
              <b style={{ marginLeft: "100 px", fontSize: "2rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px" }}>Available cash</p>
              <b style={{ marginLeft: "100 px", fontSize: "2rem", fontWeight: "400" }}>0.00</b>
            </div>

            {/* -- */}
            <hr style={{ width: "80%", margin: "auto", paddingTop: "40px" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}>Opening balance</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}> Payin</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}>Payout</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}> SPAN</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}> Delivery margin</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}>Exposure</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 30px" }}>
              <p style={{ color: "gray", fontWeight: "40px", fontSize: "1rem" }}>Options premium</p>
              <b style={{ marginLeft: "100 px", fontSize: "1rem", fontWeight: "400" }}>0.00</b>
            </div>





          </div>
        </div>





      </div>
    </div>
  )
}
