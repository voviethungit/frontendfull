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

  return (
    <div>
      <div className="dropdown-menu">
        <button className="dropdown-button" onClick={toggleDropdown}>
          {currentItem}
        </button>
        {isOpen && (
          <ul className="dropdown-list">
            <Link to="/user" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Tài khoản của tôi")}>
                Tài Khoản của tôi
              </li>
            </Link>

            <Link to="/myfavs" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Xe yêu thích")}>Xe yêu thích</li>
            </Link>

            <Link to="/Mycars" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Xe của tôi")}>Xe của tôi</li>
            </Link>
            <Link to="/Mytrips" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Chuyến đi của tôi")}>Ví của tôi</li>
            </Link>
            <Link to="/Myreward" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Quà tặng")}>Quà tặng</li>
            </Link>
            <Link to="/Myaddress" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Địa chỉ của tôi")}>Địa chỉ của tôi</li>
            </Link>
            <Link to="/Resetpw" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Đổi mật khẩu")}>Đổi mật khẩu</li>
            </Link>
            <Link to="/MainUser" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Đăng xuất")}>Đăng xuất</li>
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