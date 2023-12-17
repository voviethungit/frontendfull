import React, {useState} from 'react';
import './css/userinfor.css';
import './css/base.css';
import './css/reponsive.css'
import './css/mainuser.css'
import { Link } from 'react-router-dom';


function Navbarmobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState("Tài khoản của tôi");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setCurrentItem(item);
    setIsOpen(false);
  };
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.href = "http://localhost:3000/"
  };

  return (
    <div>
      <div className="dropdown-menu">
        <button className="dropdown-button" onClick={toggleDropdown}>
          {currentItem}
        </button>
        {isOpen && (
          <ul className="dropdown-list">
            <Link to="/nguoi-dung" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Tài khoản của tôi")}>
                Tài Khoản của tôi
              </li>
            </Link>

            <Link to="/xe-yeu-thich" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Xe yêu thích")}>Xe yêu thích</li>
            </Link>

            {/* <Link to="/xe-cua-toi" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Xe của tôi")}>Xe của tôi</li>
            </Link> */}
            <Link to="/vi-cua-toi" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Ví của tôi")}>Ví của tôi</li>
            </Link>
            <Link to="/qua-tang-cua-toi" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Quà tặng")}>Quà tặng</li>
            </Link>
            <Link to="/chuyen-di-cua-toi" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Lịch sử chuyến")}>Lịch sử chuyến</li>
            </Link>
            <Link to="/doi-mat-khau" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Đổi mật khẩu")}>Đổi mật khẩu</li>
            </Link>
            <Link to="http://localhost:3000/" className='dropdown-list-link'>
              <li onClick={handleLogout}>Đăng xuất</li>
            </Link>
            <Link to="/Deleteaccount" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Xóa tài khoản")}>Xóa tài khoản</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}
export default Navbarmobile;