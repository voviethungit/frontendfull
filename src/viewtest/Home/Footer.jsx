import React from 'react';
import './css/footer.css';
import './css/base.css';
import { FaFacebookF, FaTiktok, FaFacebookMessenger } from "react-icons/fa6";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';


function Footer() {
  // const scrollToTop = () => {
  //   scroll.scrollToTop({
  //     duration: 800,
  //     delay: 0,
  //     smooth: 'easeInOutQuart',
  //   });
  // };
  return (
    <footer className='footer'>
      <div className='footer__dash'></div>
      <div className='footer__content'>
        <div className='footer__content-firt'>
        <ScrollLink to='header' smooth={true} duration={800} offset={-20} delay={100}>
          <img className='footer__content-firt-img' src='https://www.mioto.vn/static/media/logo-full.ea382559.png'></img>           
      </ScrollLink>
          < div className='footer__column'>
          <div className='footer__content-firt-phone'>
            <h4 className='footer__content-firt-phone-number'>0948988426</h4>
            <p className='footer__content-firt-phone-text'>Tổng đài hỗ trợ 24/7</p>
          </div>
          <div className='footer__content-firt-email'>
            <h4 className='footer__content-firt-emai-name'>nguyennvpd06505@fpt.edu.vn</h4>
            <p className='footer__content-firt-email-text'>Gửi mail cho Mioto</p>
          </div>
          </div>
          <div className='footer__content-firt-icon'>
            <i><FaFacebookF></FaFacebookF></i>
            <i><FaTiktok></FaTiktok></i>
            <i><FaFacebookMessenger></FaFacebookMessenger></i>
          </div>
        </div>
        <ul className='footer__content-list'>
          <li className="footer__content-list-child">
            <h3 className="footer__content-list-child-name" > Chính sách</h3>
            <div className="footer__content-list-child-text">
              <Link to="/policy" className="footer__content-list-child-text-text">Chính sách và quy định</Link>
              <Link to="/terms" className="footer__content-list-child-text-text">Nguyên tắc chung</Link>
              <Link to="/perso" className="footer__content-list-child-text-text">Chính sách bảo mật</Link>
              <Link to="/resolve" className="footer__content-list-child-text-text">Giải quyết khiếu nại</Link>
            </div>
          </li>
          <li className="footer__content-list-child">
            <h3 className="footer__content-list-child-name">Tìm hiểu thêm</h3>
            <div className="footer__content-list-child-text">
              <Link to='/mainhow' className="footer__content-list-child-text-text">Hướng dẫn chung</Link>
              <Link to='/book' className="footer__content-list-child-text-text">Hướng dẫn đặt xe</Link>
              <Link to='/paymen' className="footer__content-list-child-text-text">Hướng dẫn thanh toán</Link>
              <Link to='/regu' className="footer__content-list-child-text-text">Hỏi và trả lời</Link>
            </div>
          </li>
          <li className="footer__content-list-child footer__content-list-child-name-none">
            <h3 className="footer__content-list-child-name" ></h3>
            <div className="footer__content-list-child-text">
              <Link to='/about' className="footer__content-list-child-text-text">Về Mioto</Link>
              <Link to='/listblog' className="footer__content-list-child-text-text">Mioto Blog</Link>
              <Link to='/user' className="footer__content-list-child-text-text">Người dùng</Link>
            </div>
          </li>
          <li className="footer__content-list-child">
            <h3 className="footer__content-list-child-name" >Đối Tác</h3>
            <div className="footer__content-list-child-text">
              <p className="footer__content-list-child-text-text">Đăng ký chủ xe Mioto</p>
              <p className="footer__content-list-child-text-text">Đăng ký GPS MITRACK 4G</p>
            </div>
          </li>
        </ul>
      </div>
      <div className='footer__dash'></div>
      <div className='footer__license'>
        <p className='footer__license-firt'>
        © Công ty Cổ Phần Mioto Asia
        </p>
        <ul className='footer__license-last'>
          <p className="footer__license-last-text">
            Số GCNĐKKD: 0317307544 </p>
          <p className="footer__license-last-text">
          Ngày cấp: 24-05-22 </p>
          <p className="footer__license-last-text">
            Nơi cấp: Sở Kế hoạch và Đầu tư TPHCM</p>
        </ul>
      </div>
      <div className='footer__dash'></div>
      <div className='footer__location'>
        <p className='footer__location-firt'>
        Địa chỉ: Văn phòng 02, Tầng 08, Tòa nhà Pearl Plaza, Số 561A Điện Biên Phủ, Phường 25, Quận Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam.
        </p>
        <ul className='footer__location-last'>
          <p className="footer__location-last-text">
          Tên TK: MB BANK NGUYEN VAN NGUYEN</p>
          <p className="footer__location-last-text">
          Số TK: 0948988426 </p>
          <p className="footer__location-last-text">
          Nơi cấp: Sở Kế hoạch và Đầu tư TPHCM</p>
        </ul>
      </div>
      <div className='footer__img'>
        <a href='http://online.gov.vn/Home/WebDetails/98465?AspxAutoDetectCookieSupport=1' className='footer__img-fist'>
          <img className='footer__img-firt-img' src='https://www.mioto.vn/static/media/bocongthuong.40599f29.png'></img>
        </a>
        <ul className='footer__img-last'>
          <p className="footer__img-last-text">
          Phương thức thanh toán</p>
          <div className="footer__img-last-icon">
             <img src="https://www.mioto.vn/static/media/vnpay.780689d6.png" className="footer__img-last-icon-img">
             </img>
             <img src="https://www.mioto.vn/static/media/vnpay.780689d6.png" className="footer__img-last-icon-img">
             </img>
             <img src="https://www.mioto.vn/static/media/vnpay.780689d6.png" className="footer__img-last-icon-img">
             </img>
             <img src="https://www.mioto.vn/static/media/vnpay.780689d6.png" className="footer__img-last-icon-img">
             </img>
          </div>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
