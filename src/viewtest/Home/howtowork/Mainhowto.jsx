import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./css/Howtowork.css";
import { Link } from "react-router-dom";
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Howtonavbarmb from "./Howtonavbarmb";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./css/Swiperhowto.css";

// import required modules
import { Pagination } from "swiper/modules";

function Mainhowto() {
  // lựa chọn content của chủ xe và khách thuê
  const [currentProfile, setCurrentProfile] = useState("owner");
  const handleClick = (contentSelect) => {
    setCurrentProfile(contentSelect);
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
        <Howtonavbarmb />
        <div className="howto-content-main">
          <div className="menu-content">
            <Link className="howto-link-btn active-howto" to="/mainhow">
              Hướng dẫn chung
            </Link>
            <Link className="howto-link-btn" to="/book">
              Hướng dẫn đặt xe
            </Link>
            <Link className="howto-link-btn" to="/paymen">
              Hướng dẫn thanh toán
            </Link>
            <Link className="howto-link-btn" to="/regu">
              Quy chế hoạt động{" "}
            </Link>
          </div>
          <div className="main-content">
            <div className="main-content-option">
              <div className="main-content-option-top">
                <h1>Quy trình thuê xe</h1>
                <div className="main-content-option-type">
                  <Link
                    to="#owner"
                    className="link-option-type"
                    onClick={() => handleClick("owner")}
                  >
                    Chủ xe
                  </Link>
                  <Link
                    to="#traveler"
                    className="link-option-type"
                    onClick={() => handleClick("traveler")}
                  >
                    Khách thuê
                  </Link>
                </div>
              </div>
            </div>

            {/* Chủ xe */}
            <div>
              {currentProfile === "owner" && (
                <div>
                  <div className="list-card" id="onwer">
                    <div className="list-card-item">
                      <div className="list-card-item-option">
                        <div className="list-card-number">1</div>
                        <h1>Đăng nhập</h1>
                        <p>
                          Đăng nhập vào Mioto qua Facebook, Google, số điện
                          thoại hoặc email của bạn. Chúng tôi cần bạn xác thực
                          số điện thoại trước khi đặt xe.
                        </p>
                      </div>
                    </div>
                    <div className="list-card-item">
                      <div className="list-card-item-option">
                        <div className="list-card-number">2</div>
                        <h1>Đăng ký xe</h1>
                        <p>
                          Bạn chỉ cần đưa thông tin, mô tả, hình ảnh xe của bạn
                          lên hệ thống. Cập nhật thời gian, mức giá mong muốn và
                          các yêu cầu khác của bạn đối với khách thuê. Hoặc bạn
                          có thể đăng ký chủ xe tại đây
                        </p>
                      </div>
                    </div>
                    <div className="list-card-item">
                      <div className="list-card-item-option">
                        <div className="list-card-number">3</div>
                        <h1>Duyệt xe</h1>
                        <p>
                          Bạn chỉ cần chờ trong vài phút, hệ thống sẽ kiểm duyệt
                          xe của bạn có đáp ứng đủ hay không yêu cầu cho thuê.
                          Mioto sẽ chủ động liện hệ với bạn trong trường hợp có
                          vấn đề phát sinh.
                        </p>
                      </div>
                    </div>
                    <div className="list-card-item">
                      <div className="list-card-item-option">
                        <div className="list-card-number">4</div>
                        <h1>Nhận và phản hồi </h1>
                        <p>
                          Khi có khách gửi yêu cầu thuê xe, bạn sẽ nhận được
                          thông báo từ Mioto. Kiểm tra thông tin cá nhân của
                          khách và xác nhận cho thuê sớm nhất có thể. Khi có sự
                          đồng ý cho thuê từ bạn, khách thuê sẽ chuyển tiền đặt
                          cọc để hoàn tất việc đặt xe.
                        </p>
                      </div>
                    </div>
                    <div className="list-card-item">
                      <div className="list-card-item-option">
                        <div className="list-card-number">5</div>
                        <h1>Nhận xe</h1>
                        <p>
                          Bạn và chủ xe liên hệ gặp nhau để nhận xe. Ở Mioto, có
                          nhiều chủ xe sẵn sàng đem xe đến tận nơi cho bạn. Kiểm
                          tra tình trạng và giấy tờ xe, xuất trình bản gốc các
                          giấy tờ, kí xác nhận biên bản giao xe, nhận chìa khóa
                          và bắt đầu hành trình của bạn
                        </p>
                      </div>
                    </div>
                    <div className="list-card-item">
                      <div className="list-card-item-option">
                        <div className="list-card-number">6</div>
                        <h1>Trả xe</h1>
                        <p>
                          Sau khi hết thời gian thuê, bạn hoàn trả xe giống như
                          tình trạng và thỏa thuận ban đầu. Kí xác nhận biên bản
                          bàn giao, nhận lại giấy tờ để hoàn thành chuyến đi
                          tuyệt vời của bạn. Đừng quên cho điểm rating và nhận
                          xét của bạn đến chủ xe để nâng cao chất lượng phục vụ
                          cho những hành trình sắp tới nhé!
                        </p>
                      </div>
                    </div>
                  </div>
                  <Swiper
                    pagination={{
                      dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      {" "}
                      <div className="list-card-item">
                        <div className="list-card-item-option">
                          <div className="list-card-number">1</div>
                          <h1>Đăng nhập</h1>
                          <p>
                            Đăng nhập vào Mioto qua Facebook, Google, số điện
                            thoại hoặc email của bạn. Chúng tôi cần bạn xác thực
                            số điện thoại trước khi đặt xe.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="list-card-item">
                        <div className="list-card-item-option">
                          <div className="list-card-number">2</div>
                          <h1>Đăng ký xe</h1>
                          <p>
                            Bạn chỉ cần đưa thông tin, mô tả, hình ảnh xe của
                            bạn lên hệ thống. Cập nhật thời gian, mức giá mong
                            muốn và các yêu cầu khác của bạn đối với khách thuê.
                            Hoặc bạn có thể đăng ký chủ xe tại đây
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="list-card-item">
                        <div className="list-card-item-option">
                          <div className="list-card-number">3</div>
                          <h1>Duyệt xe</h1>
                          <p>
                            Bạn chỉ cần chờ trong vài phút, hệ thống sẽ kiểm
                            duyệt xe của bạn có đáp ứng đủ hay không yêu cầu cho
                            thuê. Mioto sẽ chủ động liện hệ với bạn trong trường
                            hợp có vấn đề phát sinh.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="list-card-item">
                        <div className="list-card-item-option">
                          <div className="list-card-number">4</div>
                          <h1>Nhận và phản hồi </h1>
                          <p>
                            Khi có khách gửi yêu cầu thuê xe, bạn sẽ nhận được
                            thông báo từ Mioto. Kiểm tra thông tin cá nhân của
                            khách và xác nhận cho thuê sớm nhất có thể. Khi có
                            sự đồng ý cho thuê từ bạn, khách thuê sẽ chuyển tiền
                            đặt cọc để hoàn tất việc đặt xe.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="list-card-item">
                        <div className="list-card-item-option">
                          <div className="list-card-number">5</div>
                          <h1>Nhận xe</h1>
                          <p>
                            Bạn và chủ xe liên hệ gặp nhau để nhận xe. Ở Mioto,
                            có nhiều chủ xe sẵn sàng đem xe đến tận nơi cho bạn.
                            Kiểm tra tình trạng và giấy tờ xe, xuất trình bản
                            gốc các giấy tờ, kí xác nhận biên bản giao xe, nhận
                            chìa khóa và bắt đầu hành trình của bạn
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="list-card-item">
                        <div className="list-card-item-option">
                          <div className="list-card-number">6</div>
                          <h1>Trả xe</h1>
                          <p>
                            Sau khi hết thời gian thuê, bạn hoàn trả xe giống
                            như tình trạng và thỏa thuận ban đầu. Kí xác nhận
                            biên bản bàn giao, nhận lại giấy tờ để hoàn thành
                            chuyến đi tuyệt vời của bạn. Đừng quên cho điểm
                            rating và nhận xét của bạn đến chủ xe để nâng cao
                            chất lượng phục vụ cho những hành trình sắp tới nhé!
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              )}
            </div>

            {/* Người thuê */}
            <div>
              {currentProfile === "traveler" && (
                <div id="traveler">
                  <div className="list-card" id="onwer">
                    <div className="list-card-item">
                      <div className="list-card-item-option">
                        <div className="list-card-number">1</div>
                        <h1>Đăng nhập</h1>
                        <p>
                          Đăng nhập vào Mioto qua Facebook, Google, số điện
                          thoại hoặc email của bạn. Chúng tôi cần bạn xác thực
                          số điện thoại trước khi đặt xe.
                        </p>
                      </div>
                    </div>
                    <div className="list-card-item">
                      <div className="list-card-item-option">
                        <div className="list-card-number">2</div>
                        <h1>Tìm xe</h1>
                        <p>
                          Bạn có thể tìm xe ưng ý nhanh chóng ở nơi bạn muốn
                          tìm, thời gian, hãng xe, đặt xe nhanh
                        </p>
                      </div>
                    </div>
                    <div className="list-card-item">
                      <div className="list-card-item-option">
                        <div className="list-card-number">3</div>
                        <h1>Đặt xe</h1>
                        <p>
                          Lựa chọn chiếc xe mà bạn ưng ý và gửi Yêu cầu thuê xe
                          đến Chủ xe. Sau đó chủ xe sẽ nhanh chóng phản hồi đến
                          bạn trong thời gian nhanh nhất. Nếu bạn không muốn mất
                          nhiều thời gian chờ đợi, có thể lựa chọn chiếc xe khác
                          có tính năng Đặt xe nhanh để đặt xe trực tiếp mà không
                          cần thông qua sự phản hồi từ phía Chủ xe
                        </p>
                      </div>
                    </div>
                    <div className="list-card-item">
                      <div className="list-card-item-option">
                        <div className="list-card-number">4</div>
                        <h1>Đặt cọc </h1>
                        <p>
                          Sau khi nhận được sự đồng ý từ chủ xe, khách hàng có
                          thể đặt cọc bằng 3 hình thức chuyển khoản, ví điện tử
                          hoặc tiền mặt.
                        </p>
                      </div>
                    </div>
                    <div className="list-card-item">
                      <div className="list-card-item-option">
                        <div className="list-card-number">5</div>
                        <h1>Nhận xe</h1>
                        <p>
                          Bạn và chủ xe liên hệ gặp nhau để nhận xe. Ở Mioto, có
                          nhiều chủ xe sẵn sàng đem xe đến tận nơi cho bạn. Kiểm
                          tra tình trạng và giấy tờ xe, xuất trình bản gốc các
                          giấy tờ, kí xác nhận biên bản giao xe, nhận chìa khóa
                          và bắt đầu hành trình của bạn
                        </p>
                      </div>
                    </div>
                    <div className="list-card-item">
                      <div className="list-card-item-option">
                        <div className="list-card-number">6</div>
                        <h1>Trả xe</h1>
                        <p>
                          Sau khi hết thời gian thuê, bạn hoàn trả xe giống như
                          tình trạng và thỏa thuận ban đầu. Kí xác nhận biên bản
                          bàn giao, nhận lại giấy tờ để hoàn thành chuyến đi
                          tuyệt vời của bạn. Đừng quên cho điểm rating và nhận
                          xét của bạn đến chủ xe để nâng cao chất lượng phục vụ
                          cho những hành trình sắp tới nhé!
                        </p>
                      </div>
                    </div>
                  </div>
                  <Swiper
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>                    <div className="list-card-item">
                  <div className="list-card-item-option">
                    <div className="list-card-number">1</div>
                    <h1>Đăng nhập</h1>
                    <p>
                      Đăng nhập vào Mioto qua Facebook, Google, số điện
                      thoại hoặc email của bạn. Chúng tôi cần bạn xác thực
                      số điện thoại trước khi đặt xe.
                    </p>
                  </div>
                </div></SwiperSlide>
                  <SwiperSlide>                    <div className="list-card-item">
                  <div className="list-card-item-option">
                    <div className="list-card-number">2</div>
                    <h1>Tìm xe</h1>
                    <p>
                      Bạn có thể tìm xe ưng ý nhanh chóng ở nơi bạn muốn
                      tìm, thời gian, hãng xe, đặt xe nhanh
                    </p>
                  </div>
                </div></SwiperSlide>
                  <SwiperSlide>                    <div className="list-card-item">
                  <div className="list-card-item-option">
                    <div className="list-card-number">3</div>
                    <h1>Đặt xe</h1>
                    <p>
                      Lựa chọn chiếc xe mà bạn ưng ý và gửi Yêu cầu thuê xe
                      đến Chủ xe. Sau đó chủ xe sẽ nhanh chóng phản hồi đến
                      bạn trong thời gian nhanh nhất. Nếu bạn không muốn mất
                      nhiều thời gian chờ đợi, có thể lựa chọn chiếc xe khác
                      có tính năng Đặt xe nhanh để đặt xe trực tiếp mà không
                      cần thông qua sự phản hồi từ phía Chủ xe
                    </p>
                  </div>
                </div></SwiperSlide>
                  <SwiperSlide>                    <div className="list-card-item">
                  <div className="list-card-item-option">
                    <div className="list-card-number">4</div>
                    <h1>Đặt cọc </h1>
                    <p>
                      Sau khi nhận được sự đồng ý từ chủ xe, khách hàng có
                      thể đặt cọc bằng 3 hình thức chuyển khoản, ví điện tử
                      hoặc tiền mặt.
                    </p>
                  </div>
                </div></SwiperSlide>
                  <SwiperSlide>                    <div className="list-card-item">
                  <div className="list-card-item-option">
                    <div className="list-card-number">5</div>
                    <h1>Nhận xe</h1>
                    <p>
                      Bạn và chủ xe liên hệ gặp nhau để nhận xe. Ở Mioto, có
                      nhiều chủ xe sẵn sàng đem xe đến tận nơi cho bạn. Kiểm
                      tra tình trạng và giấy tờ xe, xuất trình bản gốc các
                      giấy tờ, kí xác nhận biên bản giao xe, nhận chìa khóa
                      và bắt đầu hành trình của bạn
                    </p>
                  </div>
                </div></SwiperSlide>
                  <SwiperSlide>                    <div className="list-card-item">
                  <div className="list-card-item-option">
                    <div className="list-card-number">6</div>
                    <h1>Trả xe</h1>
                    <p>
                      Sau khi hết thời gian thuê, bạn hoàn trả xe giống như
                      tình trạng và thỏa thuận ban đầu. Kí xác nhận biên bản
                      bàn giao, nhận lại giấy tờ để hoàn thành chuyến đi
                      tuyệt vời của bạn. Đừng quên cho điểm rating và nhận
                      xét của bạn đến chủ xe để nâng cao chất lượng phục vụ
                      cho những hành trình sắp tới nhé!
                    </p>
                  </div>
                </div></SwiperSlide>
                </Swiper>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
}

export default Mainhowto;
