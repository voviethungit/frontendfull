import React from 'react'
import  "./PayLive.css"
import { FaCreditCard } from "react-icons/fa6";
const PayLive = () => {
  return (
    <div className="">
    <div className='Paylive-container'>
        <div className="Paylive-content">
          <div className="Paylive-content-title">
           <h5> Nạp tiền ATM (AUTO)</h5>
          </div>
        <div className="Paylive-content-atm">
         <h6>MOMO : <span className='text-color-green'>999999999</span></h6>
         <h6>ACB : <span className='text-color-green'>999999999</span></h6>
         <h6>THESIEURE : <span className='text-color-green'>VIETHUNGPRO</span></h6>
         <h6>GACHTHE1S : <span className='text-color-green'>VIETHUNGPRO</span></h6>
         <h6>Chủ tài khoản : <span className='text-color-green'>Võ việt Hùng</span></h6>
         <form action="" className='Pay-form-atm'>
            <p>Nội dung chuyển tiền </p>
            <input type="text"  required/> <br />
            <button className=''>Vui lòng ghi nội dung</button>
         </form>
         <p className=''>Bạn sẽ nhận tiền nạp  lập tức khi nạp tiền . Lâu nhất là do admin </p>
        </div>
        </div>
        <div className="Paylive-text">
         <div className="Paylive-text-title">
            <h5>Lưu ý nạp ATM , MOMO, THESIEURE</h5>

         </div>
         <div className="Paylive-text-content">

        
         <p>
          - Nạp tiền bằng MOMO, ACB hoặc THUESIEURE sẽ được duyệt tự động, nếu bạn chuyển đúng nội dung nạp tiền
          <br />
          -Trường hợp néu bạn ghi sai nội dung. Vui lòng liên hệ admin: voviethung để được giải quyết. Nội dung có Phân Biệt Chữ Hoa, Chữ Thường
          <br /> 
          <br />
          <br />
          - Trường hợp nạp tiền quá lâu mà chưa thấy cộng, vui lòng liên hệ admin: voviethung
          <br />
          - Mẹo: Liên hệ ZALO admin, chúng tôi rep nhanh hơn bạn tưởng đấy
          <br />
          <br />
          <br />
        <span className='Paylive-text-content-color'>   -Trường hợp bank tiền mà chúng tôi chưa nhận. Thì bạn sẽ không được cộng tiền. Có thể ngân hàng bảo trì hoặc chưa xử lý giao dịch   đó</span>
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
          <form action="" className="form-Vnpay-content-atm">
            <input
              type="text"
              name=""
              id=""
              placeholder="nhập số tiền muốn nạp"
            />
            <p> Nhập số tiền muốn nạp, sau đó mới bấm</p> <br />
            <button className="button-vnpay-top">
              {" "}
              <span className="VNPAY-colorred">VN</span>
              <span className="VNPAY-colorblue">PAY</span>
            </button>
            <button>
              <FaCreditCard /> Debit or Credit Card
            </button>
            <p className="power-vnpay-text">
              Powerd by <span className="VNPAY-colorred">VN</span>
              <span className="VNPAY-colorblue">PAY</span>
            </p>
          </form>
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
            -Tỉ giá 1$= 16.000đ. 
            <br />
            -Min nạp là 1$, nạp dưới 1$ xảy ra lỗi không hỗ trợ
            <br />
            -Nạp tiền sẽ đuợc cộng ngay lập tức
        </p>
      </div>
    </div>
    </div>
  )
}

export default PayLive