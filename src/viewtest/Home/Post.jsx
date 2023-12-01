import React from 'react';
import './css/post.css';
import './css/base.css'

function Post() {
    return (
        <div className='post'>
            <div className='post__name'>
                <h1 className='post__name-main'>Ưu Điểm Của Mioto</h1>
                <p className='post__name-child'>Những tính năng giúp bạn dễ dàng hơn khi thuê xe <br></br> trên Mioto.</p>
            </div>
            <div className='post__container'>
                <div className='post__container-main'>
                    <div className='post__container-main-img'>
                        <img src="https://www.mioto.vn/static/media/dich_vu_thue_xe_tu_lai_hanoi.f177339e.svg"></img>
                    </div>
                    <div className='post__container-main-text'>
                        <h1 className='post__container-main-text-title'>An tâm đặt xe</h1>
                        <p className='post__container-main-text-child'>
                        Không tính phí huỷ chuyến trong vòng 1h sau khi đặt cọc.
                        Hoàn cọc và bồi thường 100% nếu chủ xe huỷ chuyến trong vòng 7 ngày 
                        trước chuyến đi.
                        </p>
                    </div>
                </div>
                <div className='post__container-main'>
                    <div className='post__container-main-img'>
                        <img src="https://www.mioto.vn/static/media/thue_xe_co_tai_xe.a6f7dc54.svg"></img>
                    </div>
                    <div className='post__container-main-text'>
                        <h1 className='post__container-main-text-title'>Lái xe an toàn</h1>
                        <p className='post__container-main-text-child'>
                        Vững tay lái với gói bảo hiểm thuê xe từ nhà bảo hiểm MIC & VNI.
                        </p>
                    </div>
                </div>
                <div className='post__container-main'>
                    <div className='post__container-main-img'>
                        <img src="https://www.mioto.vn/static/media/cho_thue_xe_tu_lai_tphcm.1e7cb1c7.svg"></img>
                    </div>
                    <div className='post__container-main-text'>
                        <h1 className='post__container-main-text-title'>Thủ tục đơn giản</h1>
                        <p className='post__container-main-text-child'>
                        Chỉ cần có CCCD gắn chip (Hoặc Passport) & Giấy phép lái xe là
                        bạn đã đủ điều kiện thuê xe trên Mioto.
                        </p>
                    </div>
                </div>
                <div className='post__container-main'>
                    <div className='post__container-main-img'>
                        <img src="https://www.mioto.vn/static/media/cho_thue_xe_tu_lai_hanoi.735438af.svg"></img>
                    </div>
                    <div className='post__container-main-text'>
                        <h1 className='post__container-main-text-title'>Thanh toán đặt hàng</h1>
                        <p className='post__container-main-text-child'>
                        Đa dạng hình thức thanh toán: ATM, thẻ Visa & Ví 
                        điện tử (Momo, VnPay, ZaloPay).
                        </p>
                    </div>
                </div>
                <div className='post__container-main'>
                    <div className='post__container-main-img'>
                        <img src="https://www.mioto.vn/static/media/thue_xe_tu_lai_gia_re_hcm.ffd1319e.svg"></img>
                    </div>
                    <div className='post__container-main-text'>
                        <h1 className='post__container-main-text-title'>Giao xe tận nơi</h1>
                        <p className='post__container-main-text-child'>
                        Bạn có thể lựa chọn giao xe tận nhà/sân bay... Phí tiết kiệm chỉ từ 15k/km.
                        </p>
                    </div>
                </div>
                <div className='post__container-main'>
                    <div className='post__container-main-img'>
                        <img src="https://www.mioto.vn/static/media/thue_xe_tu_lai_gia_re_hanoi.4035317e.svg"></img>
                    </div>
                    <div className='post__container-main-text'>
                        <h1 className='post__container-main-text-title'>Dòng xe đa dạng</h1>
                        <p className='post__container-main-text-child'>
                        Hơn 100 dòng xe cho bạn tuỳ ý lựa chọn: Mini, Sedan, CUV, SUV, MPV, Bán tải.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
