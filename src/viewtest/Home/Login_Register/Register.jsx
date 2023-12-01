import React, { useState } from "react";
import "./css/register.css";
import "./css/base.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
function Register() {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setAvatarFile(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fullName":
        setFullname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "location":
        setLocation(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert("Mật khẩu phải chứa ít nhất 6 ký tự.");
      return;
    }
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", fullName);
      formDataToSend.append("phoneNumber", phoneNumber);
      formDataToSend.append("email", email);
      formDataToSend.append("password", password);
      formDataToSend.append("location", location);
      if (avatarFile) {
        formDataToSend.append("image", avatarFile);
      }

      const response = await axios.post(
        "http://localhost:5000/register",
        formDataToSend
      );
      if (response.data.success) {
        alert("Đăng ký thành công");
        window.location.href = "http://localhost:3000/login";
      } else {
        alert("Đăng ký không thành công. " + response.data.message);
      }
    } catch (error) {
      console.error("Có lỗi xảy ra khi Register:", error);
      alert("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="hehehe">
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Đăng ký</h2>
            </div>

            <div className="modal-body">
              <div className="modal-input-body">
                <div className="modal-input-body">
                  <div className="line-form">
                    <div className="custom-input">
                      <div className="wrap-info">
                        <div className="title-status">
                          <p>Ảnh Đại Diện</p>
                          <div className="desc"></div>
                        </div>
                      </div>
                      <div className="wrap-input">
                        <div className="wrap-text">
                          <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={(e) => handleImageChange(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="line-form">
                    <div className="custom-input">
                      <div className="wrap-info">
                        <div className="title-status">
                          <p>Số điện thoại</p>
                          <div className="desc"></div>
                        </div>
                      </div>
                      <div className="wrap-input">
                        <div className="wrap-text">
                          <input
                            type="text"
                            name="phoneNumber"
                            placeholder="Nhập Số Điện Thoại"
                            onChange={handleChange}
                            required
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="line-form">
                    <div className="custom-input">
                      <div className="wrap-info">
                        <div className="title-status">
                          <p>Họ và Tên</p>
                          <div className="desc"></div>
                        </div>
                      </div>
                      <div className="wrap-input">
                        <div className="wrap-text">
                          <input
                            type="text"
                            name="fullName"
                            placeholder="Nhập Họ và Tên"
                            onChange={handleChange}
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="line-form">
                    <div className="custom-input">
                      <div className="wrap-info">
                        <div className="title-status">
                          <p>Email</p>
                          <div className="desc"></div>
                        </div>
                      </div>
                      <div className="wrap-input">
                        <div className="wrap-text">
                          <input
                            type="text"
                            name="email"
                            placeholder="Nhập Email"
                            onChange={handleChange}
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="line-form">
                    <div className="custom-input">
                      <div className="wrap-info">
                        <div className="title-status">
                          <p>Mật Khẩu</p>
                          <div className="desc"></div>
                        </div>
                      </div>
                      <div className="wrap-input">
                        <div className="wrap-text">
                          <input
                            type="password"
                            name="password"
                            required
                            className="input-password"
                            placeholder="Nhập Mật Khẩu"
                            onChange={handleChange}
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="line-form">
                    <div className="custom-input">
                      <div className="wrap-info">
                        <div className="title-status">
                          <p>Địa chỉ</p>
                          <div className="desc"></div>
                        </div>
                      </div>
                      <div className="wrap-input">
                        <div className="wrap-text">
                          <input
                            type="text"
                            name="location"
                            placeholder="Nhập Địa Chỉ"
                            onChange={handleChange}
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wrap-test">
                    <div className="custom-checkbox-selected">
                      <input
                        type="checkbox"
                        id="myCheck"
                        checked={isChecked}
                        onClick={handleCheckboxClick}
                      ></input>
                      <label htmlFor="myCheck">
                        Tôi đồng ý với chính sách của Hungdev.
                        <a class="text-primary" href="/privacy">
                          Chi tiết
                        </a>
                      </label>
                    </div>
                  </div>
                  <div className="wrap-btn-register">
                    <button
                      type="submit"
                      className={`background ${
                        isChecked ? "new-background" : ""
                      }`}
                      id="backgroud2"
                    >
                      Đăng Ký
                    </button>
                  </div>
                  <div className="wrap-btn-text">
                    <p>
                      Bạn đã có tài khoản ?
                      <Link to="/login">
                        {" "}
                        <span>Đăng nhập</span>{" "}
                      </Link>
                    </p>
                  </div>
                  <div className="wrap-btn-icon">
                    <div className="wrap-btn-icon__facebook">
                      <span className="icon__face">
                        <FaFacebook />
                      </span>
                      <span>FaceBook</span>
                    </div>

                    <div className="wrap-btn-google">
                      <span className="icon-Google">
                        <FaGoogle />
                      </span>
                      <span>Google</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Register;
