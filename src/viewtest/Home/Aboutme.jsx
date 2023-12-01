import React from 'react';
import './css/base.css';
import './css/aboutme.css';
import { FaAngellist} from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Aboutme() {
    return (
        <div className='aboutme'>
            <div className='aboutme__container'>
                <img src="https://www.mioto.vn/static/media/thue_xe_co_tai_xe_tphcm_gia_re.b6cd9996.png" alt='' className='aboutme__container-img'></img>
                <div className='aboutme__container-list'>
                    <i className='aboutme__container-list-icon'><FaAngellist></FaAngellist></i>
                    <h1 className='aboutme__container-list-name'>Bạn muốn biết thêm về Mioto?</h1>
                    <p className='aboutme__container-list-text'>Mioto kết nối khách hàng có nhu cầu thuê xe
                        với hàng ngàn chủ xe ô tô ở Đà Nẵng, Hà Nội & các tỉnh thành khác.
                        Mioto hướng đến việc xây dựng cộng đồng người dùng ô tô văn minh & uy tín tại Việt Nam.</p>
                    <Link to='/about'>
                        <button className='aboutme__container-list-button btn__large'>
                        <p>Tìm hiểu thêm</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
