import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/base.css';
import './css/protect.css';
import imgGirl from './img/banner1.jpg';
import { Link } from 'react-router-dom';
import anh1 from './img/protect-1.png';
import anh2 from './img/protect-2.png';
import anh3 from './img/protect-3.png';
import anh4 from './img/protect-4.png';




function Protect() {
  const [defaultImage, setDefaultImage] = useState({});
  const protectSlider = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };
  const dataProtectSlider = [
    {
      id: 1,
      title: 'Global',
      linkImg: anh1,
      linkTo: '/trip'
    },
    {
      id: 2,
      title: 'Global',
      linkImg: anh2,
      linkTo: '/trip'

    },
    {
      id: 3,
      title: 'Global',
      linkImg: anh3,
      linkTo: '/trip'

    },
    {
      id: 4,
      title: 'Global',
      linkImg: anh4,
      linkTo: '/trip'

    },
  ];
  const handleImageClick = (linkTo) => {
    if (linkTo) {
      window.location.href = linkTo;
    }
  };
  return (
    <div className='protect'>
      <div className='protect__name'>
        <h1 className='protect__name-text'> Hành Trình Của Bạn Luôn Được Bảo Vệ</h1>
      </div>
      <div className="protect__mobile">
        <Slider {...protectSlider}>
          {dataProtectSlider.map((item) => (
            <div key={item.id} className="protect__mobile-slider">
              {item.linkTo ? (
                <Link to={item.linkTo}>
                  <img className='protect__mobile-slider-img' src={item.linkImg} alt={item.title} onError={handleErrorImage} />
                </Link>
              ) : (
                <img
                  key={item.id}
                  className='protect__mobile-slider-img'
                  src={item.linkImg || defaultImage}
                  alt={item.title}
                  onClick={() => handleImageClick(item.linkTo)}
                />
              )}
            </div>
          ))}
        </Slider>
      </div>

      <div className='protect__content'>
        {dataProtectSlider.map(item => (
          item.linkTo ? (
            <Link key={item.id} to={item.linkTo}>
              <img src={item.linkImg} alt={item.title} />
            </Link>
          ) : (
            <img className='protect__content-img'
              key={item.id}
              src={item.linkImg}
              alt={item.title}
              onClick={() => handleImageClick(item.linkTo)}
            />
          )
        ))}
      </div>

    </div>
  )
}

export default Protect
