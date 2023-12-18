import React, { useState, useEffect } from "react";
import "./PayLive.css";
import axios from "axios";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import { Helmet } from 'react-helmet';

const PayLive = () => {
  const [language, setLanguage] = useState("vn");
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
console.log(userId);
  return (

    <div className="">
       <Helmet>
        <title>Nạp tiền</title>
      </Helmet>
      <Header/>
      <div className="Paylive-container">
        <div className="Paylive-content">
          <div className="Paylive-content-title">
            <h5>Nạp Tiền ATM</h5>
          </div>
          <div className="Paylive-content-atm">
            <h6>
              MOMO : <span className="text-color-green">0824970304</span>
            </h6>
            <h6>
              MB Bank : <span className="text-color-green">9666629102003</span>
            </h6>
            <h6>
              CAKE : <span className="text-color-green">0824970304</span>
            </h6>
            <h6>
              MB BANK : <span className="text-color-green">0824970304</span>
            </h6>
            <h6>
              Chủ tài khoản :{" "}
              <span className="text-color-green">VÕ VIỆT HÙNG</span>
            </h6>
            <div className="Pay-form-atm">
              <p>Nội dung chuyển tiền </p>
              <input type="text" required /> <br />
              <button className="">Vui lòng ghi nội dung</button>
            </div>
            <p className="">Bạn sẽ nhận tiền nạp lập tức khi nạp tiền.</p>
          </div>
        </div>
        <div className="Paylive-text">
          <div className="Paylive-text-title">
            <h5>Lưu ý nạp ATM , MOMO</h5>
          </div>
          <div className="Paylive-text-content">
            <p>
              - Nạp tiền bằng MOMO, MB BANK sẽ được duyệt tự động, nếu bạn
              chuyển đúng nội dung nạp tiền
              <br />
              -Trường hợp néu bạn ghi sai nội dung. Vui lòng liên hệ admin:{" "}
              <a href="https://www.facebook.com/VoVietHung.IT">
                Võ Việt Hùng
              </a>{" "}
              để được giải quyết. Nội dung có Phân Biệt Chữ Hoa, Chữ Thường
              <br />
              <br />
              <br />- Trường hợp nạp tiền quá lâu mà chưa thấy cộng, vui lòng
              liên hệ admin:{" "}
              <a href="https://www.facebook.com/VoVietHung.IT">Võ Việt Hùng</a>
              <br />- Mẹo: Liên hệ ZALO{" "}
              <a href="zalo.me/0824970304">Võ Việt Hùng</a>, chúng tôi rep nhanh
              hơn bạn tưởng đấy !!
              <br />
              <br />
              <br />
              <span className="Paylive-text-content-color">
                {" "}
                - Trường hợp bank tiền mà chúng tôi chưa nhận. Thì bạn sẽ không
                được cộng tiền. Có thể ngân hàng bảo trì hoặc chưa xử lý giao
                dịch đó
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="Vnpay-container">
        <div className="Vnpay-content">
          <div className="Vnpay-content-title">
            <h6>
              Nạp tiền <span className="VNPAY-colorred">VN</span>
              <span className="VNPAY-colorblue">PAY</span>
            </h6>
          </div>
          <div className="Vnpay-content-atm">
            <form className="form-Vnpay-content-atm" method="post" action="http://localhost:8888/oder/create_payment_url">
              <input
                className="form-control"
                id="amount"
                name="amount"
                placeholder="Số tiền"
                
              />
              <p> Nhập số tiền muốn nạp, sau đó mới bấm</p> <br />
              <div className="form-group">
                <p >Chọn Phương thức thanh toán</p>
                <div className="controls">
                  <p className="radio-inline">
                    <input
                      type="radio"
                      name="bankCode"
                      value=""
                      id="defaultPaymentMethod"
                    />
                                 Cổng thanh toán VNPAYQR <br />
                    <input
                      type="radio"
                      name="bankCode"
                      value="VNBANK"
                      
                    />
                 Thanh toán qua ATM-Tài khoản ngân hàng nội địa <br />
                    <input
                      type="radio"
                      name="bankCode"
                      value="VNPAYQR"
                      
                    />
                    Thanh toán qua ứng dụng hỗ trợ VNPAYQR <br />
                    <input
                      type="radio"
                      name="bankCode"
                      value="INTCARD"
                      
                    />
        Thanh toán qua thẻ quốc tế
                  </p>
                </div>
                <div className="form-group">
              <label>Ngôn ngữ</label>
              <div className="controls">
                <label className="radio-inline">
                  <input
                    type="radio"
                    name="language"
                    value="vn"
                    checked={language === "vn"}
                    onChange={handleLanguageChange}
                  />
                  Tiếng việt
                </label>
              </div>
            </div>
            <input type="hidden" name="userId" value={userId} />
              </div>
              <button className="btn btn-default" type="submit">
                Thanh toán
              </button>
            </form>
            
            <p className="power-vnpay-text">
              Powerd by <span className="VNPAY-colorred">VN</span>
              <span className="VNPAY-colorblue">PAY</span>
            </p>
          </div>
        </div>

        <div className="Vnpay-text">
          <div className="Vnpay-text-title">
            <h6>
              {" "}
              Lưu ý nạp <span className="VNPAY-colorred">VN</span>
              <span className="VNPAY-colorblue">PAY</span>
            </h6>
          </div>
          <p>
            - Tỉ giá 1.000 vnđ = 1.000 vnđ
            <br />- Nạp tiền sẽ đuợc cộng ngay lập tức
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PayLive;
