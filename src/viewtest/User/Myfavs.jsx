import React, { useState, useEffect } from "react";
import "./css/userinfor.css";
import "./css/base.css";
import "./css/mainuser.css";
import "./css/myfavs.css";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Navbarmobile from "./Navbarmobile";
import Userinfornav from "./Userinfornav";

function Myfavs() {
  const [favoriteCars, setFavoriteCars] = useState([]);

  useEffect(() => {
    const fetchFavoriteCars = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const accessToken = localStorage.getItem("accessToken");
        const response = await fetch(
          `http://localhost:5000/favorite/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          setFavoriteCars(data.favoriteCars);
        } else {
          console.log("Không có xe yêu thích nào.");
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách xe yêu thích:", error);
      }
    };

    fetchFavoriteCars();
  }, []);
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
          <div className="content-box">
            <div className="myfavs-cars-title">
              <h3>Xe yêu thích của tôi</h3>
            </div>
            <div className="myfavs-cars">
              {favoriteCars.length > 0 ? (
                favoriteCars.map((car) => (
                  <div key={car._id} className="car-item">
                    <img src={car.imagePath} alt={car.title} />
                    <h4>{car.title}</h4>
                    <p>{car.price}</p>
                  </div>
                ))
              ) : (
                <div className="empty-fav">
                  <img
                    src="https://www.mioto.vn/static/media/empty-favcar.2c855700.svg"
                    alt=""
                  ></img>
                  <p>Không có xe yêu thích nào</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Myfavs;
