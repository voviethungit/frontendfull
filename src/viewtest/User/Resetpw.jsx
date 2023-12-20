import React, { useState } from "react";
import axios from "axios";
import "./css/userinfor.css";
import "./css/base.css";
import "./css/mainuser.css";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Navbarmobile from "./Navbarmobile";
import Userinfornav from "./Userinfornav";
function Resetpw() {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] =useState("")
  const handleChangePassword = async () => {
    try {
      if(password.length < 6){
        setPasswordError("Mật khẩu phải có ít nhất 6 kí tự")
      }
      if (newPassword.length < 6) {
        setError("Mật khẩu mới phải có ít nhất 6 ký tự.");
        return;
      }

      const accessToken = localStorage.getItem("accessToken");
      const userId = localStorage.getItem("userId");
      const response = await axios.put(
        `http://localhost:5000/change-password/${userId}`,
        {
          password: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div className="main-color">
      <Header />
      <div className="userinfor">
        <div className="userinfor__nav" id="userinfor__nav">
          <h1 className="userinfor__nav-name">Xin chào bạn!</h1>
          <Userinfornav />
        </div>
        {/* Drop menu mobile */}
        <Navbarmobile />
        <div className="userbox">
          <div className="box-title">
            <h1>Đổi mật khẩu</h1>
            <p>Vui lòng nhập mật khẩu hiện tại của bạn để thay đổi mật khẩu</p>
          </div>
          <div className="content-box myaddress-form changefw-form">
            <div className="myfavs-cars-title">
              <h3>Nhập mật khẩu</h3>
            </div>
            <div className="myfavs-cars-content">
              <div className="form-content">
                <div className="content-title-input">
                  <p>Mật khẩu hiện tại</p>
                </div>
                <div className="content-form-input">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && <p className="error-message">{passwordError}</p>}
                </div>
              </div>
              <div className="form-content">
                <div className="content-title-input">
                  <p>Mật khẩu mới</p>
                </div>
                <div className="content-form-input">
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {error && <p className="error-message">{error}</p>}
                </div>
              </div>
            </div>
            <div className="resetpw-btn">
              <button className="resetpw-btn-submit" onClick={handleChangePassword}>
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resetpw;
