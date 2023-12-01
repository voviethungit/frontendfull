import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./css/Howtowork.css";
import "./css/toggle.css";
import { Link } from "react-router-dom";
import Howtonavbarmb from "./Howtonavbarmb";

function Paymenthowto() {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  return (
    <div>
      <Header />
      <div className="howto-content">
        <div className="howto-title-img">
          <div className="howto-title-text">
            <h1>Hướng dẫn & Quy chế</h1>
          </div>
        </div>
        <Howtonavbarmb/>
        <div className="howto-content-main">
          <div className="menu-content">
            <Link className="howto-link-btn" to="/mainhow">
              Hướng dẫn chung
            </Link>
            <Link className="howto-link-btn" to="/book">
              Hướng dẫn đặt xe
            </Link>
            <Link className="howto-link-btn active-howto" to='/paymen'>Hướng dẫn thanh toán</Link>
            <Link className="howto-link-btn" to='/regu'>Quy chế hoạt động </Link>
          </div>
          <div className="main-content">
            <div className="main-content-option">
              <div className="main-content-option-top">
                <h1>Hướng dẫn thanh toán</h1>
              </div>
            </div>
            <div>
              <div className="toggle">
                {[1, 2, 3, 4, 5].map((buttonNumber) => (
                  <div
                    key={buttonNumber}
                    onClick={() => handleButtonClick(buttonNumber)}
                    className={`toggle-title ${
                      activeButton === buttonNumber ? "toggle-active" : ""
                    }`}
                  >
                    {buttonNumber === 1 &&
                      "1. Thanh toán qua thẻ của tôi"}
                    {buttonNumber === 2 && "2. Thanh toán trực tiếp - Ví điện tử"}
                    {buttonNumber === 3 &&
                      "3. Thanh toán qua thẻ tín dụng/thẻ ghi nợ VISA, Master"}
                    {buttonNumber === 4 &&
                      "4. Thanh toán qua thẻ ATM đã đăng kí thanh toán trực tuyến"}
                    {buttonNumber === 5 && "5. Thanh toán bằng hình thức chuyển khoản ngân hàng"}
                  </div>
                ))}
              </div>
              <div>
                {activeButton === 1 && (
                  <div className="toggle-content">
                    <p>
                    Bạn cần có thẻ Visa credit, Master credit để thanh toán bằng hình thức này. Các bước thực hiện khá đơn giản:
                    </p>
                    <p>Chọn thẻ credit bạn đã thêm tại Thẻ của tôi hoặc Thêm thẻ để thanh toán</p>
                    <img
                      src="https://www.mioto.vn/static/media/tutorialWeb-4.1.3cda8bfc.png"
                      alt=""
                    />
                  </div>
                )}
                {activeButton === 2 && (
                  <div className="toggle-content">
                    <p>Bạn cần có tài khoản 1 trong 2 ví điện tử phía dưới để thanh toán bằng hình thức này. Các bước thực hiện khá đơn giản:</p>
                    <p>Chọn 1 trong 2 ví điện tử Momo hoặc VNPay - Bấm thanh toán để chuyển đến ví điện tử - Nhập các thông tin tài khoản hoặc quét mã thanh toán.</p>
                    <img
                      src="https://www.mioto.vn/static/media/tutorialWeb-4.2.93dc5206.png"
                      alt=""
                    />
                  </div>
                )}
                {activeButton === 3 && (
                  <div className="toggle-content">
                    <p>
                    Bạn cần có thẻ Visa, Master để thanh toán bằng hình thức này. Các bước thực hiện khá đơn giản:
                    </p>
                    <p>
                    Chọn cổng thanh toán - Bấm thanh toán để chuyển đến cổng thanh toán - Nhập các thông tin trên thẻ và hoàn tất quá trình thanh toán.
                    </p>
                    <img
                      src="https://www.mioto.vn/static/media/tutorialWeb-4.3.6d2173a8.png"
                      alt=""
                    />
                  </div>
                )}
                {activeButton === 4 && (
                  <div className="toggle-content">
                    <p>
                    Thẻ của bạn phải đăng ký dịch vụ thanh toán trực tuyến với ngân hàng để thực hiện thanh toán bằng hình thức này.
                    </p>
                    <p>Chọn cổng thanh toán VNPay - Bấm thanh toán để chuyển đến cổng thanh toán - Nhập các thông tin trên thẻ và hoàn tất quá trình thanh toán.</p>
                    <img
                      src="https://www.mioto.vn/static/media/tutorialWeb-4.4.2d22865e.png"
                      alt=""
                    />
                  </div>
                )}
                {activeButton === 5 && (
                  <div className="toggle-content">
                    <p>
                    Trước tiên, bạn cần bấm "Đặt chỗ" để xác nhận hình thức thanh toán chuyển khoản. Sau đó, tiến hành chuyển khoản qua tài khoản ngân hàng của Mioto trong thời gian sớm nhất bạn nhé.
                    </p>
                    <img src="https://www.mioto.vn/static/media/tutorialWeb-4.5.90813433.png" alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Paymenthowto;
