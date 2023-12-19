import React, { useState } from "react";
import axios from "axios";
import "./css/userinfor.css";
import "./css/base.css";
import "./css/mainuser.css";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Navbarmobile from "./Navbarmobile";
import Userinfornav from "./Userinfornav";
import {
  Grid,
  Dialog,
  TextField,
  DialogActions,
  Button,
  DialogContent,
  DialogTitle,
} from "@mui/material";
function Resetpw() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const handleChangePassword = async () => {
    try {
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
          <div className="content-box myaddress-form">
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
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
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
                </div>
              </div>
            </div>
            <div className="resetpw-btn">
              <Button
                variant="contained"
                color="primary"
                onClick={handleChangePassword}
              >
                Xác nhận
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resetpw;
