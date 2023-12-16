import React, { useState, useEffect} from 'react';
import './css/base.css';
import './css/registercar.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Registercar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
    
          axios.get('http://localhost:5000/getProfile', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
            .then((response) => {
              setIsLoggedIn(true); // Đánh dấu đã đăng nhập thành công
            })
            .catch((error) => {
              console.error('Lỗi :', error);
            });
        }
      }, []);

    return (
        <>
        {isLoggedIn ? (
        <div className='registercar'>
            <div className='registercar__container'>
                <div className='registercar__container-list'>
                    <h1 className='registercar__container-list-name'> Thiết lập nhắc nhở</h1>
                    <p className='registercar__container-list-text'> Hãy thiết lập nhắc nhở về những chuyến đi để có thể tiết kiệm thời gian nhất
                    </p>
                    <div className='registercar__container-list-button'>
                        <button className='registercar__container-list-button-firt btn__large'>
                          <p>Nhắc Nhở</p>
                        </button>
                        <button className='registercar__container-list-button-last btn__large'>
                          <p>Hiển thị thông báo</p>
                        </button>
                    </div>
                </div>
                <img className='registercar__container-img' src='https://www.mioto.vn/static/media/thue_xe_oto_tu_lai_di_du_lich_gia_re.fde3ac82.png' alt=''></img>
            </div>
        </div>
        ) : (
        <div className='registercar'>
            <div className='registercar__container'>
                <div className='registercar__container-list'>
                    <h1 className='registercar__container-list-name'> Bạn chưa tạo tài khoản  ?</h1>
                    <p className='registercar__container-list-text'> Bạn chưa có tài khoản hãy đăng ký tài khoản ngay để biết thêm các dịch vụ của chúng tôi
                    </p>
                    <div className='registercar__container-list-button'>
                        <Link to='/dang-nhap'>
                        <button className='registercar__container-list-button-firt btn__large'><p>Đăng nhập</p></button>
                        </Link>
                        <Link to ='/dang-ky'>
                        <button className='registercar__container-list-button-last btn__large'><p>Đăng ký</p></button>
                        </Link>
                    </div>
                </div>
                <img className='registercar__container-img' src='https://www.mioto.vn/static/media/thue_xe_oto_tu_lai_di_du_lich_gia_re.fde3ac82.png' alt=''></img>
            </div>
        </div>
        )}
        </>
    )
}

export default Registercar
