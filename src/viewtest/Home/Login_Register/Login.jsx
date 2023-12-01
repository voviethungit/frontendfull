import React from "react";
import "./css/login.css";
import "./css/base.css"
import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null); 
  function resetError() {
    setLoginError(null);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
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
  
          if (data.userId) {
            window.localStorage.setItem("userId", data.userId);
          }
  
          window.location.href = "http://localhost:3000";
        } else {
          setLoginError(
            "Đăng nhập không thành công. Vui lòng kiểm tra lại tài khoản"
          );
        }
      })
      .catch((error) => {
        console.error("Đã xảy ra lỗi:", error);
        setLoginError("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.");
      });
  }
  


  return (
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
                      required
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
                      required
                      className="input-password"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-wrap-test">
              <p> Quên mật khẩu?</p>
            </div>
            <div className="wrap-btn-login">
              <button type="submit" className="" onClick={resetError}>
               Đăng nhập
              </button>
              {loginError && (
                <div className="alert alert-danger" role="alert">
                {loginError}
              </div>
              )}
            </div>
            <div className="register-now">
              <p>Bạn chưa là thành viên?  <Link to= "/register"> <span >Đăng kí ngay</span></Link> </p>
            </div>
            <div className="login-wrap-btn-icon">
              <div className="login-wrap-btn-icon__facebook">
                <span className="login-icon__face">
                  <FaFacebook />
                </span>
                <span>FaceBook</span>
              </div>

              <div className="login-wrap-btn-google">
                <span className="login-icon-Google">
                  <FaGoogle />
                </span>
                <span>Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
};

export default Login;
