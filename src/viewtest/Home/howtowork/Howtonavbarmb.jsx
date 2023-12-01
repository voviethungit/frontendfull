import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./css/reponsive.css";



function Howtonavbarmb() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState("Hướng dẫn chung");
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setCurrentItem(item);
    setIsOpen(false);
  };

  return (
    <div className='dropdown-menu-mb-main'>
      <div className="dropdown-menu-mb">
        <button className="dropdown-button" onClick={toggleDropdown}>
          {currentItem}
        </button>
        {isOpen && (
          <ul className="dropdown-list">
            <Link to="/Mainhowto" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Hướng dẫn chung")}>
                Hướng dẫn chung
              </li>
            </Link>
            <Link to="/Booking" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Hướng dẫn đặt xe")}>Hướng dẫn đặt xe</li>
            </Link>
            <Link to="/Paymenthowto" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Hướng dẫn thanh toán ")}>Hướng dẫn thanh toán </li>
            </Link>
            <Link to="/Regu" className='dropdown-list-link'>
              <li onClick={() => handleItemClick("Quy chế hoạt động")}>Quy chế hoạt động</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
}
export default Howtonavbarmb;