import React from 'react';
import './css/userinfor.css';
import './css/base.css';
import './css/mainuser.css';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import {Link} from 'react-router-dom';
import Navbarmobile from './Navbarmobile';
import Userinfornav from './Userinfornav';

function Myaddress() {

    return (
        <div  className="main-color">
        <Header/>
        <div className='userinfor'>
        <div className='userinfor__nav' id='userinfor__nav'>
        <h1 className='userinfor__nav-name'>Xin chào bạn!</h1>
        <Userinfornav/>
        </div> 

                    {/* Drop menu mobile */}
                    <Navbarmobile/>
    <div className='userbox'>
    <div className='box-title'><h1>Địa chỉ của tôi</h1></div>
        <div className='content-box myaddress-form'>
            <div className='myfavs-cars-title'>
                <h3>Địa chỉ đã lưu</h3>
                <div className='myaddress-add'><Link to="/" className='userinfor-nav-link'>Thêm địa chỉ mới</Link></div>
            </div>
            <div className='myfavs-cars'>
                <img src="https://www.mioto.vn/static/media/empty-address.6de0bd2f.svg" alt=''></img>
                <p>Chưa có địa chỉ</p>
            </div>        
        </div>
    </div>
    </div>
        <Footer/>
        </div>
    )
}

export default Myaddress;
