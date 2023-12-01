import React from 'react'
import './css/base.css'
import './css/instruct.css'

function Instruct() {
  return (
    <div className='instruct'>
       <div className='instruct__name'>
         <h1 className='instruct__name-text'>Hướng Dẫn Thuê Xe</h1>
         <p className='instruct__name-child'>Chỉ với 4 bước đơn giản để trải nghiệm thuê xe Mioto một cách nhanh chóng</p>
       </div>
       <div className='instruct__content'>
         <div className='instruct__content-child'>
            <img className='instruct__content-child-img' src="https://www.mioto.vn/static/media/cho_thue_xe_co_taigia_re_tphcm.12455eba.svg"></img>
            <h3 className='instruct__content-child-text'><span>01</span>Đặt xe trên app/web Mioto</h3>
         </div>
         <div className='instruct__content-child'>
            <img className='instruct__content-child-img' src="https://www.mioto.vn/static/media/gia_thue_xe_7cho_tai_tphcm.9455973a.svg"></img>
            <h3 className='instruct__content-child-text'><span>02</span>Nhận xe</h3>
         </div>
         <div className='instruct__content-child'>
            <img className='instruct__content-child-img' src="https://www.mioto.vn/static/media/gia_thue_xe_7cho_tai_hanoi.0834bed8.svg"></img>
            <h3 className='instruct__content-child-text'><span>03</span>Bắt đầu hành trình</h3>
         </div>
         <div className='instruct__content-child'>
            <img className='instruct__content-child-img' src="https://www.mioto.vn/static/media/gia_thue_xe_4cho_tai_tphcm.9dcd3930.svg"></img>
            <h3 className='instruct__content-child-text'><span>04</span>Trả xe & kết thúc chuyến đi</h3>
         </div>
       </div>
    </div>
  )
}

export default Instruct
