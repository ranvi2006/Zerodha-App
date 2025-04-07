import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import axios from 'axios';
import validationRoutes from "../../function/Validation"

export default function Hero() {
  const user = useSelector((state) => state.user);
  const localUser = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    adhar: "",
    dob: "",
  });

  // State for checkbox and button background color
  const [checkbox, setCheckBox] = useState(false);
  const [bg, setBg] = useState("#1a77eb");

  async function fatchData() {
    if (!localUser.phoneNo) {
      navigate("/signup");
    }
    else {
      try {
        const url = `${import.meta.env.VITE_API_URL}/auth/getUser`;
        const response = await axios.post(url, {
          phoneNo: localUser.phoneNo
        });
        const newUserData = response.data.user;
        dispatch(updateUser(newUserData));

      } catch (err) {
        setErr((res) => {
          return {
            ...res,
            global: {
              ...res.global,
              success: true,
              message: err.message || "Some Api Error Occure"
            }
          }
        });
      }
    }
  }

  useEffect(() => {
    fatchData();
  }, []);
  useEffect(() => {

    navigate(validationRoutes(user));
  }, [user]);
  console.log("Local user -3-", localUser);
  console.log("user -3-", user);



  const handleFieldChange = (e) => {
    const { value, className } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [className]: value,
    }));
  };

  const handleCheckboxToggle = () => {
    setCheckBox(!checkbox);
  };

  const handleButtonClick = async () => {
    setBg("white");
    setTimeout(() => {
      setBg("#1a77eb");
    }, 100);
    if (checkbox && formData.adhar != "", formData.name != "", formData.dob != "") {
      try {
        const body = {
          phoneNo: localUser.phoneNo,
          adharCard: {
            name: formData.name,
            number: formData.adhar,
            dob: formData.dob
          }
        }
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/sendDataAndUpdate`, body);

        dispatch(updateUser(response.data.user));

        navigate("/auth/step4");


      } catch (err) {
        // setErr((res) => {
        //   return {
        //     ...res,
        //     global: {
        //       ...res.global,
        //       success: true,
        //       message: "Bad Api Call"
        //     }
        //   }
        // });
      }
    }
  };

  return (
    <div style={{ height: "85vh" }}>
      <main style={{ minHeight: "60vh", padding: "0px 20px", marginTop: "15vh", overflowX: "hidden", paddingBottom: "50vh" }}>
        <div className="row" style={{ paddingLeft: "6vw" }}>
          <div className="col-12 ps-5">
            <h4 className="mt-5 mb-3">Step 3 of 5</h4>
            <div style={{ height: "1vh", background: "#dae2eb", width: "200px", borderRadius: "5px" }}>
              <div style={{ height: "100%", width: "60%", backgroundColor: "#1081f7", borderRadius: "5px" }}></div>
            </div>
            <h2 className="mt-5" style={{ fontWeight: "400", marginBottom: "80px" }}>Let's get started</h2>

            <label className="field-label" htmlFor="name">
              <h6 className="input-label">Full Name</h6>
              <input
                onChange={handleFieldChange}
                className="name"
                placeholder="RAXXXXX"
                type="text"
                value={formData.name}
              />
            </label>

            <label className="field-label" htmlFor="adhar">
              <h6 className="input-label">ADHAR NUMBER</h6>
              <input
                onChange={handleFieldChange}
                className="adhar"
                placeholder="XXXXXXXX"
                type="number"
                value={formData.adhar}
              />
            </label>

            <label className="field-label" htmlFor="dob">
              <h6 className="input-label">DOB</h6>
              <input
                onChange={handleFieldChange}
                className="dob"
                type="date"
                value={formData.dob}
              />
            </label>
          </div>
        </div>
      </main>

      <footer style={{ backgroundColor: "white", position: "fixed", bottom: "0", boxShadow: "0px -5px 10px rgba(0, 0, 0, 0.3)", height: "25vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: "90px" }}>
        <p style={{ marginRight: "200px" }}>
          <input onClick={handleCheckboxToggle} type="checkbox" />
          I authorise Zerodha to fetch my KYC information from the CKC registry with my Bank Account <br />
          Learn more
        </p>
        <button
          onClick={handleButtonClick}
          style={{
            color: bg === "white" ? "black" : "white",
            backgroundColor: bg,
            fontSize: "1.2rem",
            fontWeight: "600",
            padding: "15px 60px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Continue
        </button>
      </footer>
    </div>
  );
}
