import React from 'react'
import './css/base.css';
import './css/banner.css';
import { FaMedal } from "react-icons/fa6";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
function Banner() {
  return (
    <div className='banner'>
      <div className='banner__main'>
        <h1 className='banner__main-textmain'>Mioto - Cùng Bạn Đến Mọi Hành Trình</h1>
        <div className='banner__main-dash'></div>
        <p className='banner__main-textchild'>
          Trải nghiệm sự khác biệt từ <span>hơn 8000</span> xe gia đình đời mới khắp Việt Nam
        </p>
      </div>
      <div className='banner__list'>
        <div className='banner__list-text'>
          <p>
            Hiện tại bạn đã thuê thành công 2 xe của chúng tôi
          </p>
        </div>
        <div className='banner__list-usage'>
        </div>
        <div className='banner__list-point'>
          <i><FaMedal></FaMedal></i>
          <p className='banner__list-point-text'>
            20 Điểm</p>
        </div>
        <ScrollLink to='content' smooth={true} duration={800}>
          <button className='banner__list-search'>
            <h3>Tìm xe</h3>
          </button>
      </ScrollLink>
      </div>
    </div>
  )
}

export default Banner
