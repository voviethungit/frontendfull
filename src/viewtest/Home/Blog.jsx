import React, { useState } from 'react';
import Slider from 'react-slick';
import './css/base.css';
import './css/blog.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgGirl from './img/banner1.jpg';
import { Link } from 'react-router-dom';
import anh1 from './img/blog1.jpg';
import anh2 from './img/blog2.jpg';
import anh3 from './img/blog3.jpg';
import anh4 from './img/blog4.jpg';

function Blog() {
    const [defaultImage, setDefaultImage] = useState({});
    const blogSlider = {
      dots: true,
      infinite: false,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: true,
            dots: true,
          },
        },
        {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0,
              infinite: true,
              dots: true,
            },
          },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
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
    const dataBlogSlider = [
      {
        id: 1,
        time: '12-8-2023',
        title: 'Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH 2/9 bằng việc thuê xe',
        linkImg: anh1,
        linkTo: '/listblog'
      },
      {
        id: 2,
        time: '12-8-2023',
        title: 'Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH 2/9 bằng việc thuê xe',
        linkImg: anh2,
        linkTo: '/listblog1'
      },
      {
        id: 3,
        time: '12-8-2023',
        title: 'Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH 2/9 bằng việc thuê xe',
        linkImg: anh3,
        linkTo: '/listblog2'
      },
      {
        id: 4,
        time: '12-8-2023',
        title: 'Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH 2/9 bằng việc thuê xe',
        linkImg: anh4,
        linkTo: '/listblog3'
      },
    ];
    const handleImageClick = (linkTo) => {
      if (linkTo) {
        window.location.href = linkTo;
      }
    };
  return (
    <div className='blog'>
       <div className='blog__name'>
        <h1 className='blog__name-main'>MIOTO Blog</h1>
       </div>
       <div className='blog__content'>
         <div className='blog__content-firt'>
            <div className='blog__content-firt-firt'>
                <img className='blog__content-firt-firt-img' src={anh1} alt="" ></img>
                <Link to="/listblog" className='blog__content-firt-firt-text'>
                    <p className='blog__content-firt-firt-text-text'>12-08-2023</p>
                    <h3 className='blog__content-firt-firt-text-main'>Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH
                     2/9 bằng việc thuê xe
                    </h3>
                </Link>
            </div>
            <div className='blog__content-firt-last'>
            <img className='blog__content-firt-last-img' src={anh2} alt="" ></img>
                <Link to="/listblog1" className='blog__content-firt-last-text'>
                    <p className='blog__content-firt-last-text-text'>12-08-2023</p>
                    <h3 className='blog__content-firt-last-text-main'>Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH
                    2/9 bằng việc thuê xe
                    </h3>
                </Link>
            </div>
         </div>
         <div className='blog__content-last'>
         <img className='blog__content-last-img' src={anh3} alt="" ></img>
                <Link to='/listblog2' className='blog__content-last-text'>
                    <p className='blog__content-last-text-text'>12-08-2023</p>
                    <h3 className='blog__content-last-text-main'>Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH
                    2/9 bằng việc thuê xe
                    </h3>
                </Link>
         </div>
       </div>   
       <div className="blog__mobile">
        <Slider {...blogSlider}>
          {dataBlogSlider.map((item) => (
            <div key={item.id} className="blog__mobile-slider">
              {item.linkTo ? (
                <Link to={item.linkTo}>
                  <img className='blog__mobile-slider-img' src={item.linkImg} alt={item.title} onError={handleErrorImage} />
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
              <div className='blog__mobile-slider-text'>
                <p>{item.time}</p>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Blog
