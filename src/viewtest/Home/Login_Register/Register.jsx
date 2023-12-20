import React, { useState , useEffect  } from "react";
import "./css/register.css";
import "./css/base.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa6";
const SuccessNotification = () => {
  return (
    <div className="success-notification">
   
      <p>Đăng ký thành công!</p>
    </div>
  );
};
function Register() {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorModalContent, setErrorModalContent] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [imageSelected, setImageSelected] = useState(false);
const [isFileInputVisible, setIsFileInputVisible] = useState(true);
  const [fileInputLabel, setFileInputLabel] = useState({
    text: "Chọn ảnh",
    visible: true,
  });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setAvatarFile(file);
    const fileName = file ? file.name : "Chọn ảnh";
    setFileInputLabel({
      text: fileName,
      visible: false,
    });
    setImageSelected(true);
  
    // Ẩn input "Choose File" khi chọn ảnh thành công
    setIsFileInputVisible(false);
  };
  const containsNumber = (str) => {
    const numberRegex = /\d/;
    return numberRegex.test(str);
  };
  const containsSpecialCharacter = (str) => {
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return specialCharacterRegex.test(str);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fullName":
        if (containsSpecialCharacter(value)) {
          // Nếu tên có chứa kí tự đặc biệt, hiển thị thông báo lỗi
          showErrorModal("Họ và Tên không được chứa kí tự đặc biệt.");
        }
        if (containsNumber(value)) {
          // Nếu tên có chứa số, hiển thị thông báo lỗi
          showErrorModal("Họ và Tên không được chứa số.");
        }
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
    setSubmitted(true);
    
    if (!fullName || !email || !password || !location || !phoneNumber || !avatarFile) {
      showErrorModal("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
  
    if (!isChecked) {
      showErrorModal("Bạn phải đồng ý với chính sách của Hungdev.");
      return;
    }

    if (password.length < 6) {
      showErrorModal("Mật khẩu phải chứa ít nhất 6 ký tự.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showErrorModal("Địa chỉ email không hợp lệ.");
      return;
    }

    const isNumeric = /^\d+$/;
if (!isNumeric.test(phoneNumber)) {
  showErrorModal("Số điện thoại không hợp lệ");
  return;
}

// Check if the phone number has at least 10 digits
if (phoneNumber.length < 10) {
  showErrorModal("Số điện thoại không hợp lệ");
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

        setShowSuccessNotification(true);
        setTimeout(() => {
          setShowSuccessNotification(false);
          window.location.href = "http://localhost:3000/dang-nhap";
        }, 3000);
   
      } else {
        showErrorModal("Đăng ký không thành công. " + response.data.message);
      }
    } catch (error) {
      console.error("Có lỗi xảy ra khi Register:", error);
      showErrorModal("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };
 
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
    if (e.target.classList.contains("background-modal-opacity")) {
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
           <div className="background-modal-opacity"  onClick={handleOverlayClick}>
        <div className="modal-error ">
       <img src="https://th.bing.com/th/id/R.fe2dd5ae5f292611169640ea4175cff2?rik=4aPcCLbsDWo5Wg&pid=ImgRaw&r=0" alt="" />
            <button onClick={hideErrorModal}>X</button>
            <p>{errorModalContent}</p>

        </div>
      </div>
    )}
          


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
                        <div className="wrap-text file-input-wrapper">
                          <input
                            type="file"
                            name="avatar"
                      accept="image/*"
                      style={{ display: isFileInputVisible ? "block" : "none" }}    
                      onChange={(e) => handleImageChange(e)}
                          />
  
{avatarFile && (
    <div className="wrap-images">
      <img src={URL.createObjectURL(avatarFile)} alt="Avatar" />
    </div>
  )}
  {imageSelected && (
    <label className="file-input-label" id="file-input-label">
      {fileInputLabel.visible ? fileInputLabel.text : ""}
    </label>
    )}
                        
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
                      <div className= "wrap-text">
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
                      <Link to="/dang-nhap">
                        {" "}
                        <span>Đăng nhập</span>{" "}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
     

    </form>
    </div>
  );
}

export default Register;
