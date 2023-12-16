import React,{useState} from "react";
import "./css/userinfor.css";
import "./css/base.css";
import "./css/mainuser.css";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaCar,
  FaHeart,
  FaMapLocationDot,
  FaGift,
  FaLocationDot,
  FaKey,
  FaTrashCan,
  FaArrowRightFromBracket,
} from "react-icons/fa6";

function Userinfornav() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "http://localhost:3000/";
  };

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (

    <div>
      <ul className="userinfor__nav-list">
        <Link
          to="/nguoi-dung"
          className="userinfor-nav-link" 
        >
          <li className={`userinfor__nav-list-child ${activeLink === '/nguoi-dung' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/nguoi-dung')} >
            <i className="userinfor__nav-list-child-icon">
              <FaUser />
            </i>
            <p className="userinfor__nav-list-child-text">Tài khoản của tôi</p>
          </li>
        </Link>

        <Link
          to="/xe-yeu-thich"
          className="userinfor-nav-link"
        >
          <li className={`userinfor__nav-list-child ${activeLink === '/xe-yeu-thich' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/xe-yeu-thich')} >
            <i className="userinfor__nav-list-child-icon">
              <FaHeart></FaHeart>
            </i>
            <p className="userinfor__nav-list-child-text">Xe yêu thích</p>
          </li>
        </Link>

        <Link
          to="/vi-cua-toi"
          className="userinfor-nav-link"
        >
          <li className={`userinfor__nav-list-child ${activeLink === '/vi-cua-toi' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/vi-cua-toi')} >
            <i className="userinfor__nav-list-child-icon">
              <FaCar></FaCar>
            </i>
            <p className="userinfor__nav-list-child-text">Ví của tôi</p>
          </li>
        </Link>

        <Link
          to="/chuyen-di-cua-toi"
          className="userinfor-nav-link"
        >
          <li className={`userinfor__nav-list-child ${activeLink === '/chuyen-di-cua-toi' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/chuyen-di-cua-toi')} >
            <i className="userinfor__nav-list-child-icon">
              <FaMapLocationDot></FaMapLocationDot>
            </i>
            <p className="userinfor__nav-list-child-text">Lịch sử thuê xe</p>
          </li>
        </Link>

        <Link
          to="/qua-tang-cua-toi"
          className="userinfor-nav-link"
        >
          <li className={`userinfor__nav-list-child ${activeLink === '/qua-tang-cua-toi' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/qua-tang-cua-toi')} >
            <i className="userinfor__nav-list-child-icon">
              <FaGift></FaGift>
            </i>
            <p className="userinfor__nav-list-child-text">
              Khuyến mãi / Quà tặng
            </p>
          </li>
        </Link>

        <Link
          to="/dia-chi-cua-toi"
          className="userinfor-nav-link"
        >
          <li className={`userinfor__nav-list-child ${activeLink === '/dia-chi-cua-toi' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/dia-chi-cua-toi')} >
            <i className="userinfor__nav-list-child-icon">
              <FaLocationDot></FaLocationDot>
            </i>
            <p className="userinfor__nav-list-child-text">Địa chỉ của tôi</p>
          </li>
        </Link>

        <Link
          to="/doi-mat-khau"
          className="userinfor-nav-link"
        >
          <li className={`userinfor__nav-list-child ${activeLink === '/doi-mat-khau' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/doi-mat-khau')} >
            <i className="userinfor__nav-list-child-icon">
              <FaKey></FaKey>
            </i>
            <p className="userinfor__nav-list-child-text">Đổi mật khẩu</p>
          </li>
        </Link>

        <Link onClick = {handleLogout}
          className="userinfor-nav-link"
        >
          <li className="userinfor__nav-list-child">
            <i className="userinfor__nav-list-child-icon">
              <FaArrowRightFromBracket></FaArrowRightFromBracket>
            </i>
            <p className="userinfor__nav-list-child-text">Đăng xuất</p>
          </li>
        </Link>

        <Link
        className="userinfor-nav-link"
        >
          <li className={`userinfor__nav-list-child ${activeLink === '' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('')} >
            <i className="userinfor__nav-list-child-icon">
              <FaTrashCan />
            </i>
            <p className="userinfor__nav-list-child-text">
              Yêu cầu xóa tài khoản
            </p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
export default Userinfornav;
