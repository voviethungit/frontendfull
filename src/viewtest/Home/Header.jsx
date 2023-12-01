import React, { useState, useEffect } from 'react';
import './css/header.css';
import './css/base.css';
import { FaBell, FaAngleDown, FaBars, FaX, FaUserLarge, FaDoorOpen } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';
import images from './img/erenyeager.jpg';


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
    localStorage.removeItem('accessToken');
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
        <img src='https://i.ibb.co/9W9dKYh/5.png' className='header__icon-img'></img>
      </Link>
      <ul className='header__page'>
        <Link to="/about" className='header__page-item'>Về Mioto</Link>
        <Link to="/Mytrips" className='header__page-item'>Chuyến đi</Link>
        <li className='header__page-item-vertical'></li>
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
                    Xin chào {fullName};
                  </h3>
                </div>
                <Link to="/about" className='header__page-item-login-overlay-about'>
                  <h3 className='header__page-item-login-overlay-about-name'>
                    Về Mioto
                  </h3>
                </Link>
                <Link to="/Mytrips" className='header__page-item-login-overlay-go'>
                  <h3 className='header__page-item-login-overlay-go-name'>
                    Chuyến đi
                  </h3>
                </Link>
                <div className='header__page-item-login-overlay-logout'>
                  <h3 className='header__page-item-login-overlay-logout-name' onClick={handleLogout}>
                    <i><FaDoorOpen></FaDoorOpen></i>
                    Đăng xuất
                  </h3>
                </div>
                <Link to='/user' className='header__page-item-login-overlay-profile'>
                  <h3 className='header__page-item-login-overlay-profile-name'>
                    <i><FaUserLarge></FaUserLarge></i>
                    Vào profile
                  </h3>
                </Link>
              </div>
            ) : (
              <div className='navbar__notuser'>
                <div className='navbar__notuser-name'>
                  <h3>Bạn chưa đăng ký đăng nhập ?</h3>
                </div>
                <Link to='/login' className='navbar__notuser-login'>
                  <h3 className='navbar__notuser-login-text'>
                    Đăng nhập
                  </h3>
                </Link>
                <Link to="/register" className='navbar__notuser-register'>
                  <h3 className='navbar__notuser-register-text'>
                    Đăng xuất
                  </h3>
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* Thẻ user */}
        {isLoggedIn ? (
          // Lúc đã đăng nhập
          <div className='header__page-item-login'>
            <span onClick={togglebellDisplay} className='header__page-item-login-bell'
            >
              <i className='header__page-item-login-firt'><FaBell></FaBell>
              </i>
              <div style={{ display: isBell ? 'none' : 'block' }} className='header__page-item-login-bell-list'>
                <p className='header__page-item-login-bell-list-name'>Thông báo</p>
                <p className='header__page-item-login-bell-list-text'>Hiện tại bạn chưa có thông báo nào từ MIOTO</p>

              </div>
            </span>
            <div className='header__page-item-login-avt'>
              <img src={avatar || defaultImage} alt=""></img>
            </div>
            <h3 className='header__page-item-login-name'>{fullName}</h3>
            <span onClick={togglearrowDisplay} className='header__page-item-login-arrow'>
<i className='header__page-item-login-last'><FaAngleDown></FaAngleDown></i>
              <div style={{ display: isArrow ? 'none' : 'block' }} className='header__page-item-login-arrow-list'>
                <Link to='/user' className='header__page-item-login-arrow-list-name'>
                  <i><FaUserLarge></FaUserLarge></i>
                  Vào profile
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
            <Link to="/register" className='header__page-item-logout-register'>
              Đăng ký
            </Link>
            <Link to="/login" className='header__page-item-logout-register  header__page-item-logout-register-button'>
              Đăng nhập
            </Link>
          </div>
        )}
      </ul>
    </div>
  )
}

export default Header;