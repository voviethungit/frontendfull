import React from 'react'
import './css/forgotpassword.css'
import Header from '../Header';
import Footer from '../Footer';
const Forgotpasword = () => {
  return (
    <div>
          <Header/>
        <form action="" className="form-Forgotpassword">
   
        <div className="Forgotpassword-container">
      <div className="Forgotpassword-content">
        <div className="Forgotpassword-header">
        <h2>Quên mật khẩu</h2>
        </div>
        <div className="Forgotpassword-body">
          <div className="Forgotpassword-input-body">
            <div className="Forgotpassword-line-form">
              <div className="custom-input-Forgotpassword">
                <div className="wrap-info-Forgotpassword">
                  <div className="title-status-Forgotpassword">
                    <p>Email</p>
                    <div className="desc"></div>
                  </div>
                </div>
                <div className="wrap-input-Forgotpassword">
                  <div className="wrap-text-Forgotpassword">
                    <input
                      type="email"
                      name="email"
                      placeholder="Nhập Email"
               
            
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="Forgotpassword-line-form">
              <div className="custom-input-Forgotpassword">
                <div className="wrap-info-Forgotpassword">
                  <div className="title-status-Forgotpassword">
                    <p>Mật Khẩu</p>
                    <div className="desc"></div>
                  </div>
                </div>
                <div className="wrap-input-Forgotpassword">
                  <div className="wrap-text-Forgotpassword">
                    <input
                      type="password"
                      name="password"
             
                      placeholder="Nhập Mật Khẩu"
                   
               
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="Forgotpassword-line-form">
              <div className="custom-input-Forgotpassword">
                <div className="wrap-info-Forgotpassword">
                  <div className="title-status-Forgotpassword">
                    <p>Xác nhận mật Khẩu</p>
                    <div className="desc"></div>
                  </div>
                </div>
                <div className="wrap-input-Forgotpassword">
                  <div className="wrap-text-Forgotpassword">
                    <input
                      type="password"
                      name="password"
             
                      placeholder="Xác nhận mật khẩu"
                   
               
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap-btn-Forgotpassword">
              <button type="submit" className="">
             Tiếp tục
              </button>
          
            </div>
            

      
          </div>
        </div>
      </div>
    </div>
        </form>
      <Footer/>
    </div>
  )
}

export default Forgotpasword