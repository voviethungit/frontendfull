import React, { useState, useEffect } from "react";
import "./PayLive.css";
import axios from "axios";
import Header from "../Home/Header";
import { useForm, Controller } from "react-hook-form";
import Footer from "../Home/Footer";
import { Helmet } from 'react-helmet';

const PayLive = () => {
  const [language, setLanguage] = useState("vn");
  const [userId, setUserId] = useState('');
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Xử lý submit
    console.log(data);
  };
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
    
      <div className="Vnpay-container">
        <div className="Vnpay-content">
          <div className="Vnpay-content-title">
            <h6>
              Nạp tiền <span className="VNPAY-colorred">VN</span>
              <span className="VNPAY-colorblue">PAY</span>
            </h6>
          </div>
          <div className="Vnpay-content-atm">
            <form className="form-Vnpay-content-atm" onSubmit={handleSubmit(onSubmit)} method="post" action="http://localhost:8888/order/create_payment_url">
            <Controller
        name="amount"
        control={control}
        defaultValue=""
        rules={{ required: "Vui lòng nhập số tiền!" ,
        pattern: {
          value: /^\d+$/,
          message: "Vui lòng chỉ nhập số.",
        },}
      }
        render={({ field }) => (
          <input
            {...field}
            className={`form-control ${errors.amount ? "error" : ""}`}
            placeholder="Số tiền"
            type="text"
          />
        )}
      />
             {errors.amount && <p className="error-message">{errors.amount.message}</p>}
              <div className="form-group">
                <p ><b>Chọn Phương thức thanh toán</b></p>
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
                      checked="true"
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
             
              <div className="controls">
                <label className="radio-inline">
                  <input

                    type="hidden"
                    name="language"
                    value="vn"
                    checked={language === "vn"}
                    onChange={handleLanguageChange}
                  />

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
