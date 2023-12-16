import React, { useState, useEffect } from "react";
import "./css/userinfor.css";
import "./css/base.css";
import "./css/reponsive.css";
import "./css/mainuser.css";
import {
  FaMedal,
  FaCar,
  FaXmark,
} from "react-icons/fa6";
import Navbarmobile from "./Navbarmobile";
import axios from "axios";
import Modal from "./Modal";
import Userinfornav from "./Userinfornav";
import { useNavigate   } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
function UserInfor() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);
  const [fullName, setFullName] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [Vip, setVip] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [linkFB, setLinkFB] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      setLoggedIn(false);
    } else {

      axios.get('http://localhost:5000/getProfile', {
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
          console.error('Lỗi :', error);

        });
        
    }
  }, []);
  if (!loggedIn) {
    navigate("/dang-nhap");
  }

  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const cancelEdit = () => {
    setEditMode(false);
    setFile(null);
  };
  
//them anh
  const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
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
        <Userinfornav/>
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
              <Modal/>
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
                <p>Chưa xác thực</p>
              </div>
            </div>
            <div className="update-papers">
              <button onClick={toggleEditMode} className="button-enable">
                <div></div>
                {editMode ? "Lưu" : "Chỉnh sửa "}
              </button>
              {editMode && <button className="button-enable" onClick={cancelEdit}>Hủy</button>}
            </div>
          </div>
          <div className="userinfor__papers-content">
            <div className="userinfor__papers-content-left">
              <h4 className="userinfor__papers-content-left-name">
                Thông tin chung
              </h4>
              <p className="userinfor__papers-content-left-text">Số GPLX</p>
              <input
                className={
                  editMode
                    ? "userinfor__papers-content-left-input active-userinfor"
                    : "userinfor__papers-content-left-input"
                }
                disabled={!editMode}
                type="text"
                placeholder="Nhập số GPLX đã cấp"
              ></input>
              <p className="userinfor__papers-content-left-text">Họ và tên</p>
              <input
                className={
                  editMode
                    ? "userinfor__papers-content-left-input active-userinfor"
                    : "userinfor__papers-content-left-input"
                }
                disabled={!editMode}
                type="text"
                placeholder="Nhập đầy đủ họ tên"
              ></input>
              <p className="userinfor__papers-content-left-text">Ngày sinh</p>
              <input type="date"
                className={
                  editMode
                    ? "userinfor__papers-content-left-input active-userinfor"
                    : "userinfor__papers-content-left-input"
                }
                disabled={!editMode}
              ></input>
            </div>
            <div className="userinfor__papers-content-right">
              <h4 className="userinfor__papers-content-right-name">Hình ảnh</h4>
              <div className="userinfor__papers-content-right-img">
              <h2>Thêm ảnh :</h2>
              <input type="file" onChange={handleChange}
                className={
                editMode
                  ? "userinfor__papers-content-right-img-fill active-userinfor"
                  : "userinfor__papers-content-right-img-fill"}
              disabled={!editMode}/>
              <img src={file} alt="" className="image-GPLX"/>
              </div>
            </div>
          </div>
        </div>
        <div className="userinfor__bootom"></div>
      </div>
    </div>
  );
}

export default UserInfor;
