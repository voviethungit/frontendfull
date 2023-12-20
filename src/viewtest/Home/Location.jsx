import React, {useEffect, useState } from 'react';
import './css/location.css'
import './css/base.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from 'react-router-dom';

function Location() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        // Gọi API từ backend khi component được tải lần đầu
        fetchAllCategories();
      }, []);
      const fetchAllCategories = async () => {
        try {
          const response = await fetch('http://localhost:5000/all-category');
          const data = await response.json();
          if (data.success) {
            setCategories(data.categories);
          } else {
            console.log("Lỗi khi lấy danh sách danh mục");
          }
        } catch (error) {
          console.error("Lỗi kết nối: ", error);
        }
      };
    
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
   
  return (
    <div className='location'>
      <h2>Địa điểm nổi bật</h2>
     <div className='location__slider'>
                <Slider {...location}>
                    {categories.map((item, index) => (
                        <Link to={`/dia-diem/${item._id}`} className="location__slider-container" key={index}>
                            <div className="location__slider-container-top">
                                <img
                                    src={
                                        item.imageCategory
                                    }
                                    alt={item.model}
                                />
                            </div>
                            <div className='location__slider-overwhite'>
                            </div>
                            <div className='location__slider-container-bottom'>
                                <h3 className='location__slider-container-bottom-name'>
                                    {item.model}
                                </h3>
                                <p className='location__slider-container-bottom-text'>
                                    5+ xe 
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
