import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import "./Pay.css";
import "../Home/css/base.css";
import { FaCar, FaClipboardUser, FaArrowRight, FaCheck } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Pay() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [price, setPrice] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isVnPaySelected, setVnPaySelected] = useState(false);
  const [isAccountBalanceSelected, setAccountBalanceSelected] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [accountBalance, setAccountBalance] = useState(0);
  
  const handleRentCar = () => {
    if (isVnPaySelected || isAccountBalanceSelected) {
      setShowConfirmation(true);
    }
  };

  const [showRechargeModal, setShowRechargeModal] = useState(false);
  const handleCancelRecharge = () => {
    setShowRechargeModal(false);
    setShowConfirmation(false);
  };
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalTimeout, setModalTimeout] = useState(null);

  const handleConfirmRent = () => {
    const userId = localStorage.getItem("userId");
    const accessToken = localStorage.getItem("accessToken");
    let shouldShowRechargeModal = false;

    if (isAccountBalanceSelected && accountBalance < price) {
      shouldShowRechargeModal = true;
    }

    if (userId && accessToken) {
      axios
        .post(`http://localhost:5000/rent-car/${userId}/${id}`, null, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log("Thuê xe thành công:", response.data);
          setShowSuccessModal(true);

          const timeoutId = setTimeout(() => {
            setShowSuccessModal(false);
            setTimeout(() => {
              window.location.href = "http://localhost:3000";
            }, 1500);
          }, 1500);
          setModalTimeout(timeoutId);
        })
        .catch((error) => {
          console.error("Lỗi khi thuê xe:", error);
        })
        .finally(() => {
          setShowConfirmation(false);
          if (shouldShowRechargeModal) {
            setShowRechargeModal(true);
          }
        });
    } else {
      setShowConfirmation(true);
    }
  };

  const handleCancelRent = () => {
    setShowConfirmation(false);
  };
  
  useEffect(() => {
    return () => {
      // Làm sạch hẹn giờ khi component bị hủy
      if (modalTimeout) {
        clearTimeout(modalTimeout);
      }
    };
  }, [modalTimeout]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-car/${id}`)
      .then((response) => {
        setTitle(response.data.car.title);
        setImagePath(response.data.car.imagePath);
        setPrice(response.data.car.price);
      })
      .catch((error) => {
        console.error("Lỗi:", error);
      });
  }, [id]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      axios
        .get("http://localhost:5000/getProfile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          setPhoneNumber(response.data.user.phoneNumber);
          setFullName(response.data.user.fullName);
          setLocation(response.data.user.location);
          setAccountBalance(response.data.user.accountBalance);
        })
        .catch((error) => {
          console.error("Lỗi :", error);
        });
    }
  }, []);
  return (
    <div>
      <Header />
      <div className="pay">
        <form className="pay__information">
          <h3 className="pay__information-name">Chọn thuê</h3>
          <div className="pay__information__flex">
            <div className="pay__information-product">
              <span>
                Thông tin xe thuê{" "}
                <i>
                  <FaCar />
                </i>
              </span>
              <div className="pay__information-product-all">
                <div className="pay__information-product-name">
                  <h3>Tên xe : </h3> <p>{title} </p>
                </div>
                <div className="pay__information-product-image">
                  <img src={imagePath} alt={title} />
                </div>
                <div className="pay__information-product-name">
                  <h3>Giá tiền: </h3> <p>{price + 250000} </p>
                </div>
              </div>
            </div>
            <div className="pay__information-user">
              <span>
                Thông tin người dùng{" "}
                <i>
                  <FaClipboardUser />
                </i>
              </span>
              <div className="pay__information-user__border">
                <div className="pay__information-user-name">
                  <p>Họ tên: {fullName}</p>
                </div>
                <div className="pay__information-user-phone">
                  <p>SDT: 0{phoneNumber}</p>
                </div>
                <div className="pay__information-user-location">
                  <p>Địa chỉ: {location}</p>
                </div>
                <div className="pay__information-user-location">
                  <p>Số dư tài khoản: {accountBalance}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pay__information-method">
            <span> Chọn phương thức thanh toán :</span>
            <div
              className={`pay__information-method-online ${
                isVnPaySelected ? "selected" : ""
              }`}
              onClick={() => {
                // setVnPaySelected(!isVnPaySelected);
                // setAccountBalanceSelected(false);
              }}
            >
              <p>VN Pay (đang phát triển)</p>
            </div>
            <div
              className={`pay__information-method-ofline ${
                isAccountBalanceSelected ? "selected" : ""
              }`}
              onClick={() => {
                setAccountBalanceSelected(!isAccountBalanceSelected);
                setVnPaySelected(false);
              }}
            >
              <p>Tiền tài khoản</p>
            </div>
          </div>
          <div className="pay__information-pay">
            <button
              className={`btn__large pay__information-pay-button ${
                !(isVnPaySelected || isAccountBalanceSelected) ? "disabled" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleRentCar();
              }}
              disabled={!(isVnPaySelected || isAccountBalanceSelected)}
              // onClick={handleConfirmRent} type="submit"
            >
              Chọn thuê
            </button>
          </div>
        </form>
      </div>
      <Footer />
      {showConfirmation && (
        <div className="confirmation-popup">
          <div className="confirmation-popup-content">
            <p>Bạn có chắc muốn thuê xe?</p>
            <div className="confirmation-popup-buttons">
              <button className="confirm-button" onClick={handleConfirmRent}>
                Xác nhận
              </button>
              <button
                className="cancel-button"
                onClick={() => setShowConfirmation(false)}
              >
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      )}
      {showSuccessMessage && (
        <div className="success-message">
          <p>Thuê xe thành công!</p>
        </div>
      )}
      {showRechargeModal && (
        <div className="recharge-modal">
          <div className="recharge-modal-content">
            <div className="recharge-modal-text">
              <p className="warning-text">Tài khoản không đủ tiền !.</p>
              <img
                src="https://img7.thuthuatphanmem.vn/uploads/2023/08/29/hinh-het-tien-meme-doc-dao_085859180.jpg"
                className="img-hettien"
                alt=""
              />
              <p className="warning-text">
                Vui lòng nạp thêm tiền vào tài khoản để thỏa sức thuê xe!!!.
              </p>
            </div>
            <div className="recharge-modal-btn">
              <Link to="/nap-tien" className="confirm-button">
                Nạp tiền ngay
              </Link>
              <button className="cancel-button" onClick={handleCancelRecharge}>
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
      {showSuccessModal && (
        <div className="success-modal">
          <div className="success-modal-content">
            <p>
              Thuê xe thành công
              <FaCheck />!
            </p>
            <p>Bây giờ bạn có thể liên hệ chủ xe để nhận xe đúng nơi nhất </p>
            <button
              className="confirm-button"
              onClick={() => setShowSuccessModal(false)}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pay;
