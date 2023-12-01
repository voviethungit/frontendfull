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
          to="/user"
          className="userinfor-nav-link" 
        >
          <li className={`userinfor__nav-list-child ${activeLink === '/user' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/user')} >
            <i className="userinfor__nav-list-child-icon">
              <FaUser />
            </i>
            <p className="userinfor__nav-list-child-text">Tài khoản của tôi</p>
          </li>
        </Link>

        <Link
          to="/myfavs"
          className="userinfor-nav-link"
        >
          <li className={`userinfor__nav-list-child ${activeLink === '/myfavs' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/myfavs')} >
            <i className="userinfor__nav-list-child-icon">
              <FaHeart></FaHeart>
            </i>
            <p className="userinfor__nav-list-child-text">Xe yêu thích</p>
          </li>
        </Link>

        <Link
          to="/Mycars"
          className="userinfor-nav-link"
        >
          <li className={`userinfor__nav-list-child ${activeLink === '/Mycars' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/Mycars')} >
            <i className="userinfor__nav-list-child-icon">
              <FaCar></FaCar>
            </i>
            <p className="userinfor__nav-list-child-text">Ví của tôi</p>
          </li>
        </Link>

        <Link
          to="/Mytrips"
          className="userinfor-nav-link"
        >
          <li className={`userinfor__nav-list-child ${activeLink === '/Mytrips' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/Mytrips')} >
            <i className="userinfor__nav-list-child-icon">
              <FaMapLocationDot></FaMapLocationDot>
            </i>
            <p className="userinfor__nav-list-child-text">Lịch sử thuê xe</p>
          </li>
        </Link>

        <Link
          to="/Myreward"
          className="userinfor-nav-link"
        >
          <li className={`userinfor__nav-list-child ${activeLink === '/Myreward' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/Myreward')} >
            <i className="userinfor__nav-list-child-icon">
              <FaGift></FaGift>
            </i>
            <p className="userinfor__nav-list-child-text">
              Khuyến mãi / Quà tặng
            </p>
          </li>
        </Link>

        <Link
          to="/Myaddress"
          className="userinfor-nav-link"
        >
          <li className={`userinfor__nav-list-child ${activeLink === '/Myaddress' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/Myaddress')} >
            <i className="userinfor__nav-list-child-icon">
              <FaLocationDot></FaLocationDot>
            </i>
            <p className="userinfor__nav-list-child-text">Địa chỉ của tôi</p>
          </li>
        </Link>

        <Link
          to="/Resetpw"
          className="userinfor-nav-link"
        >
          <li className={`userinfor__nav-list-child ${activeLink === '/Resetpw' ? 'active-link' : ''}`}
              onClick={() => handleLinkClick('/Resetpw')} >
            <i className="userinfor__nav-list-child-icon">
              <FaKey></FaKey>
            </i>
            <p className="userinfor__nav-list-child-text">Đổi mật khẩu</p>
          </li>
        </Link>

        <Link
          to={handleLogout}
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
