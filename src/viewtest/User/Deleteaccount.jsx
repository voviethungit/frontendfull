import React from 'react';
import './css/userinfor.css';
import './css/base.css';
import './css/mainuser.css';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import {Link} from 'react-router-dom';

function Deleteaccount() {

    return (
        <div  className="main-color">
        <Header/>
            <div className='deleteaccount-form'>
                <div className='deleteaccount-content'> 
                    <h2>Yêu cầu xóa tài khoản</h2>
                    <img src='https://www.mioto.vn/static/media/empty-del-account.8493997e.svg' alt=''></img>
                    <div className='deleteaccount-content-inner'>
                        <p>Khi xóa tài khoản, các thông tin sau (nếu có) sẽ bị xóa trên hệ thống:</p>
                        <ul>
                            <li>Thông tin cá nhân</li>
                            <li>Thông tin lịch sử chuyến và danh sách xe</li>
                        </ul>
                        <p>Tiền ví và điểm thưởng sẽ được thanh toán theo quy định và chính sách hiện hành của Mioto.</p>
                        <p>Việc đồng ý xóa tài khoản là bạn đã chấp nhận điều khoản chính sách xóa tài khoản của Mioto.</p>
                        <p>Yêu cầu xóa tài khoản sẽ được xử lý trong vòng 15 ngày làm việc. Mioto sẽ liên hệ trực tiếp với bạn thông qua Email hoặc Số điện thoại đã cung cấp.</p>
                        <p>Mọi thắc mắc xin liên hệ Fanpage của Mioto hoặc Hotline 1900 9217 (7AM - 10PM) để được hỗ trợ.</p>
                    </div>
                    <div className='deleteaccount-btn'><Link to='/MainUser' className='userinfor-nav-link'>Xóa tài khoản</Link></div>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default Deleteaccount;
