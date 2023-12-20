import React, { useState, useEffect } from 'react';
import './css/header.css';
import './css/base.css';
import { FaBell, FaAngleDown, FaBars, FaX, FaUserLarge, FaDoorOpen } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';
import images from './img/erenyeager.jpg';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { BeatLoader } from 'react-spinners';


function Header() {
  // hàm sau khi đăng nhập thành công chuyển qua thẻ đã login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // hàm set tên từ đăng ký
  const [fullName, setFullName] = useState('');
  // hàm set ảnh từ đăng ký
  const [avatar, setAvatar] = useState(null);
  // cái này ẩn hiển khi click vào chuông 
  const [isBell, setIsBell] = useState(true);
  // cái này ẩn hiển khi click vào mũi tên
  const [isArrow, setIsArrow] = useState(true);

  const togglebellDisplay = () => {
    setIsBell(!isBell);
  };
  const togglearrowDisplay = () => {
    setIsArrow(!isArrow);
  };
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "http://localhost:3000/"
  };
  const defaultImage = images // ảnh mặc định
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {

      axios.get('http://localhost:5000/getProfile', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          setAvatar(response.data.user.avatar);
          setFullName(response.data.user.fullName);
          setIsLoggedIn(true); // Đánh dấu đã đăng nhập thành công
        })
        .catch((error) => {
          console.error('Lỗi :', error);
        });
    }
  }, []); 

  return (
    <div className='header' id='header'>
      <Link to="/" className='header__icon'>
        <img src='https://i.ibb.co/9W9dKYh/5.png' className='header__icon-img' />
      </Link>
      <ul className='header__page'>
        {isLoggedIn ? (
          <Link to="/ve-xe-tot" className='header__page-item login__page'>Về Xe Tốt
          </Link>
        ) : (
          <>
            <Link to="/ve-xe-tot" className='logout-item-page'>Về Xe Tốt
            </Link>
            <Link to='/bai-viet' className='logout-item-page'>Bài Viết
            </Link>
          </>
        )}
        {isLoggedIn ? (
          <div className='bell__notification'>
            <i><FaBell></FaBell></i>
          </div>

        ) : (
          <div></div>
        )}
        {/* Thẻ user */}
        {isLoggedIn ? (
          // Lúc đã đăng nhập
          <div className='header__page-item-login'>
            {/* <BeatLoader
                color="#36d7b7"
                cssOverride={{}}
                loading
                margin={5}
                size={10}
                className='header__payload'
              /> */}
            <Link to="/chuyen-di-cua-toi" className='header__page-item'>Chuyến đi</Link>
            <Link to="/nap-tien" className='header__page-item'>Nạp Tiền</Link>
            <ScrollLink to='blog' smooth={true} duration={800} className='header__page-item'>Bài Viết</ScrollLink>
            <span onClick={togglebellDisplay} className='header__page-item-login-bell'
            >
              <i className='header__page-item-login-firt'><FaBell></FaBell>
              </i>
              <div style={{ display: isBell ? 'none' : 'block' }} className='header__page-item-login-bell-list'>
                <p className='header__page-item-login-bell-list-name'>Thông báo</p>
                <p className='header__page-item-login-bell-list-text'>Hiện tại bạn chưa có thông báo nào từ Xe Tốt
                </p>

              </div>
            </span>
            <li className='header__page-item-vertical'></li>
            <div className='header__page-item-login-avt'>
              <img src={avatar || defaultImage} alt=""></img>
            </div>
            <h3 className='header__page-item-login-name'>{fullName}</h3>
            <span onClick={togglearrowDisplay} className='header__page-item-login-arrow'>
              <i className='header__page-item-login-last'><FaAngleDown></FaAngleDown></i>
              <div style={{ display: isArrow ? 'none' : 'block' }} className='header__page-item-login-arrow-list'>
                <Link to='/nguoi-dung' className='header__page-item-login-arrow-list-name'>
                  <i><FaUserLarge></FaUserLarge></i>
                  Trang cá nhân
                </Link>
                <p className='header__page-item-login-arrow-list-name' onClick={handleLogout}>
                  <i><FaDoorOpen></FaDoorOpen></i>
                  Đăng xuất
                </p>
              </div>
            </span>
          </div>
        ) : (
          /* Thẻ đăng ký, đăng nhập */
          <div className='header__page-item-logout'>

            <Link to="/dang-ky" className='header__page-item-logout-register'>
              Đăng ký
            </Link>
            <Link to="/dang-nhap" className='header__page-item-logout-register  header__page-item-logout-register-button'>
              Đăng nhập
            </Link>
          </div>
        )}
        {/* Login repon */}
        <label htmlFor="nav-tablet-input" className="nav__bars-icon">
          <i className="header__page-item-login-iconbars">
            <FaBars></FaBars>
          </i>
        </label>
        <input hidden='none' type="checkbox" className="nav__input" id="nav-tablet-input"></input>
        <div id='nav__overlay' className='nav__overlay'>
          <label htmlFor='nav-tablet-input' id='close-overlay'>
            <i className='close-overlay-icon'>
              <FaX></FaX>
            </i>

          </label>
          <div className='header__page-item-login-overlay'>
            {isLoggedIn ? (
              <div className='navbar__user'>
                <div className='header__page-item-login-overlay-avt'>
                  <img src={avatar || defaultImage} alt="" />
                  <h3 className='header__page-item-login-overlay-avt-name'>
                    Xin chào <br></br>{fullName}
                  </h3>
                </div>
                <Link to="/ve-xe-tot" className='header__page-item-login-overlay-about'>
                  <h3 className='header__page-item-login-overlay-about-name'>
                    Về Xe Tốt
                  </h3>
                </Link>
                <Link to="/chuyen-di-cua-toi" className='header__page-item-login-overlay-go'>
                  <h3 className='header__page-item-login-overlay-go-name'>
                    Chuyến đi
                  </h3>
                </Link>
                <Link to="/nap-tien" className='header__page-item-login-overlay-pay'>
                  <h3 className='header__page-item-login-overlay-pay-name'>
                    Nạp Tiền
                  </h3>
                </Link>
                <Link to="/bai-viet" className='header__page-item-login-overlay-listblog'>
                  <h3 className='header__page-item-login-overlay-listblog-name'>
                    Bài Viết
                  </h3>
                </Link>
                <div className='header__page-item-login-overlay-logout'>
                  <h3 className='header__page-item-login-overlay-logout-name' onClick={handleLogout}>
                    <i><FaDoorOpen></FaDoorOpen></i>
                    Đăng xuất
                  </h3>
                </div>
                <Link to='/nguoi-dung' className='header__page-item-login-overlay-profile'>
                  <h3 className='header__page-item-login-overlay-profile-name'>
                    <i><FaUserLarge></FaUserLarge></i>
                     Trang cá nhân
                  </h3>
                </Link>
              </div>
            ) : (
              <div className='navbar__notuser'>
                <div className='navbar__notuser-name'>
                  <h3>Bạn chưa đăng ký đăng nhập ?</h3>
                </div>
                <Link to='/dang-nhap' className='navbar__notuser-login'>
                  <h3 className='navbar__notuser-login-text'>
                    Đăng nhập
                  </h3>
                </Link>
                <Link to="/dang-ky" className='navbar__notuser-register'>
                  <h3 className='navbar__notuser-register-text'>
                    Đăng ký
                  </h3>
                </Link>
                <Link to="/ve-xe-tot" className='navbar__notuser-register about__mobile'>
                  <h3 className='navbar__notuser-register-text'>
                    Về Xe Tốt
                  </h3>
                </Link>
                <Link to="/bai-viet1" className='navbar__notuser-register about__mobile'>
                  <h3 className='navbar__notuser-register-text'>
                    Bài Viết
                  </h3>
                </Link>
              </div>
            )}
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Header;
