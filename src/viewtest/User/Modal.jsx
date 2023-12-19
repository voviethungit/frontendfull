import React, { useState, useEffect } from "react";
import {
  Grid,
  Dialog,
  TextField,
  DialogActions,
  Button,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FaPen } from "react-icons/fa6";
import axios from "axios";
import "./css/modal.css";


function AnimatedModal() {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    location: "",
    birthDay: "",
    linkFB: "",
    avatar: "",
  });
  const [editUserErrors, setEditUserErrors] = useState({
    fullName: "",
    email: "",
    location: "",
    birthDay: "",
    linkFB: "",
    avatar: "",
  });
  const [edituserData, setEditUserData] = useState({
    fullName: "",
    email: "",
    location: "",
    birthDay: "",
    linkFB: "",
    avatar: null,
  });
  
  
  const [fullName, setFullName] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [linkFB, setLinkFB] = useState('');
  const [location, setLocation] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setEditUserData({ ...edituserData, avatar: selectedFile });
    setAvatar(URL.createObjectURL(selectedFile)); // Cập nhật biến trạng thái avatar để hiển thị
  };
  const handleInputChange = (e, field) => {
    setUserDetails({
      ...userDetails,
      [field]: e.target.value,
    });
  };
  const handleOpenEditDialog = () => {
    setEditUserData({
      fullName: fullName,
      email: email,
      location: location,
      birthDay: birthDay,
      linkFB: linkFB,
      avatar: avatar,
    });
    setOpenEditDialog(true);
  };
  const handleEditUser = async () => {
    try {
      const errors = {};
      if (!edituserData.fullName || edituserData.fullName.trim() === "") {
        errors.fullName = "Vui lòng nhập Họ và Tên.";
      }
      // if (!edituserData.avatar || !edituserData.avatar.name) {
      //   errors.avatar = "Vui lòng chọn Hình Ảnh.";
      // }
      if (!edituserData.email || edituserData.email.trim() === "") {
        errors.email = "Vui lòng nhập Email.";
      }
      if (!edituserData.birthDay || edituserData.birthDay.trim() === "") {
        errors.birthDay = "Vui lòng chọn ngày sinh.";
      }
      if (!edituserData.location || edituserData.location.trim() === "") {
        errors.location = "Vui lòng nhập địa chỉ.";
      }
      if (!edituserData.linkFB || edituserData.linkFB.trim() === "") {
        errors.linkFB = "Vui lòng nhập URL Facebook.";
      }
      if (Object.keys(errors).length > 0) {
        setEditUserErrors(errors);
        return;
      }
      const formData = new FormData();
      formData.append("image", edituserData.avatar);
      formData.append("fullName", edituserData.fullName);
      formData.append("phoneNumber", edituserData.phoneNumber);
      formData.append("email", edituserData.email);
      formData.append("birthDay", edituserData.birthDay);
      formData.append("linkFB", edituserData.linkFB);
      formData.append("location", edituserData.location);
      const accessToken = localStorage.getItem("accessToken");
      const userId = localStorage.getItem("userId");
      
      const userDataToUpdate = { ...userDetails };

      const response = await axios.put(
        `http://localhost:5000/edit-user/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.data.success) {
        console.log("Cập nhật thành công:", response.data.user);
        setOpenEditDialog(false);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };


  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {

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
          setBirthDay(response.data.user.birthDay);
          setLocation(response.data.user.location);
        })
        .catch((error) => {
          console.error('Lỗi :', error);

        });
    }
  }, []);
  
  return (
    <div className="modal-user-main">
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenEditDialog}
      >
        Chỉnh sửa
      </Button>
      <Dialog open={openEditDialog} onClose={() => setOpenEditDialog(false)}>
        <DialogTitle>Chỉnh sửa thông tin</DialogTitle>
        <DialogContent>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} className="change-avatar">
            <input
          type="file"
          onChange={handleFileChange}
          // accept="image/*"
          id="avatarInput"
          style={{ display: "none" }}
        />
        <label htmlFor="avatarInput" className="label-top">
          <Button variant="contained" component="span">
            Thay ảnh đại diện
          </Button>
        </label>
        {edituserData.avatar && (
          <p>File đã chọn: {edituserData.avatar.name}</p>
        )}
        <img src={avatar} alt="" className="avatar-input"/>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Họ và Tên"
                name="fullName"
                value={edituserData.fullName}
                onChange={(e) =>
                  setEditUserData({ ...edituserData, fullName: e.target.value })
                }
                error={!!editUserErrors.fullName}
                helperText={editUserErrors.fullName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nhập Email"
                name="email"
                value={edituserData.email}
                onChange={(e) =>
                  setEditUserData({ ...edituserData, email: e.target.value })
                }
                error={!!editUserErrors.email}
                helperText={editUserErrors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="date"
                label="Nhập Ngày Sinh"
                name="birthDay"
                value={edituserData.birthDay}
                onChange={(e) =>
                  setEditUserData({ ...edituserData, birthDay: e.target.value })
                }
                error={!!editUserErrors.birthDay}
                helperText={editUserErrors.birthDay}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nhập Địa Chỉ Của Bạn"
                name="location"
                value={edituserData.location}
                onChange={(e) =>
                  setEditUserData({ ...edituserData, location: e.target.value })
                }
                error={!!editUserErrors.location}
                helperText={editUserErrors.location}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nhập URL Facebook của bạn"
                name="linkFB"
                value={edituserData.linkFB}
                onChange={(e) =>
                  setEditUserData({ ...edituserData, linkFB: e.target.value })
                }
                error={!!editUserErrors.linkFB}
                helperText={editUserErrors.linkFB}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditDialog(false)}>Hủy</Button>
          <Button onClick={handleEditUser} color="primary">
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AnimatedModal;