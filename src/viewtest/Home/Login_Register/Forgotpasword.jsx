import React, {useState} from 'react'
import './css/forgotpassword.css'
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';

const Forgotpasword = () => {


  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/forgot-password",
        { email }
      );
      console.log(response.data);
      setSuccessMessage(true); 
      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
          <Header/>
        <form onSubmit={handleForgotPassword} className="form-Forgotpassword">
   
        <div className="Forgotpassword-container">
          <div className="Forgotpassword-content">
            <div className="Forgotpassword-header">
              <h2>Quên mật khẩu</h2>
            </div>
            <div className={successMessage ? "backdrop-show" : "backdrop-hide"}>
          {/* Hiển thị backdrop hoặc thông báo thành công */}
          <div className="success-message">
                <p>Yêu cầu đã được gửi thành công!</p>
              </div>
        </div>
            <div className="Forgotpassword-body">
              <div className="Forgotpassword-input-body">
                <div className="Forgotpassword-line-form">
                  <div className="custom-input-Forgotpassword">
                    <div className="wrap-info-Forgotpassword">
                      <div className="title-status-Forgotpassword">
                        <p>Email</p>
                        <div className="desc"></div>
                      </div>
                    </div>
                    <div className="wrap-input-Forgotpassword">
                      <div className="wrap-text-Forgotpassword">
                        <input
                          type="email"
                          name="email"
                          placeholder="Nhập Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrap-btn-Forgotpassword">
                  <button type="submit" className="">
                    Gửi Yêu Cầu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Forgotpasword;
