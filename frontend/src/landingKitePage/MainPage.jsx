import React, { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Shares from './Shares'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import validationRoutes from '../function/Validation'
import { updateUser } from '../features/user/userSlice'
import { addWatchList, deleteWatchList } from '../features/watchlist/watchlistSlice'
import axios, { Axios } from 'axios'
import { cencelBuy } from '../features/buy/buySlice'
import { addOrder } from '../features/order/orderSlice'


export default function MainPage() {
  const [err,setErr]=useState({
    buy:{
      success:false,
      message:""
    }
  });
  const order = useSelector((state) => state.order);
  function getUsedMargin() {
    let sum = 0;
    for (let i = 0; i < order.length; i++) {
      sum = sum + order[i].price * order[i].quantity;
    }
    return (sum / 100) * 20;
  }
  const [quantity, setQuantity] = useState(1);
  function setQuan(e) {
    setQuantity(e.target.value);
  }
  const buy = useSelector((state) => state.buy);
  console.log("buy", buy);

  const [fgColor, setFgColor] = useState("#568cbf");

  const user = useSelector((state) => state.user);
  const watchlist = useSelector((state) => state.watchlist);

  // console.log("watchList",watchlist);
  const localUser = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // ============================================
  async function fatchOrder() {
      if (localUser.phoneNo) {
        const response = await axios.post("http://localhost:3000/auth/getOrder", { phoneNo: localUser.phoneNo });
        
        dispatch(addOrder(response.data.orders));
      }
    }
  
    useEffect(() => {
      fatchOrder();
    },);

  function changeFg() {
    if (fgColor == "#568cbf") {
      setFgColor("#e66e31");
    }
    else {
      setFgColor("#568cbf");
    }
  }
  async function fatchWatchList() {
    if (localUser.phoneNo) {
      const lists = await axios.post("http://localhost:3000/auth/getWatchList", {
        phoneNo: localUser.phoneNo
      });
      // console.log("Lists",lists.data.watchlist);
      dispatch(addWatchList(lists.data.watchlist));
    }
  }
  useEffect(() => {
    fatchWatchList();
  }, [user]);



  // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  async function fatchData() {
    if (!localUser.phoneNo) {
      navigate("/signup"); // If no phone number, navigate to signup
    } else {
      try {
        if (localUser.phoneNo) {
          const url = "http://localhost:3000/auth/getUser";
          const response = await axios.post(url, {
            phoneNo: localUser.phoneNo
          });


          // Check if the response data has the expected structure

          const newUserData = response.data.user;

          // Dispatch action to update user state
          dispatch(updateUser(newUserData));
        }


      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    }
  }

  useEffect(() => {
    fatchData();
  }, []); // This runs once when the component mounts

  // This will run whenever the `user` state changes
  // """"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
  async function buyShare(id) {
    console.log((getUsedMargin()+((buy.buy.price*quantity)/100)*20),"==",user.totalFunds)
    if ((getUsedMargin()+((buy.buy.price*quantity)/100)*20)< user.totalFunds) {
      try {
        const responce = await axios.post("http://localhost:3000/auth/addOrder", {
          phoneNo: localUser.phoneNo,
          quantity: quantity,
          id: buy.buy._id
        });
        console.log(responce);
        if (responce.data.success) {
          dispatch(cencelBuy({}));
        }
      } catch (error) {
        console.log(error);
      }
    }else
    {
      setErr((res) => {
        return {
          ...res,
          buy: {
            ...res.buy,
            success: true,
            message: "insuffisent Funds"
          }
        }
      });
    }
  }
  async function removeOrder(id) {
    const foundOrder = order.find(res => res._id === buy.buy._id);
    
    console.log("quan",foundOrder);
   
    if (foundOrder.quantity>=quantity) {
      try {
        const responce = await axios.post("http://localhost:3000/auth/removeOrder", {
          phoneNo: localUser.phoneNo,
          quantity: quantity,
          id: buy.buy._id
        });
        if(responce.data.success)
        {
          dispatch(cencelBuy({}));
        }
      } catch (error) {
        console.log(error);
      }
    }else
    {
      setErr((res) => {
        return {
          ...res,
          buy: {
            ...res.buy,
            success: true,
            message: `You can sell only ${foundOrder.quantity}`
          }
        }
      });
    }
  }
  





  return (
    <>

      <div className="" style={{ width: '100vw', backgroundColor: "red", height: "100vh" }} >
        <Navbar />
        <div className="container-fluid p-0">
          <div className="col-4" style={{ height: "86vh", width: "33vw", border: ".1px solid #8080805c", backgroundColor: "white", position: "fixed", top: "7vh", boxShadow: "2px 2px 8px gray" }}>
          
            {/* top left area */}
            {watchlist.map((res, i) => {
              return <Shares share={res} id={i} />
            })}


          </div>
          <div className="col-4" style={{ height: "7vh", width: "33vw", border: ".1px solid #8080805c", backgroundColor: "white", position: "fixed", bottom: "0", display: "flex" }}>
            <button className='a' style={{ cursor: "pointer", all: "unset", height: "100%", borderRight: ".1px solid #8080805c", width: "12.5%", display: "flex", justifyContent: "center", alignItems: "center" }}>1</button>
            <button className='b' style={{ cursor: "pointer", all: "unset", height: "100%", borderRight: ".1px solid #8080805c", width: "12.5%", display: "flex", justifyContent: "center", alignItems: "center" }}>2</button>
            <button className='c' style={{ cursor: "pointer", all: "unset", height: "100%", borderRight: ".1px solid #8080805c", width: "12.5%", display: "flex", justifyContent: "center", alignItems: "center" }}>3</button>
            <button className='d' style={{ cursor: "pointer", all: "unset", height: "100%", borderRight: ".1px solid #8080805c", width: "12.5%", display: "flex", justifyContent: "center", alignItems: "center" }}>4</button>
            <button className='e' style={{ cursor: "pointer", all: "unset", height: "100%", borderRight: ".1px solid #8080805c", width: "12.5%", display: "flex", justifyContent: "center", alignItems: "center" }}>5</button>
            <button className='f' style={{ cursor: "pointer", all: "unset", height: "100%", borderRight: ".1px solid #8080805c", width: "12.5%", display: "flex", justifyContent: "center", alignItems: "center" }}>6</button>
            <button className='g' style={{ cursor: "pointer", all: "unset", height: "100%", borderRight: ".1px solid #8080805c", width: "12.5%", display: "flex", justifyContent: "center", alignItems: "center" }}>7</button>
            <button className='s' style={{ cursor: "pointer", all: "unset", height: "100%", borderRight: ".1px solid #8080805c", width: "12.5%", display: "flex", justifyContent: "center", alignItems: "center" }}><i class="fa-solid fa-gear"></i></button>
          </div>
          <div className="" style={{ height: "93vh", width: "67vw", backgroundColor: "white", position: "fixed", top: "7.1vh", right: "0", boxShadow: "2px 2px 8px gray", padding: "20px", overflow: "scroll" }}>

            {/* right top area */}
            <Outlet />

            {buy.isBuy ?
              <div className="buyFrg" style={{ height: "73vh", width: "24vw", position: "fixed", bottom: "0px", left: "40vw", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(0, 0, 0, 0.2)", backgroundColor: "white", borderRadius: "5px", overflow: "hidden" }}>

                <button
                  onClick={() => dispatch(cencelBuy({}))}
                  style={{ position: "absolute", right: "1px", backgroundColor: "transparent", border: "none" }} ><i class="fa-solid fa-xmark"></i></button>

                <div style={{ width: "100%", height: "17%", backgroundColor: fgColor, color: "white" }}>
                  <div className="row p-0 m-0">

                    <div className="col-6 m-0" style={{ display: "flex", justifyContent: "start", padding: "10px 30px" }}>
                      <h6>{buy.buy.shareName}</h6>
                    </div>
                    <div className="col-6 m-0" style={{ display: "flex", justifyContent: "end", padding: "10px 30px" }}>
                      <div class="form-check form-switch">
                        <input onChange={changeFg} class="form-check-input" type="checkbox" id="toggleSwitch" />

                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ position: "relative", bottom: "10px", color: "white" }}>
                    <div className="col-5" style={{ display: "flex", alignItems: "center", marginLeft: "30px" }}>
                      <input type="radio" /><b style={{ fontSize: ".7rem", fontWeight: "500" }}>&nbsp; BSE ₹{buy.buy.price}</b>
                    </div>
                    <div className="col-5" style={{ display: "flex", alignItems: "center" }}>
                      <input type="radio" /><b style={{ fontSize: ".7rem", fontWeight: "500" }}>&nbsp; BSE ₹{buy.buy.price}</b>
                    </div>

                  </div>
                </div>
                {/* ------------------- */}
                <div className="row" style={{ backgroundColor: "#f6f0ed" }}>
                  <div className="col-3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <p style={{ fontSize: ".8rem", fontWeight: "500", color: fgColor, borderBottom: `2px solid ${fgColor}` }}>Quick</p>
                  </div>
                  <div className="col-3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <p style={{ fontSize: ".8rem", fontWeight: "500", color: "gray" }}>Regular</p>
                  </div>
                  <div className="col-3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <p style={{ fontSize: ".8rem", fontWeight: "500", color: "gray" }}>AMO</p>
                  </div>

                  <div className="col-3"></div>
                </div>

                {/* ------------------------------ */}
                <div style={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
                  <p style={{ padding: "0px 5px", backgroundColor: "white", height: "fit-content", alignSelf: "start", margin: "0", padding: "0", position: "relative", top: "31px", left: "25px" }}>Qty</p>
                  <input value={quantity} onChange={setQuan} placeholder='1' type='text' style={{ border: "1px solid gray", height: "8vh", width: "88%", marginTop: "20px", borderRadius: "2px" }}>

                  </input>

                  <div style={{ width: "100%", marginLeft: "35px", position: "relative", top: "-25px" }}>
                    <p style={{ opacity: "0.2", padding: "0px 5px", backgroundColor: "white", height: "fit-content", alignSelf: "start", margin: "0", padding: "0", position: "relative", top: "31px", left: "8px" }}>Qty</p>
                    <div style={{ opacity: "0.2", border: "1px solid gray", height: "8vh", width: "88%", marginTop: "20px", borderRadius: "2px" }}>
                      <img style={{ height: "fit-content" }} src="/media/image.png" alt="" />
                    </div>
                  </div>

                  <div style={{ width: "100%", marginLeft: "35px", position: "relative", top: "-20px" }}>
                    <input type="checkbox" /> <span style={{ fontSize: ".8rem", fontWeight: "500", marginBottom: "10px" }}>intraday</span>
                  </div>



                </div>

                <div style={{ padding: "20px 20px ", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", top: "-30px" }}>

                  <div style={{ width: "100%" }}>
                    <p style={{ opacity: "0.7", fontWeight: "500", fontSize: ".8rem" }}>Req. ₹{(((((buy.buy.price) / 100) * 20) * quantity) + "").substring(0, 7)} <span style={{ opacity: ".4" }}>+0.03</span> Avail. ₹{(((user.totalFunds)-getUsedMargin())+"").substring(0,6)}</p>

                    <p style={{fontSize:".7rem",fontWeight:"500",color:"red"}}>{err.buy.message}</p>
                    
                    {buy.buy.isBuy && fgColor=="#568cbf" ?
                      <button
                        onClick={buyShare}
                        style={{ width: "250px", backgroundColor: fgColor, border: "none", borderRadius: "3px", padding: "5px 0px" }}>Buy</button>
                      :
                      <button
                      onClick={removeOrder}
                      style={{ width: "250px", backgroundColor: fgColor, border: "none", borderRadius: "3px", padding: "5px 0px" }}>Sell</button>
                    }


                    <br />
                    <button style={{ width: "250px", marginTop: "10px", border: "none", borderRadius: "3px", padding: "5px 0px", border: "1px solid gray" }}>Cencel</button>
                  </div>

                </div>



              </div>
              : null}

          </div>



        </div>
      </div>
    </>

  )
}
