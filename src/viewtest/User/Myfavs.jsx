import React from "react";
import "./css/userinfor.css";
import "./css/base.css";
import "./css/mainuser.css";
import "./css/myfavs.css";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Navbarmobile from "./Navbarmobile";
import Userinfornav from "./Userinfornav";

function Myfavs() {
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
              <h3>Xe yêu thích của tôi</h3>
            </div>
            <div className="myfavs-cars">
              <img
                src="https://www.mioto.vn/static/media/empty-favcar.2c855700.svg"
                alt=""
              ></img>
              <p>Không có xe yêu thích nào</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Myfavs;
