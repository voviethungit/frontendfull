import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./css/Howtowork.css";
import "./css/toggle.css";
import "./css/reponsive.css";
import { Link } from "react-router-dom";
import Howtonavbarmb from "./Howtonavbarmb";

function Booking() {
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
            <Link className="howto-link-btn active-howto" to="/book">
              Hướng dẫn đặt xe
            </Link>
            <Link className="howto-link-btn" to='/paymen'>Hướng dẫn thanh toán</Link>
            <Link className="howto-link-btn" to='/regu'>Quy chế hoạt động </Link>
          </div>
          <div className="main-content">
            <div className="main-content-option">
              <div className="main-content-option-top">
                <h1>Hướng dẫn đặt xe</h1>
              </div>
            </div>
            <div>
              <div className="list-card">
                <div className="list-card-item">
                  <div className="list-card-item-option">
                    <div className="list-card-number">1</div>
                    <p>Khách thuê</p>
                    <h1>Gửi yêu cầu thuê xe</h1>
                    <p>Đặt xe qua ứng dụng</p>
                  </div>
                </div>
                <div className="list-card-item">
                  <div className="list-card-item-option">
                    <div className="list-card-number">2</div>
                    <p>Chủ xe</p>
                    <h1>Phê duyệt yêu cầu thuê xe</h1>
                    <p>Phê duyệt qua ứng dụng</p>
                  </div>
                </div>
                <div className="list-card-item">
                  <div className="list-card-item-option">
                    <div className="list-card-number">3</div>
                    <p>Khách thuê </p>
                    <h1>Nhận phản hồi 'Yêu cầu thuê xe'</h1>
                    <p>Nhận thông báo qua Ứng dụng & Tin nhắn SMS</p>
                  </div>
                </div>
                <div className="list-card-item">
                  <div className="list-card-item-option">
                    <div className="list-card-number">4</div>
                    <p>Khách thuê</p>
                    <h1>Tiến hành đặt cọc </h1>
                    <p>Đặt cọc 30% chuyến đi qua Ứng dụng</p>
                  </div>
                </div>
                <div className="list-card-item">
                  <div className="list-card-item-option">
                    <div className="list-card-number">5</div>
                    <p>Chủ xe và Khách thuê</p>
                    <h1>Hoàn thành đặt xe</h1>
                    <p>Nhận thông tin SĐT - Liên hệ xác minh thủ tục</p>
                  </div>
                </div>
              </div>
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
                      "1. Lựa chọn xe mong muốn và gửi yêu cầu thuê xe"}
                    {buttonNumber === 2 && "2. Tìm kiếm xe"}
                    {buttonNumber === 3 &&
                      "3. Sử dụng bộ lọc để tìm kiếm xe mong muốn"}
                    {buttonNumber === 4 &&
                      "4. Lựa chọn xe mong muốn và gửi yêu cầu thuê xe"}
                    {buttonNumber === 5 && "5. Thanh toán đặt cọc"}
                  </div>
                ))}
              </div>
              <div>
                {activeButton === 1 && (
                  <div className="toggle-content">
                    <p>
                      Bạn vui lòng đăng nhập bằng tài khoản đã có ở Mioto hoặc
                      đăng nhập thông qua Facebook/Google. Trong trường hợp chưa
                      đăng ký tài khoản, bạn có thể chọn dòng "Đăng kí ngay" để
                      tạo tài khoản tại Mioto.vn
                    </p>
                    <img
                      src="https://www.mioto.vn/static/media/tutorialWeb-3.1.2102d820.png"
                      alt="register"
                    />
                  </div>
                )}
                {activeButton === 2 && (
                  <div className="toggle-content">
                    <p>Bạn có thể tìm xe theo 3 cách sau:</p>
                    <p>A. Tìm theo địa chỉ bạn nhập ở thanh tìm kiếm</p>
                    <img
                      src="https://www.mioto.vn/static/media/tutorialWeb-3.2.304429fc.png"
                      alt="sreach"
                    />
                    <p>B. Tìm theo danh mục các địa điểm nổi bật</p>
                    <img
                      src="https://www.mioto.vn/static/media/tutorialWeb-3.3.0df1b6d5.png"
                      alt=""
                    />
                    <p>
                      C. Tìm theo danh mục các xe nổi bật được thuê nhiều trên
                      Mioto
                    </p>
                    <img
                      src="https://www.mioto.vn/static/media/tutorialWeb-3.4.00c839e4.png"
                      alt=""
                    />
                  </div>
                )}
                {activeButton === 3 && (
                  <div className="toggle-content">
                    <p>
                      <strong>A. Loại xe:</strong> Hệ thống đang mặc định hiển
                      thị tất cá xe 4 chỗ và 7 chỗ. Bạn có thể lựa chọn chỉ xem
                      riêng danh sách xe 4 chỗ hoặc danh sách xe 7 chỗ bằng cách
                      bấm vào ô tương ứng.
                    </p>
                    <p>
                      <strong>B. Hãng xe:</strong> Hệ thống đang mặc định hiển
                      thị tất cả xe của các hãng khác nhau. Bạn có thể lựa chọn
                      chỉ xem riêng danh sách xe của một hãng yêu thích bằng
                      cách bấm vào tên của hãng xe.
                    </p>
                    <p>
                      <strong>C. Các tiêu chí xe:</strong>Các xe đang ở chế độ
                      cho phép "Giao nhận xe tận nơi", hoặc cho phép "Đặt xe
                      nhanh" (không cần chủ xe phê duyệt), truyền động (số sàn
                      hay số tự động), loại nhiên liệu(xe máy dầu hay máy
                      xăng),...
                    </p>
                    <p>
                      <strong>Nâng cao:</strong> Thể hiện các tính năng tìm kiếm
                      nâng cao (sắp xếp xe theo giá thấp đến giá cao, khoảng
                      cách gần nhất hoặc các xe có điểm đánh giá cao nhất; mức
                      giá và nhiều điều kiện lọc nâng cao khác...) để dễ dàng
                      tìm đúng dòng xe bạn mong muốn.
                    </p>
                    <img
                      src="https://www.mioto.vn/static/media/tutorialWeb-3.6.872a035e.png"
                      alt=""
                    />
                  </div>
                )}
                {activeButton === 4 && (
                  <div className="toggle-content">
                    <p>
                      <strong>A. Kiểm tra thông tin xe:</strong> Hình ảnh xe, số
                      chuyến đi đã thực hiện, đánh giá của các khách thuê, mô tả
                      xe và các tính năng liên quan.
                    </p>
                    <img
                      src="https://www.mioto.vn/static/media/tutorialWeb-3.7.54ca156b.png"
                      alt=""
                    />
                    <p>
                      <strong>B. Kiểm tra vị trí xe:</strong> Hệ thống sẽ khoanh
                      vùng tọa độ trên bản đồ. Địa chỉ xe chính xác sẽ được hiển
                      thị sau khi khách hàng tiến hành thanh toán đặt cọc.
                    </p>
                    <img
                      src="https://www.mioto.vn/static/media/tutorialWeb-3.8.91af44e2.png"
                      alt=""
                    />
                    <p>
                      <strong>
                        C. Kiểm tra yêu cầu giấy tờ thuê xe và xem thông tin chủ
                        xe:
                      </strong>
                    </p>
                    <p>
                      - Tại thời điểm sau khi hoàn tất đặt cọc, khách thuê sẽ
                      nhận được thông tin số điện thoại chủ xe qua SMS & trên
                      ứng dụng/Website Mioto. Khách thuê liên hệ chủ xe để xác
                      nhận thời gian thuê xe & chuẩn bị trước hợp đồng thuê xe,
                      thông tin gửi chủ xe gồm: CCCD gắn chip (Hình ảnh), Giấy
                      phép lái xe (Hình ảnh)
                    </p>
                    <p>
                      - Tại thời điểm nhận xe khách hàng xuất trình đầy đủ các
                      giấy tờ liên quan cho chủ xe: GPLX, CCCD (chụp hình đối
                      chiếu) Hoặc Hộ chiếu (passport) bản gốc giữ lại. Đặt cọc
                      tài sản thế chấp tiền mặt (15 triệu hoặc theo thỏa thuận
                      với chủ xe) hoặc xe máy có giá trị tương đương 15 triệu
                      trở lên (xe máy và cavet gốc) trước khi nhận xe.
                    </p>
                    <p>
                      - Đối với trường hợp chủ xe hỗ trợ chính sách miễn thế
                      chấp: Khách hàng không cần để lại tài sản (xe máy hoặc
                      15triệu tiền mặt) khi thuê xe của chủ xe. Trường hợp phát
                      sinh các chi phí khác (nếu có) trong quá trình thuê xe,
                      khách hàng vui lòng thanh toán trực tiếp cho chủ xe khi
                      làm thủ tục trả xe.
                    </p>
                    <div className="main-content--list">
                      <li className="text-success">
                        Khách hàng vui lòng kiểm tra kĩ phần giấy tờ yêu cầu của
                        chủ xe để đảm bảo đủ điều kiện thuê xe, hạn chế các
                        trường hợp hủy chuyến sau khi đã đặt cọc vì không đáp
                        ứng đủ giấy tờ.
                      </li>
                      <li className="text-success">
                        Trường hợp khách hàng cần hỗ trợ vui lòng liên hệ bộ
                        phận CSKH của Mioto tại 19009217 hoặc nhắn tin Fanpage
                        Mioto để được tư vấn.
                      </li>
                    </div>
                    <p>
                      3. Thông tin chủ xe: Mục này sẽ thể hiện điểm đánh giá
                      dành cho chủ xe, nhận xét của khách thuê và thời gian phản
                      hồi của chủ xe đối với các yêu cầu thuê xe...
                    </p>
                    <p>
                      Bạn có thể ưu tiên chọn các chủ xe có điểm đánh giá cao,
                      thời gian phản hồi nhanh chóng và có nhiều nhận xét tích
                      cực từ khách thuê.
                    </p>
                    <img
                      src="https://www.mioto.vn/static/media/tutorialWeb-3.9.f773ea1f.png"
                      alt=""
                    />
                    <p>
                      <strong>
                        d. Kiểm tra giá, thời gian thuê, lựa chọn địa điểm giao
                        nhận xe, thông tin giới hạn quãng đường /ngày
                      </strong>
                    </p>
                    <p>1. Thời gian thuê</p>
                    <div>
                      <li>
                        Thời gian thuê xe được tính theo ngày, hệ thống mặc định
                        thời gian nhận xe từ 21h hôm nay và trả xe vào 20h hôm
                        sau.
                      </li>
                      <li>
                        Bạn có thể linh hoạt tùy chỉnh thời gian nhận và trả xe.
                        Nếu tổng thời gian dưới 24h sẽ làm tròn là 1 ngày. Theo
                        thông lệ, đa phần các chủ xe trên Mioto chỉ giao xe từ
                        5h sáng - 10h tối hàng ngày nên bạn cần điều chỉnh thời
                        gian cho phù hợp để dễ dàng thuê xe bạn nhé.
                      </li>
                    </div>
                    <p>2. Địa điểm giao nhận xe</p>
                    <p>Bạn có thể lựa chọn 1 trong 2 hình thức giao nhận xe:</p>
                    <li>
                      Giao nhận tại địa điểm của chủ xe: Địa chỉ nhận xe sẽ được
                      hiển thị chính xác sau khi bạn tiến hành thanh toán đặt
                      cọc thành công trên hệ thống.
                    </li>
                    <li>
                      Giao nhận tận nơi: Bạn có thể yêu cầu chủ xe giao đến địa
                      chỉ nhà của mình và sẽ thanh toán thêm phí giao nhận xe
                      (hệ thống sẽ tự động xác định khoảng cách từ vị trí chủ xe
                      đến địa điểm giao xe để tính phí giao nhận xe).
                    </li>
                    <p>3. Giới hạn quãng đường</p>
                    <p>
                      Nếu cần di chuyển xa, bạn cần kiểm tra kĩ số km được phép
                      di chuyển tối đa trong một ngày và số tiền phụ phí/km nếu
                      vượt giới hạn. Mỗi chủ xe sẽ có các yêu cầu khác nhau về
                      giới hạn quãng đường di chuyển và phụ phí.
                    </p>
                    <img
                      src="https://www.mioto.vn/static/media/tutorialWeb-3.10.05f3da35.png"
                      alt=""
                    />
                    <p>
                      <strong>e. Nhập mã khuyến mãi (nếu có)</strong>
                    </p>
                    <p>
                      Hàng tháng Mioto đều triển khai các chương trình khuyến
                      mãi đến người dùng, bạn đừng quên nhập mã khuyến mãi để
                      được giảm giá xe nhé.
                    </p>
                    <img
                      src="https://www.mioto.vn/static/media/tutorialWeb-3.11.bdafe92c.png"
                      alt=""
                    />
                    <p>
                      <strong>f. Kiểm tra lại yêu cầu thuê xe</strong>
                    </p>
                    <p>
                      Bạn cần kiểm tra lại toàn bộ các thông tin trong yêu cầu
                      thuê xe (thông tin xe, thời gian thuê, địa điểm nhận xe,
                      khuyến mãi, tổng tiền thuê, các giấy tờ bắt buộc và yêu
                      cầu khác).
                    </p>
                    <p>
                      Bạn có thể gửi lời nhắn đến chủ xe tại mục "Lời nhắn" để
                      giới thiệu về lộ trình di chuyển, các giấy tờ bạn có hoặc
                      các yêu cầu khác liên quan đến việc thuê xe... để chủ xe
                      ra quyết định cho thuê nhanh chóng và admin Mioto dễ dàng
                      hỗ trợ bạn hơn nhé.
                    </p>
                    <p>
                      Cuối cùng, bạn gửi yêu cầu thuê xe đến chủ xe bằng cách
                      nhấn vào phím "Đặt xe". Các chủ xe sẽ nhận được yêu cầu
                      đặt xe từ bạn và sẽ phản hồi đến bạn (Đồng ý/ Từ chối cho
                      thuê) trong thời gian sớm nhất.
                    </p>
                    <p className="text-danger">
                      Lưu ý: Để hỗ trợ bạn đặt xe nhanh hơn, hệ thống cho phép
                      bạn gửi một lúc nhiều yêu cầu thuê xe đến nhiều chủ xe
                      khác nhau và bạn có thể ưu tiên lựa chọn các chủ xe có
                      phản hồi sớm bạn nhé.
                    </p>
                    <img
                      src="https://www.mioto.vn/static/media/tutorialWeb-3.12.65c48667.png"
                      alt=""
                    />
                  </div>
                )}
                {activeButton === 5 && (
                  <div className="toggle-content">
                    <p>
                      Sau khi nhận được phản hồi đồng ý từ chủ xe (qua cả 2 hình
                      thức: tin nhắn sms + thông báo trên website/ứng dụng), bạn
                      vui lòng tiến hành thanh toán đặt cọc 30% tiền thuê xe
                      trong thời gian sớm nhất để hoặc tất quá trình đặt xe
                      (phần tiền 70% còn lại bạn sẽ thanh toán trực tiếp cho chủ
                      xe khi nhận xe).
                    </p>
                    <p>Các hình thức đặt cọc tại Mioto:</p>
                    <li>Chuyển khoản ngân hàng</li>
                    <li>Thanh toán trực tuyến - Ví điện tử</li>
                    <li>
                      Thanh toán trực tuyến - Thẻ quốc tế (Visa, Master, JCB)
                    </li>
                    <li>Thanh toán trực tuyến - Thẻ nội địa (ATM)</li>
                    <li>Thanh toán qua thẻ của tôi</li>
                    <li>Dùng thẻ quà Got-it</li>
                    <p>
                      Để được hướng dẫn rõ hơn, bạn vui lòng vào trang{" "}
                      <Link>Hướng dẫn thanh toán</Link> nhé.
                    </p>
                    <p>
                      Sau khi thanh toán đặt cọc thành công, bạn sẽ nhận số điện
                      thoại và địa chỉ chính xác của chủ xe. Bạn vui lòng liên
                      hệ sớm với chủ xe để xác nhận lại lần nữa về lịch trình và
                      các giấy tờ yêu cầu để đảm bảo chuyến đi của mình được
                      diễn ra suôn sẽ và tốt đẹp. Bất cứ các vấn đề gì cần thắc
                      mắc bạn có thể liên hệ 19009217 (7AM - 10PM) hoặc Mioto
                      Fanpage để được hỗ trợ.
                    </p>
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

export default Booking;
