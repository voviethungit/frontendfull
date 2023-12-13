import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import "./Pay.css";
import "../Home/css/base.css"
import { FaCar, FaClipboardUser } from "react-icons/fa6"

function Pay() {
  return (
    <>
    <Header/>
    <div className='pay'>
       <form className='pay__information'>
        <h3 className='pay__information-name'>Chọn thuê</h3>
        <div className='pay__information-product'>
           <span>Thông tin xe thuê <i><FaCar/></i></span>
           <div className='pay__information-product-all'>
           <div className='pay__information-product-name'>
                <p>TOYOTA VELOZ CROSS 2022</p>
            </div>
            <div className='pay__information-product-image'>
                <img src="https://n1-pstg.mioto.vn/cho_thue_xe_o_to_tu_lai_thue_xe_du_lich_hochiminh/toyota_veloz_cross_2022/p/g/2023/02/14/15/gZBVOUPBWhNE8dsL0C_3SA.jpg" alt="Tên xe"/>
           </div>
           </div>
        </div>
        <div className='pay__information-user'>
        <span>Thông tin người dùng <i><FaClipboardUser /></i></span>
        <div className='pay__information-user-name'>
            <p> Nguyễn Văn A</p>
        </div>
        <div className='pay__information-user-phone'>
           <p>012345678</p>
        </div>
        <div className='pay__information-user-location'>
            <p>K325/2 Tô Hiệu - Hòa Minh - Liên Chiểu - Đà Nẵng</p>
        </div>
        </div>
        <div className='pay__information-method'>
            <span> Chọn phương thức thanh toán :</span>
            <div className='pay__information-method-online'>
                <p>VN Pay</p>
            </div>
            <div className='pay__information-method-ofline'>
                <p>Tiền tài khoản</p>
            </div>
        </div>
        <div className='pay__information-pay'>
        <button className='btn__large pay__information-pay-button'> 
        <p>Chọn thuê</p></button>
        </div>
       </form>
    </div>
    <Footer/>
    </>
  )
}

export default Pay
