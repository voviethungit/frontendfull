import React, { useState, useEffect } from "react";
import "./css/userinfor.css";
import "./css/base.css";
import "./css/mainuser.css";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Navbarmobile from "./Navbarmobile";
import Userinfornav from "./Userinfornav";
import { useNavigate   } from "react-router-dom";
import axios from "axios";
function Myfavs() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);
  const [accountBalance, setAccountBalance] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      setLoggedIn(false);
    } else {

      axios.get('http://localhost:5000/getProfile', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          setAccountBalance(response.data.user.accountBalance);
        })
        .catch((error) => {
          console.error('Lỗi :', error);

        });
    }
  }, []);
  if (!loggedIn) {
    navigate("/login");
  }
  return (
    <div  className="main-color">
      <Header />
      <div className="userinfor">
        <div className="userinfor__nav" id="userinfor__nav">
          <h1 className="userinfor__nav-name">Xin chào bạn!</h1>
          <Userinfornav/>
        </div>

        {/* Drop menu mobile */}
        <Navbarmobile />

        <div className="userbox">
          <div className="content-box">
            <div className="myfavs-cars-title">
              <h3>Ví của tôi</h3>
            </div>
            <div className="myfavs-cars-content">
              <div className="owner-report--heading"><h1>Bảng tổng hợp giao dịch</h1></div>
              <div className="owner-report-body">
                <div className="money">
                  <h2>{accountBalance}đ</h2>
                  <span>Số dư hiện tại</span>
                </div>
                <div className="summary-change">
                  <p>Tổng thay đổi - Chuyến đi hoàn thành</p>
                  <p>0đ</p>
                </div>
                <div className="summary-change">
                <p>Tổng thay đổi - Giao dịch rút/nộp tiền</p>
                <p>0đ</p>
              </div>
              <div className="summary-change">
              <p>Tổng thay đổi - Giao dịch hủy chuyến</p>
              <p>0đ</p>
              </div>
              <div className="summary-change-group">
                <div className="summary-change">
                    <p>TỔNG CỘNG SỐ TIỀN DÃ NỘP</p>
                    <p>Ođ</p>
                </div>
                <div className="summary-change">
                  <p>TỔNG SỐ TIỀN ĐÃ THUÊ XE</p>
                  <p>0đ</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Myfavs;
