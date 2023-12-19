import React, { useState, useEffect } from "react";
import "./css/userinfor.css";
import "./css/base.css";
import "./css/reponsive.css";
import "./css/mainuser.css";
import { FaMedal, FaCar, FaXmark } from "react-icons/fa6";
import Navbarmobile from "./Navbarmobile";
import axios from "axios";
import Modal from "./Modal";
import Userinfornav from "./Userinfornav";
import { useNavigate } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
function UserInfor() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);
  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [Vip, setVip] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [linkFB, setLinkFB] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [location, setLocation] = useState("");
  const [soGPLX, setSoGPLX] = useState("");
  const [hoTen, setHoTen] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [status, setStatus] = useState("");
  const [hinhAnhGiayPhep, setHinhAnhGiayPhep] = useState(null);
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setHinhAnhGiayPhep(selectedFile);
  };
  const handleSoGPLXChange = (event) => {
    setSoGPLX(event.target.value);
  };
  const handlehoTen = (event) => {
    setHoTen(event.target.value);
  };
  const handlengaySinh = (event) => {
    setNgaySinh(event.target.value);
  };
  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("soGPLX", soGPLX);
      formData.append("hoTen", hoTen);
      formData.append("ngaySinh", ngaySinh);
      formData.append("hinhAnhGiayPhep", hinhAnhGiayPhep);
      const accessToken = localStorage.getItem("accessToken");
      const userId = localStorage.getItem("userId");
      const response = await axios.post(
        `http://localhost:5000/create-gplx/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.log(soGPLX);
      console.log(hoTen);
      console.log(ngaySinh);
      console.log(hinhAnhGiayPhep);
      console.error(error);
    }
  };
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("userId");
    if (!accessToken || !userId) {
      return;
    }

    axios
      .get(`http://localhost:5000/get-gplx/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        if (response.data) {
          if (response.data.hoTen) {
            setHoTen(response.data.hoTen);
          }
          if (response.data.hinhAnhGiayPhep) {
            setHinhAnhGiayPhep(response.data.hinhAnhGiayPhep);
          }
          if (response.data.ngaySinh) {
            setNgaySinh(response.data.ngaySinh);
          }
          if (response.data.soGPLX) {
            setSoGPLX(response.data.soGPLX);
          }
          if (response.data.status) {
            setStatus(response.data.status);
          }
        }
      })
      .catch((error) => {
        console.error("Lỗi :", error);
      });
  }, []);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setLoggedIn(false);
    } else {
      axios
        .get("http://localhost:5000/getProfile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          setAvatar(response.data.user.avatar);
          setLinkFB(response.data.user.linkFB);
          setFullName(response.data.user.fullName);
          setPhoneNumber(response.data.user.phoneNumber);
          setEmail(response.data.user.email);
          setVip(response.data.user.Vip);
          setBirthDay(response.data.user.birthDay);
          setCreatedAt(response.data.user.createdAt);
          setLocation(response.data.user.location);
        })
        .catch((error) => {
          console.error("Lỗi :", error);
        });
    }
  }, []);
  if (!loggedIn) {
    navigate("/dang-nhap");
  }

  if (!fullName) {
    return (
      <div className="spinner-container">
        <BeatLoader color="#36d7b7" size={40} />
      </div>
    );
  }

  return (
    <div className="userinfor">
      <div className="userinfor__nav" id="userinfor__nav">
        <h1 className="userinfor__nav-name">Xin chào {fullName}!</h1>
        <Userinfornav />
      </div>

      {/* Drop menu mobile */}
      <Navbarmobile />

      <div className="userbox">
        <div className="userinfor__profile">
          <div className="userinfor__profile-account-title">
            <h3 className="userinfor__profile-account-projectname">
              Thông tin tài khoản
            </h3>
            <div>
              <Modal />
            </div>
          </div>
          <div className="userinfor__profile-main">
            <div className="userinfor__profile-account">
              <div className="userinfor__profile-account">
                <img
                  className="userinfor__profile-account-img"
                  src={avatar}
                  alt={fullName}
                ></img>
                <h3 className="userinfor__profile-account-name">{fullName}</h3>
                <p className="userinfor__profile-account-text">
                  Tham gia: {createdAt}
                </p>

                <div className="userinfor__profile-account-bonus-main">
                  <div className="userinfor__profile-detail-trip">
                    <div className="userinfor__profile-detail-trip-button">
                      <i className="userinfor__profile-detail-trip-button-icon">
                        <FaCar></FaCar>
                      </i>
                      <p className="userinfor__profile-detail-trip-button-text">
                        0 <span>chuyến</span>
                      </p>
                    </div>
                  </div>
                  <div className="userinfor__profile-account-bonus-content">
                    <div className="userinfor__profile-account-bonus">
                      <i className="userinfor__profile-account-bonus-icon">
                        <FaMedal></FaMedal>
                      </i>
                      <h5 className="userinfor__profile-account-bonus-name">
                        {Vip}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="userinfor__profile-detail">
              <div className="userinfor__profile-detail-form">
                <div className="userinfor__profile-detail-form-date">
                  <h3 className="userinfor__profile-detail-form-date-name">
                    Ngày sinh
                  </h3>
                  <p className="userinfor__profile-detail-form-date-text">
                    {birthDay}
                  </p>
                </div>
                <div className="userinfor__profile-detail-form-sex">
                  <h3 className="userinfor__profile-detail-form-sex-name">
                    Giới tính
                  </h3>
                  <p className="userinfor__profile-detail-form-sex-text">Nam</p>
                </div>
              </div>
              <div className="userinfor__profile-detail-list">
                <div className="userinfor__profile-detail-list-number">
                  <h3 className="userinfor__profile-detail-list-number-name">
                    Số điện thoại{" "}
                  </h3>
                  <h2 className="userinfor__profile-detail-list-number-text">
                    0{phoneNumber}
                  </h2>
                </div>
                <div className="userinfor__profile-detail-list-number">
                  <h3 className="userinfor__profile-detail-list-number-name">
                    Email{" "}
                  </h3>
                  <h2 className="userinfor__profile-detail-list-number-text">
                    {email}
                  </h2>
                </div>
                <div className="userinfor__profile-detail-list-number">
                  <h3 className="userinfor__profile-detail-list-number-name">
                    Facebook
                  </h3>
                  <h2 className="userinfor__profile-detail-list-number-text">
                    {linkFB}
                  </h2>
                </div>
                <div className="userinfor__profile-detail-list-number">
                  <h3 className="userinfor__profile-detail-list-number-name">
                    Địa chỉ{" "}
                  </h3>
                  <h2 className="userinfor__profile-detail-list-number-text">
                    {location}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="userinfor__papers">
          <div className="userinfor__papers-header">
            <div className="userinfor__papers-header-first">
              <h3 className="userinfor__papers-header-first-name">
                Giấy phép lái xe
              </h3>
              <div className="userinfor__papers-header-first-button btn__small">
                <i>
                  <FaXmark></FaXmark>
                </i>
                <p>{status}</p>
              </div>
            </div>
            <div className="update-papers">
              <button onClick={handleSave} className="button-enable">
                <div></div>
                Lưu
              </button>
            </div>
          </div>
          <div className="userinfor__papers-content">
            <div className="userinfor__papers-content-left">
              <h4 className="userinfor__papers-content-left-name">
                Thông tin chung
              </h4>
              <p className="userinfor__papers-content-left-text">Số GPLX</p>
              <input
                className="userinfor__papers-content-right-img-fill active-userinfor"
                type="text"
                placeholder="Nhập số GPLX "
                value={soGPLX}
                onChange={handleSoGPLXChange}
              ></input>
              <p className="userinfor__papers-content-left-text">Họ và tên</p>
              <input
                className="userinfor__papers-content-right-img-fill active-userinfor"
                type="text"
                placeholder="Nhập Họ và Tên "
                value={hoTen}
                onChange={handlehoTen}
              ></input>
              <p className="userinfor__papers-content-left-text">Ngày sinh</p>
              <input
                className="userinfor__papers-content-right-img-fill active-userinfor"
                type="date"
                placeholder="Nhập Ngày Sinh "
                value={ngaySinh}
                onChange={handlengaySinh}
              ></input>
            </div>
            <div className="userinfor__papers-content-right">
              <h4 className="userinfor__papers-content-right-name">Hình ảnh</h4>
              <div className="userinfor__papers-content-right-img">
                {!hinhAnhGiayPhep && (
                  <div>
                    <h2>Thêm ảnh :</h2>
                    <input
                      type="file"
                      onChange={handleChange}
                      className="userinfor__papers-content-right-img-fill active-userinfor"
                    />
                  </div>
                )}
              </div>
              {hinhAnhGiayPhep && <img src={hinhAnhGiayPhep} alt={hoTen} />}
            </div>
          </div>
        </div>
        <div className="userinfor__bootom"></div>
      </div>
    </div>
  );
}

export default UserInfor;
