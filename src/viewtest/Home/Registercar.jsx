import React from 'react';
import './css/base.css';
import './css/registercar.css';
import { Link } from 'react-router-dom';

function Registercar() {
    return (
        <div className='registercar'>
            <div className='registercar__container'>
                <div className='registercar__container-list'>
                    <h1 className='registercar__container-list-name'> Bạn chưa tạo tài khoản  ?</h1>
                    <p className='registercar__container-list-text'> Bạn chưa có tài khoản hãy đăng ký tài khoản ngay để biết thêm các dịch vụ của chúng tôi
                    </p>
                    <div className='registercar__container-list-button'>
                        <Link to='/login'>
                        <button className='registercar__container-list-button-firt btn__large'><p>Đăng nhập</p></button>
                        </Link>
                        <Link to ='/register'>
                        <button className='registercar__container-list-button-last btn__large'><p>Đăng ký</p></button>
                        </Link>
                    </div>
                </div>
                <img className='registercar__container-img' src='https://www.mioto.vn/static/media/thue_xe_oto_tu_lai_di_du_lich_gia_re.fde3ac82.png' alt=''></img>
            </div>
        </div>
    )
}

export default Registercar
