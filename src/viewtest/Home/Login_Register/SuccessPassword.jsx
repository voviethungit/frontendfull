import React, { useState } from "react";
import "./css/forgotpassword.css";
import Header from "../Header";
import Footer from "../Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
const SuccessPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const { token } = useParams();
  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:5000/reset-password/${token}`,
        { newPassword }
      );

      console.log(response.data);
      setSuccessMessage(true); 
      setTimeout(() => {
        setSuccessMessage(false);
        window.location.href = "http://localhost:3000/dang-nhap";
      }, 3000);
      console.log(response.data);
      setResetSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      
      <div className="Forgotpassword-container">
        <div className="Forgotpassword-content">
          <div className="Forgotpassword-line-form">
            <div className="custom-input-Forgotpassword">
              <div className="wrap-info-Forgotpassword">
                <div className="title-status-Forgotpassword">
                  <p>Mật khẩu mới</p>
                  <div className="desc"></div>
                </div>
              </div>
              <div className="wrap-input-Forgotpassword">
                <div className="wrap-text-Forgotpassword">
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="Nhập Mật Khẩu Mới"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  ></input>
                       <div className={successMessage ? "backdrop-show" : "backdrop-hide"}>
          {/* Hiển thị backdrop hoặc thông báo thành công */}
          <div className="success-message">
                <p>Cập nhật mật khẩu thành công!</p>
              </div>
        </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap-btn-Forgotpassword">
            <button type="submit" className="" onClick={handleResetPassword}>
              Xác Nhận Mật Khẩu Mới
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SuccessPassword;
