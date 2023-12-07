import React, {useState} from 'react'
import  "./PayLive.css";
import axios from 'axios';
const PayLive = () => {
  const [amount, setAmount] = useState('');
  const [bankCode, setBankCode] = useState('');
  const [language, setLanguage] = useState('vn');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleBankCodeChange = (e) => {
    setBankCode(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/create_payment_url', {
        amount: amount,
        bankCode: bankCode,
        language: language
      });

      if (response.data && response.data.paymentUrl) {
        window.location.href = response.data.paymentUrl;
      }

    } catch (error) {
      console.error('Error occurred:', error);
    }
  };
  return (
    <div className="">
    <div className='Paylive-container'>
        <div className="Paylive-content">
          <div className="Paylive-content-title">
           <h5>Nạp Tiền ATM</h5>
          </div>
        <div className="Paylive-content-atm">
         <h6>MOMO : <span className='text-color-green'>0824970304</span></h6>
         <h6>MB Bank : <span className='text-color-green'>9666629102003</span></h6>
         <h6>CAKE : <span className='text-color-green'>0824970304</span></h6>
         <h6>MB BANK : <span className='text-color-green'>0824970304</span></h6>
         <h6>Chủ tài khoản : <span className='text-color-green'>VÕ VIỆT HÙNG</span></h6>
         <div className='Pay-form-atm'>
            <p>Nội dung chuyển tiền </p>
            <input type="text"  required/> <br />
            <button className=''>Vui lòng ghi nội dung</button>
         </div>
         <p className=''>Bạn sẽ nhận tiền nạp lập tức khi nạp tiền.</p>
        </div>
        </div>
        <div className="Paylive-text">
         <div className="Paylive-text-title">
            <h5>Lưu ý nạp ATM , MOMO</h5>

         </div>
         <div className="Paylive-text-content">

        
         <p>
          - Nạp tiền bằng MOMO, MB BANK sẽ được duyệt tự động, nếu bạn chuyển đúng nội dung nạp tiền
          <br />
          -Trường hợp néu bạn ghi sai nội dung. Vui lòng liên hệ admin: <a href='https://www.facebook.com/VoVietHung.IT'>Võ Việt Hùng</a> để được giải quyết. Nội dung có Phân Biệt Chữ Hoa, Chữ Thường
          <br /> 
          <br />
          <br />
          - Trường hợp nạp tiền quá lâu mà chưa thấy cộng, vui lòng liên hệ admin: <a href='https://www.facebook.com/VoVietHung.IT'>Võ Việt Hùng</a>
          <br />
          - Mẹo: Liên hệ ZALO <a href='zalo.me/0824970304'>Võ Việt Hùng</a>, chúng tôi rep nhanh hơn bạn tưởng đấy !!
          <br />
          <br />
          <br />
        <span className='Paylive-text-content-color'>   - Trường hợp bank tiền mà chúng tôi chưa nhận. Thì bạn sẽ không được cộng tiền. Có thể ngân hàng bảo trì hoặc chưa xử lý giao dịch   đó</span>
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
          <form className="form-Vnpay-content-atm" onSubmit={handleSubmit}>
          <input
              className="form-control"
              id="amount"
              name="amount"
              placeholder="Số tiền"
              value={amount}
              onChange={handleAmountChange}
            />
            <p> Nhập số tiền muốn nạp, sau đó mới bấm</p> <br />
            <div className="form-group">
     <p

       className="method-">
     Chọn Phương thức thanh toán
     </p>
            <div className="controls">
              <p className="radio-inline">
                <input
                  type="radio"
                  nppame="bankCode"
                  value=""
                  checked={bankCode === ''}
                  onChange={handleBankCodeChange}
                />
                Cổng thanh toán VNPAYQR
              </p>
              {/* <label className="radio-inline">
                <input
                  type="radio"
                  name="bankCode"
                  value="VNPAYQR"
                  onChange={handleBankCodeChange}
                />
                Thanh toán qua ứng dụng hỗ trợ VNPAYQR
              </label> */}
            </div>
          </div>
          <button className="btn btn-default" type="submit">
            Thanh toán
          </button>
          </form>
          <div className="form-group">
            <label>Ngôn ngữ</label>
            <div className="controls">
              <label className="radio-inline">
                <input
                  type="radio"
                  name="language"
                  value="vn"
                  checked={language === 'vn'}
                  onChange={handleLanguageChange}
                />
                Tiếng việt
              </label>
            </div>
          </div>
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
            <br />
            - Nạp tiền sẽ đuợc cộng ngay lập tức
        </p>
      </div>
    </div>
    </div>
  )
}

export default PayLive