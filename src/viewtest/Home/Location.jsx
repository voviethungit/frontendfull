import React from 'react';
import './css/location.css'
import './css/base.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from 'react-router-dom';

function Location() {
    const location = {
        dots: true,  // thể hiện chấm nhỏ dưới slide
        infinite: false, // slide cuối + click = slide đầu (false)
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 0, // thể hiện hình ảnh 3 (0,1,2)
                    // infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 940,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2, // thể hiện hình ảnh 3 (0,1,2)
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const dataLocation = [
        {
            id: 1,
            linkImg:
                'https://meeymap.com/tin-tuc/wp-content/uploads/2022/02/co-so-ha-tang-quan-lien-chieu.jpg',
            name: 'Liên Chiểu',
            text: '5+ xe'
        },
        {
            id: 2,
            linkImg:
                'https://file1.dangcongsan.vn/data/0/images/2022/07/26/giangntt/quang-canh-quan-thanh-khe.jpg',
            name: 'Thanh Khê',
            text: '15+ xe'
        },
        {
            id: 3,
            linkImg:
                'https://ik.imagekit.io/tvlk/blog/2022/09/ban-dao-son-tra-3-1024x550.jpg?tr=dpr-2,w-675',
            name: 'Sơn Trà',
            text: '10+ xe'
        },
        {
            id: 4,
            linkImg:
                'https://giabaohome.vn/wp-content/uploads/2021/05/ban-nha-trung-tam-da-nang-4.jpg',
            name: 'Hải Châu',
            text: '10+ xe'
        },
        {
            id: 5,
            linkImg:
                'https://tapchimoitruong.vn/uploads/042021/image001_d8fd4ba3.png',
            name: 'Hòa Khánh',
            text: '5+ xe'
        },
    ];
  return (
    <div className='location'>
      <h2>Địa điểm nổi bật</h2>
     <div className='location__slider'>
                <Slider {...location}>
                    {dataLocation.map((item) => (
                        <Link to='/location' className="location__slider-container">
                            <div className="location__slider-container-top">
                                <img
                                    src={
                                        item.linkImg
                                    }
                                    alt={item.title}
                                />
                            </div>
                            <div className='location__slider-overwhite'>
                                dvdv
                            </div>
                            <div className='location__slider-container-bottom'>
                                <h3 className='location__slider-container-bottom-name'>
                                    {item.name}
                                </h3>
                                <p className='location__slider-container-bottom-text'>
                                    {item.text}
                                </p>
                            </div>
                        </Link>
                    ))}
                </Slider>
    </div>
    </div>
  )
}

export default Location
