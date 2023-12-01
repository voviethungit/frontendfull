import React from "react";
import "./css/userinfor.css";
import "./css/base.css";
import "./css/mainuser.css";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
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
  return (
    <div className="main-color">
      <Header />
      <div className="userinfor">
        <div className="userinfor__nav" id="userinfor__nav">
          <h1 className="userinfor__nav-name">Xin chào bạn!</h1>
          <Userinfornav/>
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
                  <input type="text"></input>
                </div>
              </div>
              <div className="form-content">
                <div className="content-title-input">
                  <p>Mật khẩu mới</p>
                </div>
                <div className="content-form-input">
                  <input type="text"></input>
                </div>
              </div>
            </div>
            <div className="resetpw-btn">
                <Button color="primary">Xác nhận</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resetpw;
