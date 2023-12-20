import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/base.css';
import './css/content.css';
import { BsShieldCheck } from 'react-icons/bs';
import { FaLocationDot, FaStar, FaCarRear, FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BeatLoader from "react-spinners/BeatLoader";
function Content() {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [currentItem, setCurrentItem] = useState('Danh Mục');
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCarsPerPage] = useState(9);
  const [hasProducts, setHasProducts] = useState(true);
  const [filteredCarsByCategory, setFilteredCarsByCategory] = useState([]); 

  const handleWindowSizeChange = () => {
    const width = window.innerWidth;

    if (width >= 990) {
      setCarsPerPage(9);
    } else if (width >= 550 && width < 990) {
      setCarsPerPage(4);
    } else {
      setCarsPerPage(2);
    }
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

    const toggleDropdown = () => {
      setIsOpenCategory(!isOpenCategory);
    };

  const handleItemClick = (item) => {
    setCurrentItem(item);
    setIsOpenCategory(false);

    setSelectedDistrict(item === 'Danh Mục' ? null : item);
    setFilteredCarsByCategory([]); // Reset danh sách đã lọc theo danh mục
  };

  
  useEffect(() => {
    axios
      .get('http://localhost:5000/get-car')
      .then((response) => {
        const carsData = response.data.cars;

        const categoryFilter =
          selectedDistrict === null ? carsData : carsData.filter((car) => car.location === selectedDistrict);
          console.log(categoryFilter);

        let nameFilter = [];
        if (search !== '') {
          nameFilter = categoryFilter.filter((car) => car.title.toLowerCase().includes(search.toLowerCase()));
        } else {
          nameFilter = categoryFilter;
        }
        console.log(nameFilter);


        setFilteredCars(nameFilter);

        setHasProducts(nameFilter.length > 0);

      })
      .catch((error) => {
        console.error('Lỗi:', error);
      });
  }, [search, selectedDistrict, currentItem]);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setSelectedDistrict(null);
    setCurrentPage(1);
  };
  if (!cars) {
    return <div className="spinner-container">
    <BeatLoader color="#36d7b7" size={40} />
  </div>;
  }
  return (
    <div className="content" id="content">
      <h1 className="content__text">Xe dành cho bạn</h1>
      <div className="content__search">
        <div className="content__search-form">
          <input
            type="text"
            className="content__search-form-input"
            placeholder="Tìm Kiếm Xe"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="search-menu">
          <button className="search-button" onClick={toggleDropdown}>
            {currentItem} <i><FaAngleDown /></i>
          </button>
          {isOpenCategory && (
            <ul className="search-list">
              <li onClick={() => handleItemClick("Danh Mục")}>
                Danh Mục
              </li>
              <li onClick={() => handleItemClick("Quận Liên Chiểu")}>
                Quận Liên Chiểu
              </li>
              <li onClick={() => handleItemClick("Quận Thanh Khê")}>
                Quận Thanh Khê
              </li>
              <li onClick={() => handleItemClick("Quận Ngũ Hành Sơn")}>
                Quận Ngũ Hành Sơn
              </li>
              <li onClick={() => handleItemClick("Quận Sơn Trà")}>
                Quận Sơn Trà
              </li>
              <li onClick={() => handleItemClick("Quận Hải Châu")}>
                Quận Hải Châu
              </li>
              <li onClick={() => handleItemClick("Quận Cẩm Lệ")}>
                Quận Cẩm Lệ
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="content__list">
        {!hasProducts &&
          <div className='not__product'>
            <img src='https://etecvn.com/default/template/img/cart-empty.png' alt='hình ảnh không có sản phẩm' className='not__product-img'>
            </img>
            <h3 className='not__product-text'>Hiện tại không có xe thuê cần tìm</h3>
          </div>}
        {currentCars.map((car, index) => (
          <Link to={`/san-pham/${car._id}`} className='content__list-child' key={index}>
            <nav>
              <img src={car.imagePath} className='content__list-child-img' alt={`Car ${index}`} />
              <div className='btn__freetax content__list-child-img-tax '>
                <p className='content__list-child-img-tax-text'>
                  {car.flash}
                </p>
              </div>
              <div className='content__list-child-img-flash btn__electronic'>
                <p className='content__list-child-img-flash-text'>
                  {car.tax}
                </p>
              </div>
            </nav>
            <div className='content__list-child-auto'>
              <div className='content__list-child-auto-car '>
                <p className='content__list-child-auto-car-text'> {car.tax2}</p>
              </div>
              <div className='content__list-child-auto-location'></div>
            </div>
            <div className='content__list-child-name'>
              <h1 className='content__list-child-name-main'>{car.title}</h1>
              <i><BsShieldCheck /></i>
            </div>
            <div className='content__list-child-location'>
              <i><FaLocationDot /></i>
              <p className='content__list-child-location-text'>{car.location}</p>
            </div>
            <div className='content__list-child-underlined'> </div>
            <div className='content__list-child-detail'>
              <div className='content__list-child-detail-evaluate'>
                {/* <div className='content__list-child-detail-evaluate-star'>
                  <i><FaStar /></i>
                  <p className='content__list-child-detail-evaluate-star-text'>{car.star}</p>
                </div> */}
                <div className='content__list-child-detail-evaluate-usage'>
                  <i><FaCarRear /></i>
                  <p className='content__list-child-detail-evaluate-usage-text'>{car.usage} lượt thuê</p>
                </div>
              </div>
              <div className='content__list-child-detail-buy'>
                <span className='content__list-child-detail-buy-sale'>
                  {car.price}vnđ
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {filteredCars.length > carsPerPage && (
        <div className="pagination">
          {Array.from({ length: Math.ceil(filteredCars.length / carsPerPage) }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)} className={`pagination-button ${index + 1 === currentPage ? 'active' : ''}`}>
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Content;
