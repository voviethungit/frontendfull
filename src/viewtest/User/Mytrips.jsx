import React, { useState, useEffect } from "react";
import "./css/userinfor.css";
import "./css/base.css";
import "./css/mainuser.css";
import "./css/reponsive.css";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import Navbarmobile from "./Navbarmobile";
import Userinfornav from "./Userinfornav";
import Table from "./compoment/Table";
import { Helmet } from 'react-helmet';

function Mytrips() {
  const [rentalHistory, setRentalHistory] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const accessToken = localStorage.getItem("accessToken");
    const headers = accessToken
      ? { Authorization: `Bearer ${accessToken}` }
      : {};
    fetch(`http://localhost:5000/rental-history/${userId}`, { headers })
      .then((response) => response.json())
      .then((data) => {
        if (data.rentalRecords && data.rentalRecords.length > 0) {
          setRentalHistory(data.rentalRecords);
        }
      })
      .catch((error) => console.error("Lỗi khi lấy lịch sử thuê:", error));
  }, []);

  return (
    <div className="main-color">
       <Helmet>
        <title>Chuyến đi </title>
      </Helmet>
      <Header />
      <div className="userinfor">
        <div className="userinfor__nav" id="userinfor__nav">
          <h1 className="userinfor__nav-name">Xin chào bạn!</h1>
          <Userinfornav />
        </div>
        {/* Drop menu mobile */}
        <Navbarmobile />
        <div className="userbox">
          <div className="content-box-mytrips">
            <div className="myfavs-cars-title">
              <h3>Chuyến đi của tôi</h3>
            </div>
            <div className="mytrips-mode">
              <div className="mytrips-mode-tab">
                <Link className="userinfor-nav-link mytrips-link active">
                  Lịch sử chuyến
                </Link>
              </div>
            </div>
            {rentalHistory.length > 0 ? (
              <div className="myfavs-cars-table">
                <div className="myfavs-table-content">
                  <table>
                    <thead>
                      <tr>
                        <th>Tên Xe Thuê</th>
                        <th>Giá Thuê</th>
                        <th>Địa Chỉ Nhận Xe</th>
                        <th>Trạng Thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rentalHistory.map((rentalHistory, index) => (
                        <tr key={index}>
                          <td>{rentalHistory.title}</td>
                          <td>{rentalHistory.price}đ</td>
                          <td>{rentalHistory.location}</td>
                          <td>{rentalHistory.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="myfavs-cars">
                <img
                  src="https://www.mioto.vn/static/media/empty-trip.8f191e42.svg"
                  alt=""
                />
                <p>Bạn Chưa Thuê Xe Nào!</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mytrips;
