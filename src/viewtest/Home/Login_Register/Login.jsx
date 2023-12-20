import React from "react";
import "./css/login.css";
import "./css/base.css"
import { useState ,  useEffect} from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SuccessNotification = () => {
  return (
    <div className="success-notification2">
   
      <p>Đăng nhập thành công!</p>
    </div>
  );
};
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null); 
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
const [errorModalVisible, setErrorModalVisible] = useState(false);
const [errorModalContent, setErrorModalContent] = useState("");
const [ submitted,setSubmitted] = useState(false);
  function resetError() {
    setLoginError(null);
  }
  
  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (!email || !password) {
      showErrorModal("Email hoặc số điện thoại không tồn tại");
      return;
    }
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          console.log(data, "userLogin");
  
          window.localStorage.setItem("accessToken", data.accessToken);
          if (data.banned) {
            showErrorModal("Tài khoản của bạn đã bị khóa bởi quản trị viên.");
          } else if (data.userId) {
            window.localStorage.setItem("userId", data.userId);
            setShowSuccessNotification(true); // Show success notification
  
            // Redirect after 4 seconds
            setTimeout(() => {
              window.location.href = "http://localhost:3000";
            }, 4000);
          }
        } else {
          showErrorModal(
            " Tài khoản của bạn không hợp lệ , xin vui lòng thử lại."
          );
        }
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra khi Register:", error);
        showErrorModal(" Tài khoản của bạn không hợp lệ , xin vui lòng thử lại.");
      });
  }

  const showErrorModal = (content) => {
    setErrorModalContent(content);
    setErrorModalVisible(true);
  };

  const hideErrorModal = () => {
    setErrorModalVisible(false);
    setErrorModalContent("");
  };
  const handleOverlayClick = (e) => {
    console.log("Overlay clicked");
    if (e.target.classList.contains("background-modal-opacity2")) {
      hideErrorModal();
    }
  };
  useEffect(() => {
    const body = document.querySelector("body");
    if (errorModalVisible) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [errorModalVisible]);

  return (
    <div>
     {showSuccessNotification && (
        <SuccessNotification onClose={() => setShowSuccessNotification(false)} />
      )}

                   {errorModalVisible && (
           <div className="background-modal-opacity2"  onClick={handleOverlayClick}>
        <div className="modal-error2 ">

            <button onClick={hideErrorModal}>X</button>
            <h1>Đăng nhập</h1>
            <p>{errorModalContent}</p>

        </div>
      </div>
    )}
    <form className="login-form-group" onSubmit={handleSubmit}>
    <div className="Login-container">
      <div className="login-content">
        <div className="login-header">
          <h2>Đăng nhập</h2>
        </div>
        <div className="login-body">
          <div className="login-input-body">
            <div className="login-line-form">
              <div className="custom-input-login">
                <div className="wrap-info-login">
                  <div className="title-status-login">
                    <p>Email</p>
                    <div className="desc"></div>
                  </div>
                </div>
                <div className="wrap-input-login">
                  <div className="wrap-text-login">
                    <input
                      type="email"
                      name="email"
                      placeholder="Nhập Email"
                      onChange={(e) => setEmail(e.target.value)}
            
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-line-form">
              <div className="custom-input-login">
                <div className="wrap-info-login">
                  <div className="title-status-login">
                    <p>Mật Khẩu</p>
                    <div className="desc"></div>
                  </div>
                </div>
                <div className="wrap-input-login">
                  <div className="wrap-text-login">
                    <input
                      type="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Nhập Mật Khẩu"
                   
               
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <Link to ="/dang-nhap/quen-mat-khau" className="login-wrap-test">
              <p> Quên mật khẩu?</p>
            </Link>
            <div className="wrap-btn-login">
              <button type="submit" className="" onClick={resetError}> 
               Đăng nhập
              </button>
          
            </div>
            <div className="register-now">
              <p>Bạn chưa là thành viên?  <Link to= "/dang-ky"> <span >Đăng kí ngay</span></Link> </p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
    </form>
    </div>
  );
};

export default Login;
