import React, { useState, useEffect } from "react";
import Header from "../Header";
import Aboutme from "../Aboutme";
import Blog from "../Blog";
import Footer from "../Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsShieldCheck } from "react-icons/bs";
import { FaLocationDot, FaStar, FaCarRear, FaMedal } from "react-icons/fa6";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import "./css/mainlocation.css";
import "./css/bannerlocation.css";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
function Mainlocation({ match }) {
  const [cars, setCars] = useState([]);
  const { id } = useParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState('');
  window.localStorage.setItem("idCategory", id);
  const getCategory = (categoryId) => {
    axios
      .get(`http://localhost:5000/category/${categoryId}`)
      .then((response) => {
        console.log(response.data.category);
        setCategory(response.data.category);
      })
      .catch((error) => {
        console.error("Lỗi:", error);
      });
  };
  useEffect(() => {
    getCategory(id);
  }, [id]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-car-by-category/${id}`)
      .then((response) => {
        const carsData = response.data.cars;
        setCars(carsData);
        console.log("API Response:", response.data);
      })
      .catch((error) => {
        console.error("Lỗi:", error);
      });
  }, [id]);
  const contact__pc_tablet = {
    dots: true,
    infinite: false,
    speed: 400,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 3,
    initialSlide: 1,
    vertical: false,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log("Search Value:", e.target.value);
  };
  return (
    <>
      <Helmet>
        <title>Danh mục</title>
      </Helmet>
      <Header />
      <div className="banner__location">
        <img className='banner__location-img' src={category.imageCategory} alt={category.model} />
        <div className="banner__location__main">
          <h1 className="banner__location__main-textmain">
            Xe Tốt - Cùng Bạn <br></br> Đến Mọi Hành Trình
          </h1>
          <div className="banner__location__main-dash"></div>
          <p className="banner__location__main-textchild">
            Trải nghiệm sự khác biệt từ <span>hơn 99+</span> xe gia đình đời mới
            khắp Đà Nẵng
          </p>
        </div>
        <div className="banner__location__list">
          <div className="banner__location__list-text">
            <p>Hiện tại bạn đã thuê thành công 2 xe của chúng tôi</p>
          </div>
          <div className="banner__location__list-usage"></div>
          <div className="banner__location__list-point">
            <i>
              <FaMedal></FaMedal>
            </i>
            <p className="banner__location__list-point-text">20 Điểm</p>
          </div>
          <ScrollLink to="content" smooth={true} duration={800}>
            <button className="banner__location__list-search">
              <h3>Tìm xe</h3>
            </button>
          </ScrollLink>
        </div>
      </div>
      <div className="location" id="location">
        <h1 className="location__text">Xe tại {category.model}</h1>
        <form className="location__search">
          <div class="location__search-form">
            <input
              type="text"
              className="location__search-form-input"
              placeholder="Tìm Kiếm Xe"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          <button
            className="location__search-button"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <i className="location__search-button-text">
              {" "}
              <FaSearch></FaSearch>{" "}
            </i>
          </button>
        </form>
        <div className="location__list">
          <Slider {...contact__pc_tablet}>
            {cars
              .filter((car) =>
                search.trim() === ""
                  ? true
                  : car.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((car, index) => (
                <Link
                  to={`/san-pham/${car._id}`}
                  className="location__list-child"
                  key={index}
                >
                  <nav>
                    <img
                      src={car.imagePath}
                      className="location__list-child-img"
                    />
                    <div className="btn__freetax location__list-child-img-tax ">
                      <p className="location__list-child-img-tax-text">
                        {car.flash}
                      </p>
                    </div>
                    <div className="location__list-child-img-flash btn__electronic">
                      <p className="location__list-child-img-flash-text">
                        {car.tax}
                      </p>
                    </div>
                  </nav>
                  <div className="location__list-child-auto">
                    <div className="location__list-child-auto-car btn__auto">
                      <p className="location__list-child-auto-car-text">
                        {" "}
                        {car.tax2}
                      </p>
                    </div>
                    <div className="location__list-child-auto-location"></div>
                  </div>
                  <div className="location__list-child-name">
                    <h1 className="location__list-child-name-main">
                      {car.title}
                    </h1>
                    <i>
                      <BsShieldCheck></BsShieldCheck>
                    </i>
                  </div>
                  <div className="location__list-child-location">
                    <i>
                      <FaLocationDot></FaLocationDot>
                    </i>
                    <p className="location__list-child-location-text">
                      {car.location}
                    </p>
                  </div>
                  <div className="location__list-child-underlined"> </div>
                  <div className="location__list-child-detail">
                    <div className="location__list-child-detail-evaluate">
                      <div className="location__list-child-detail-evaluate-star">
                        <i>
                          <FaStar></FaStar>
                        </i>
                        <p className="location__list-child-detail-evaluate-star-text">
                          {car.star}
                        </p>
                      </div>
                      <div className="location__list-child-detail-evaluate-usage">
                        <i>
                          <FaCarRear></FaCarRear>
                        </i>
                        <p className="location__list-child-detail-evaluate-usage-text">
                          {car.usage} Lượt Thuê
                        </p>
                      </div>
                    </div>
                    <div className="location__list-child-detail-buy">
                      <span className="location__list-child-detail-buy-sale">
                        {car.price}vnđ
                      </span>
                      <p className="location__list-child-detail-buy-day">
                        <span>Giá tổng</span> {car.price}vnđ
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </Slider>
        </div>
      </div>
      <Aboutme />
      <Blog />
      <Footer />
    </>
  );
}

export default Mainlocation;
