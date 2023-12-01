import Slider from 'react-slick';
import React, { useState, useEffect} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/base.css';
import './css/content.css';
import { BsShieldCheck } from "react-icons/bs";
import { FaLocationDot, FaStar, FaCarRear } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaSearch } from "react-icons/fa";

function Content() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/get-car')
      .then((response) => {
        const carsData = response.data.cars;
        setCars(carsData);
        console.log('API Response:', response.data);
      })
      .catch((error) => {
        console.error('Lỗi:', error);
      });
  }, []);
 
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
          rows: 2,
          initialSlide: 1,
        },
      },
    ],
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log('Search Value:', e.target.value);
  };
  return (
    <div className='content' id='content'>
      <h1 className='content__text'>Xe dành cho bạn</h1>
      <form className='content__search'>
        <div class="content__search-form">
          <input
            type="text"
            className="content__search-form-input"
            placeholder="Tìm Kiếm Xe"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <button className='content__search-button' onClick={(e) => { e.preventDefault(); }}>
          <i className='content__search-button-text'> <FaSearch></FaSearch> </i>
        </button>
      </form>
      <div className='content__list'>
        <Slider {...contact__pc_tablet}>
          {cars
            .filter((car) =>
              search.trim() === ''
                ? true
                : car.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((car, index) => (
              <Link to={`/product/${car._id}`} className='content__list-child' key={index}>
                <nav>
                  <img src={car.imagePath} className='content__list-child-img' />
                  <div className='btn__freetax content__list-child-img-tax '>
                    <p className='content__list-child-img-tax-text'>
                      {car.flash}
                    </p>
                  </div>
                  <div className='content__list-child-img-flash btn__electronic'>
                    <p className='content__list-child-img-flash-text'>
                      {car.tax}
                    </p>
                  </div>
                </nav>
                <div className='content__list-child-auto'>
                  <div className='content__list-child-auto-car btn__auto'>
                    <p className='content__list-child-auto-car-text'> {car.tax2}</p>
                  </div>
                  <div className='content__list-child-auto-location'></div>
                </div>
                <div className='content__list-child-name'>
                  <h1 className='content__list-child-name-main'>{car.title}</h1>
                  <i><BsShieldCheck></BsShieldCheck></i>
                </div>
                <div className='content__list-child-location'>
                  <i><FaLocationDot></FaLocationDot></i>
                  <p className='content__list-child-location-text'>{car.location}</p>
                </div>
                <div className='content__list-child-underlined'> </div>
                <div className='content__list-child-detail'>
                  <div className='content__list-child-detail-evaluate'>
                    <div className='content__list-child-detail-evaluate-star'>
                      <i><FaStar></FaStar></i>
                      <p className='content__list-child-detail-evaluate-star-text'>{car.star}</p>
                    </div>
                    <div className='content__list-child-detail-evaluate-usage'>
                      <i><FaCarRear></FaCarRear></i>
                      <p className='content__list-child-detail-evaluate-usage-text'>{car.usage}</p>
                    </div>
                  </div>
                  <div className='content__list-child-detail-buy'>
                    <span className='content__list-child-detail-buy-sale'>
                      {car.price}vnđ
                    </span>
                    <p className='content__list-child-detail-buy-day'>
                      <span>Giá tổng</span> {car.price}vnđ
                    </p>
                  </div>
                </div>


              </Link>
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default Content;
