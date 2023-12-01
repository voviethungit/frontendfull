import React from "react";
import "./css/userinfor.css";
import "./css/base.css";
import "./css/mainuser.css";
import "./css/myfavs.css";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { Link } from "react-router-dom";
import apppstore from "./img/appstore.png";
import chplay from "./img/chplay.png";
import Navbarmobile from "./Navbarmobile";
import Userinfornav from "./Userinfornav";

function Myreward() {
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
              <h3>Quà tặng</h3>
            </div>
            <div className="myfavs-cars">
              <img
                src="https://www.mioto.vn/static/media/empty-gift.436a48a9.svg"
                alt=""
              ></img>
              <p>
                Bạn vui lòng sử dụng app Mioto để tìm hiểu thêm chi tiết chương
                trình
              </p>
              <div className="install-app">
                <Link>
                  <img src={apppstore} alt="appstore" />
                </Link>
                <Link>
                  <img src={chplay} alt="chplay" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Myreward;
