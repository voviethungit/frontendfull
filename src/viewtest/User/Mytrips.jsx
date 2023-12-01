import React from "react";
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

function Mytrips() {
  //test
  const tableData = [
    { carName: 'Xe A',  status: 'Hoàn Thành', bill: 'Xuất', totalAmount: '800.000đ'},
    { carName: 'Hùng', status: 'Đã Hủy', bill: 'Xuất', totalAmount: '800000đ' },
  ];

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
            <div className="myfavs-cars">
              <img
                src="https://www.mioto.vn/static/media/empty-trip.8f191e42.svg"
                alt=""></img>
              <p>Không có xe yêu thích nào</p>
            </div>

            <div className="myfavs-cars-table">
            <div className="myfavs-table-content">
            <h1>Thông tin thuê xe</h1>
            <Table data={tableData} />
            </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mytrips;
