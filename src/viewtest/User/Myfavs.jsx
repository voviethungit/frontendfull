import React, { useState, useEffect } from "react";
import "./css/userinfor.css";
import "./css/base.css";
import "./css/mainuser.css";
import "./css/myfavs.css";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import Navbarmobile from "./Navbarmobile";
import Userinfornav from "./Userinfornav";
import {
  FaHeart,
  FaStar,
  FaLocationDot,
  FaCarRear,
} from "react-icons/fa6";
import { BsShieldCheck } from "react-icons/bs";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
  const car__love = { 
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    row: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
        <div className="love__car-box">
          <div className="love__car-content">
            <div className="myfavs-cars-title">
              <h3>Xe yêu thích của tôi</h3>
            </div>
            <div className="myfavs-cars">
              <Slider {...car__love}>
              {favoriteCars.length > 0 ? (
                    favoriteCars.map((car) => (
                  <Link to={`/san-pham/${car._id}`} className="love__car-link">
                  <div key={car._id} className="love__car-child">
                  <div className="love__car-child-top">
                   <img src={car.imagePath} alt={car.title} />
                    {/* <div className="absolute__heart" style={{ backgroundColor }}>
                      <i
                        onClick={() =>
                          handleSimilarCarFavoriteClick(car._id)
                        }
                      >
                        <FaHeart />
                      </i>
                    </div> */}
                    {/* <div className="absolute__user">
                      <img src={car.avatar} alt="" />
                    </div> */}
                  </div>
                  <div className="love__car-child-bottom">
                    <div className="love__car-child-auto">
                      <div className="love__car-child-auto-car btn__auto">
                        <p className="love__car-child-auto-car-text">
                          {car.flash}
                        </p>
                      </div>
                    </div>
                    <div className="love__car-child-name">
                      <h1 className="love__car-child-name-main">
                        <h3>{car.title}</h3>
                      </h1>
                      <i>
                        <BsShieldCheck></BsShieldCheck>
                      </i>
                    </div>
                    <div className="love__car-child-location">
                      <i>
                        <FaLocationDot></FaLocationDot>
                      </i>
                      <p className="love__car-child-location-text">
                        {car.location}
                      </p>
                    </div>
                    <div className="love__car-child-underlined">
                      {" "}
                    </div>
                    <div className="love__car-child-detail">
                      <div className="love__car-child-detail-evaluate">
                        <div className="love__car-child-detail-evaluate-star">
                          <i>
                            <FaStar></FaStar>
                          </i>
                          <p className="love__car-child-detail-evaluate-star-text">
                            {car.star}
                          </p>
                        </div>
                        <div className="love__car-child-detail-evaluate-usage">
                          <i>
                            <FaCarRear></FaCarRear>
                          </i>
                          <p className="love__car-child-detail-evaluate-usage-text">
                            {car.usage}
                          </p>
                        </div>
                      </div>
                      <div className="love__car-child-detail-buy">
                        <span className="love__car-child-detail-buy-sale">
                          {car.price}đ
                        </span>
                        {/* <p className='love__car-child-detail-buy-day'>
                <span>Giá tổng</span> 1800k
              </p> */}
                      </div>
                    </div>
                  </div>
                </div>
                  </Link>
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
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Myfavs;
