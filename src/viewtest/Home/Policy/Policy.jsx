import React, { useState } from "react";
import "./css/policy.css"
import Header from '../Header';
import Footer from '../Footer';
import { FaAngleDown } from "react-icons/fa6";
import {Link} from 'react-router-dom';

const Policy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePolyci = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Header/>
      <section className="Container_polyci">
        <div className="polyci-content">
          <div className="banner-polyci">
            <div className="title-polyci">
              <h1>Chính sách & Quy định</h1>
            </div>
          </div>
          <div className="space sec">
            <div className="announcement-content">
              <h4 className="">Thông Báo</h4>
              <p>
                <span className="announcement-fonweigh8">Mioto</span> xin thông
                báo về việc bổ sung{" "}
                <span className="announcement-fonweigh8">
                  {" "}
                  Chính sách bảo mật{" "}
                </span>
                liên quan đến các vấn đề mới trong việc bảo vệ dữ liệu cá nhân
                theo Nghị định 13/2023/NĐ-CP của Chính phủ Việt Nam.
              </p>
              <p>
                Trong quá trình thiết lập mối quan hệ giữa Mioto và Người dùng,
                giữ các người dùng với nhau phụ thuộc vào từng loại hình dịch vụ
                mà chúng tôi cung cấp, Mioto có thể thu thập và xử lý dữ liệu cá
                nhân của Quý Khách hàng. Mioto cam kết đảm bảo an toàn và Bảo vệ
                dữ liệu cá nhân của Quý người dùng theo quy định của pháp luật
                Việt Nam.
              </p>
              <p>
                Theo đó bắt đầu từ ngày ra thông báo này, chúng tôi cần xác nhận
                lại sự đồng ý của bạn để tiếp tục thu thập, xử lý và chia sẻ dữ
                liệu cá nhân của bạn. Tuy nhiên, chúng tôi muốn nhắc nhở rằng
                nếu thu hồi sự đồng ý của mình, Quý Người dùng sẽ không thể tiếp
                cận với những người dùng khác trên nền tảng để phục vụ nhu cầu
                sử dụng dịch vụ của mình.
              </p>
              <p>
                <span className="announcement-fonweigh8">Mioto</span> hiểu rằng
                việc bảo vệ dữ liệu cá nhân là rất quan trọng, và chúng tôi cam
                kết tuân thủ Nghị định 13/2023/NĐ-CP và các quy định về bảo vệ
                dữ liệu liên quan khác. Bỏ qua thông tin này nếu bạn đồng ý để
                chia sẻ thông tin cá nhân của mình với các Người dùng khác trên
                nền tảng <span className="announcement-fonweigh8">Mioto</span>{" "}
                Hoặc vào tài khoản của mình vào để thu hồi/xóa dữ liệu. Cảm ơn
                sự quan tâm của bạn về vấn đề này. Chúng tôi rất trân trọng và
                hy vọng sẽ có cơ hội tiếp tục hỗ trợ bạn trong tương lai.
              </p>
            </div>
          </div>
          <div className="space sec"> </div>
          <div className="sidebar-polyci">
          <div className="dropdown-container-content">
              <div className="dropdown-container hihi ">
                <button
                  className="dropdown-btn selected"
                  onClick={togglePolyci}
                >
                  Chính sách quy định <FaAngleDown />
                </button>
                {isOpen && (
                  <div className="dropdown-content">
                    <Link to="/policy" className="dropdown-item"> Chính sách quy định</Link>
                    <Link to="/terms" className="dropdown-item">Nguyên tắc chung</Link>
                    <Link to="/perso" className="dropdown-item">chính sách bảo mật</Link>
                    <Link to="/resolve"className="dropdown-item">Giải quyết khiếu nại</Link>
                  </div>
                )}
              </div>
              </div>
            <div className="sidebar-content">
            
              <div className="hidden-sidebar">
              <div className="line"></div>
              <Link to="/policy" className="tutorial-sidebar--item activee">
                Chính sách & Quy định
              </Link>
              <div className="line"></div>
              <Link to="/terms" className="font16">Nguyên tắc chung</Link>,
              <div className="line"></div>
              <Link to="/perso" className="font16">Chính sách bảo mật</Link>
              <div className="line"></div>
              <Link to="/resolve" className="font16">Giải quyết khiếu nại</Link>
              
            </div>
            
            </div>
            <div className="category-option">
              <h4>Chính sách & Quy định</h4>
              <div className="category-option-content">
                <h6>
                  1. Trách nhiệm của khách thuê xe và chủ xe trong giao dịch cho
                  thuê xe tự lái
                </h6>
                <p className="subtitle">
                  Mục đích lâu dài của Mioto là hướng đến việc xây dựng cộng
                  đồng chia sẻ xe ô tô văn minh và uy tín tại Việt Nam. Vì thế,
                  để đảm bảo các giao dịch thuê xe trong cộng đồng được diễn ra
                  một cách thuận lợi và thành công tốt đẹp thì việc quy định
                  trách nhiệm của các bên trong tuân thủ các chính sách của
                  Mioto và các điều khoản cam kết là rất quan trọng.
                </p>
                <p>
                  A. Trách nhiệm của chủ xe
                  <br />- Giao xe và toàn bộ giấy tờ liên quan đến xe đúng thời
                  gian và trong tình trạng an toàn, vệ sinh sạch sẽ nhằm đảm bảo
                  chất lượng dịch vụ.
                  <br />- Các giấy tờ xe liên quan bao gồm: giấy đăng ký xe (bản
                  photo công chứng), giấy kiểm định, giấy bảo hiểm xe (bản photo
                  công chứng hoặc bản gốc).
                  <br />- Chịu trách nhiệm pháp lý về nguồn gốc và quyền sở hữu
                  của xe.
                </p>
                <p>
                  B. Trách nhiệm khách thuê xe
                  <br />- Kiểm tra kỹ xe trước khi nhận và trước khi hoàn trả
                  xe. Kí xác nhận biên bản bàn giao về tình trạng xe khi nhận và
                  khi hoàn trả. - Thanh toán đầy đủ tiền thuê xe cho Chủ xe khi
                  nhận xe.
                  <br />- Tại thời điểm nhận xe khách hàng xuất trình đầy đủ các
                  giấy tờ liên quan cho chủ xe: GPLX, CCCD (chụp hình đối chiếu)
                  Hoặc Hộ chiếu (passport) bản gốc giữ lại. Đặt cọc tài sản thế
                  chấp tiền mặt(15 triệu hoặc theo thỏa thuận với chủ xe) hoặc
                  xe máy có giá trị tương đương 15 triệu trở lên (xe máy và
                  cavet gốc) trước khi nhận xe.
                  <br />- Đối với trường hợp chủ xe hỗ trợ chính sách miễn thế
                  chấp: Khách hàng không cần để lại tài sản (xe máy hoặc 15triệu
                  tiền mặt) khi thuê xe của chủ xe. Trường hợp phát sinh các chi
                  phí khác (nếu có) trong quá trình thuê xe, khách hàng vui lòng
                  thanh toán trực tiếp cho chủ xe khi làm thủ tục trả xe.
                  <br />- Tuân thủ quy định và thời gian trả xe như 2 bên đã
                  thỏa thuận. - Chịu trách nhiệm đền bù mọi thất thoát về phụ
                  tùng, phụ kiện của xe, đền bù 100% theo giá phụ tùng chính
                  hãng nếu phát hiện phụ tùng bị tráo đổi, chịu 100% chi phí sửa
                  chữa xe nếu có xảy ra hỏng hóc tùy theo mức độ hư tổn của xe,
                  chi phí các ngày xe nghỉ không chạy được do lỗi của khách thuê
                  xe (giá được tính bằng giá thuê trong hợp đồng) và các khoản
                  phí vệ sinh xe nếu có.
                </p>
                <h6>
                  2. Trách nhiệm của Mioto trong các trường hợp xảy ra sự cố
                  ngoài ý muốn như xe bị cầm cố, thế chấp, bị bắt giữ khi được
                  dùng để vận chuyển ma túy, hàng quốc cấm, hoặc gây tai nạn
                </h6>
                <p>
                  Hiện tại, Mioto chỉ đóng vai trò là sàn giao dịch thương mại
                  điện tử về cho thuê xe ô tô, là cầu nối giữa các chủ xe và
                  khách hàng có nhu cầu thuê xe. Về cơ bản, mọi thủ tục và toàn
                  bộ các vấn đề phát sinh liên quan đến giao dịch cho thuê xe
                  giữa chủ xe và khách thuê sẽ do hai bên tự thỏa thuận, kí hợp
                  đồng và chịu trách nhiệm với nhau.
                  <br />
                  Trong trường hợp có xảy ra sự cố ngoài ý muốn như xe bị cầm
                  cố, thế chấp, bị bắt khi được dùng để vận chuyển ma túy, hàng
                  quốc cấm hoặc gây ra tai nạn, Mioto sẽ cố gắng hỗ trợ tốt nhất
                  các chủ xe trong khả năng của mình, giới hạn ở việc hướng dẫn
                  chủ xe các thủ tục cần thiết để trình báo với cơ quan công an
                  và các cơ quan có thẩm quyền, cung cấp các thông tin nếu có
                  liên quan đến thành viên thuê xe hoặc các thông tin khác nếu
                  có yêu cầu từ cơ quan chức năng, và tiến hành khóa vĩnh viễn
                  tài khoản thành viên vi phạm.
                </p>
                <h6 id="canel_trip">3. Chính sách hủy chuyến</h6>
                <p>
                  A. Dành cho khách thuê xe <br />
                  Bạn là khách thuê xe, sau khi đã đặt cọc và đặt xe thành công,
                  bạn có thể hủy chuyến đi đã đặt bằng cách gửi “Yêu cầu hủy
                  chuyến” thông qua trang web mioto.vn hoặc ứng dụng Mioto, và
                  lựa chọn lý do hủy chuyến.
                  <br />
                  Nếu thật sự muốn hủy chuyến, bạn nên lưu ý thực hiện việc này
                  càng sớm càng tốt vì Mioto sẽ tiến hành hoàn trả số tiền đặt
                  cọc cho bạn tùy thuộc vào thời điểm bạn gửi yêu cầu hủy
                  chuyến. Số tiền đặt cọc Mioto sẽ hoàn trả cho bạn được tính
                  như sau
                </p>
                <div className="category-option-table">
                  <div className="table-wrap">
                    <div className="box-content">
                      <h5>Thời điểm Huỷ Chuyến </h5>
                    </div>
                    <div className="box-content">
                      <h5>Số tiền cọc trả</h5>
                    </div>
                    <div className="box-content">
                      <h5>Thời điểm Huỷ Chuyến </h5>
                    </div>
                  </div>
                  <div className="table-wrap">
                    <div className="box-content">
                      <p>Trong vòng một giờ sau khi đặt cọc </p>
                    </div>
                    <div className="box-content">
                      <p>0% Tiền cọc</p>
                    </div>
                    <div className="box-content">
                      <p>100% Tiền cọc</p>
                    </div>
                  </div>
                  <div className="table-wrap">
                    <div className="box-content">
                      <p> 7 ngày trước khởi hành</p>
                    </div>
                    <div className="box-content">
                      <p>30% Tiền cọc</p>
                    </div>
                    <div className="box-content">
                      <p>70% Tiền cọc</p>
                    </div>
                  </div>
                  <div className="table-wrap">
                    <div className="box-content">
                      <p> 7 ngày trước chuyến đi </p>
                    </div>
                    <div className="box-content">
                      <p>100% Tiền cọc</p>
                    </div>
                    <div className="box-content">
                      <p>0% Tiền cọc</p>
                    </div>
                  </div>
                  <div className="table-wrap">
                    <p className="note">
                      Trường hợp phát sinh Phí hủy chuyến, Mioto sẽ trừ vào tiền
                      đặt cọc của Quý khách hàng và sẽ thanh toán lại khoản tiền
                      này cho Đối tác chủ xe (và ngược lại, trường hợp Đối tác
                      chủ xe hủy chuyến được đến phát sinh Phí hủy chuyến, Mioto
                      sẽ hoàn trả lại 100% tiền cọc và tiền phí hủy chuyến được
                      đền bù cho Quý khách trong 1 - 3 ngày làm việc).
                    </p>
                  </div>
                </div>
                <p>
                  B. Dành cho Chủ xe
                  <br />
                  Nếu bạn là chủ xe, trong trường hợp bạn muốn hủy chuyến sau
                  khi khách hàng đã đặt xe thành công, bạn có thể thực hiện thao
                  tác hủy chuyến trên ứng dụng Mioto.
                  <br />
                  Nhằm gia tăng sự cam kết của chủ xe cũng như đảm bảo quyền lợi
                  của khách thuê, trường hợp chủ xe hủy chuyến (vì lí do không
                  giao đúng xe / không giao xe đúng thời gian), nếu như không
                  thỏa thuận được hoặc không có sự đồng ý từ phía khách thuê,
                  thì chủ xe phải bồi thường phí hủy chuyến cho khách thuê số
                  tiền bằng đúng số tiền mà khách thuê đã đặt cọc thông qua Công
                  ty Cổ phần Mioto Asia.
                </p>
                <div className="category-option-table">
                  <div className="table-wrap">
                    <div className="box-content">
                      <h5>Thời điểm Huỷ Chuyến </h5>
                    </div>
                    <div className="box-content">
                      <h5>Số tiền cọc trả</h5>
                    </div>
                    <div className="box-content">
                      <h5>Đánh giá hệ thống</h5>
                    </div>
                  </div>
                  <div className="table-wrap">
                    <div className="box-content">
                      <p>Trong vòng một giờ sau khi đặt cọc </p>
                    </div>
                    <div className="box-content">
                      <p>0% Tiền cọc</p>
                    </div>
                    <div className="box-content">
                      <p>3★</p>
                    </div>
                  </div>
                  <div className="table-wrap">
                    <div className="box-content">
                      <p> 7 ngày trước khởi hành</p>
                    </div>
                    <div className="box-content">
                      <p>30% Tiền cọc</p>
                    </div>
                    <div className="box-content">
                      <p>3★</p>
                    </div>
                  </div>
                  <div className="table-wrap">
                    <div className="box-content">
                      <p> 7 ngày trước chuyến đi </p>
                    </div>
                    <div className="box-content">
                      <p>100% Tiền cọc</p>
                    </div>
                    <div className="box-content">
                      <p>2★ (hoặc 1★ nếu nhỏ 6 hơn tiếng)</p>
                    </div>
                  </div>
                  <div className="table-wrap">
                    <p className="note">
                      Trường hợp phát sinh Phí hủy chuyến, Mioto sẽ trừ vào tiền
                      đặt cọc của Quý khách hàng và sẽ thanh toán lại khoản tiền
                      này cho Đối tác chủ xe (và ngược lại, trường hợp Đối tác
                      chủ xe hủy chuyến được đến phát sinh Phí hủy chuyến, Mioto
                      sẽ hoàn trả lại 100% tiền cọc và tiền phí hủy chuyến được
                      đền bù cho Quý khách trong 1 - 3 ngày làm việc).
                    </p>
                  </div>
                </div>
                <p>
                  Phí hủy chuyến sẽ được trừ vào tài khoản của bạn trên Mioto.
                  Trong trường hợp số dư tài khoản của bạn nhỏ hơn số tiền phí
                  hủy chuyến, phần chênh lệch sẽ được ghi âm vào tài khoản và sẽ
                  cấn trừ vào thu nhập của bạn cho các chuyến xe tiếp theo.
                  <br />
                  Bên cạnh việc chịu phí, các chủ xe thực hiện hủy chuyến nhiều
                  lần sẽ bị tạm khóa tài khoản thành viên trên ứng dụng Mioto.
                  <br />
                  Bộ phận CSKH của Mioto sẽ liên hệ với khách thuê xe thông báo
                  về tình hình chuyến đi bị hủy, và tiến hành hoàn trả lại 100%
                  tiền cọc và tiền phí hủy chuyến được đền bù (nếu có) cho khách
                  thuê.
                </p>
                <h6>4. Chính sách giá</h6>
                <p>
                  A. Dành cho khách thuê xe
                  <br />
                  Trên ứng dụng Mioto, mỗi dòng xe sẽ được cho thuê tại các mức
                  giá khác nhau tùy thuộc vào sự quyết định của các chủ xe và
                  được niêm yết công khai.
                  <br />
                  Về cơ bản, cơ cấu giá của một chuyến đi được tính bao gồm các
                  thành phần:
                  <br />
                  - Đơn giá thuê: Là giá thuê niêm yết bởi chủ xe mà bạn dễ dàng
                  nhìn thấy trong phần thông tin xe. Giá thuê trên Mioto được
                  tính theo đơn vị nhỏ nhất là ngày. Chủ xe có thể điều chỉnh
                  giá thuê khác nhau cho từng ngày, chính vì vậy, chi phí thuê
                  xe của bạn có thể tăng hoặc giảm tùy vào thời điểm bạn thuê
                  xe. Thông thường, giá thuê sẽ cao hơn trong dịp cuối tuần và
                  các ngày lễ, tết.
                  <br />- Chiết khấu: một số chủ xe có chính sách chiết khấu cho
                  các chuyến xe kéo dài 1 tuần hoặc 1 tháng (mức chiết khấu bình
                  quân từ 5-20% tùy vào quyết định của chủ xe). Vì thế, nếu bạn
                  có nhu cầu thuê xe du lịch hay công tác dài ngày, hãy ưu tiên
                  lựa chọn các chủ xe này để có được mức giá tốt hơn.
                </p>
                <h6>5. Chính sách thanh toán</h6>
                <p>
                  Sau khi nhận được sự đồng ý cho thuê xe từ phía chủ xe, tại
                  bước cuối cùng, bạn cần phải đặt cọc trước cho Mioto 30% tổng
                  chi phí chuyến đi. Bạn có thể chọn lựa hình thức thanh toán
                  chuyển khoản qua ngân hàng trực tuyến hoặc sử dụng thẻ Visa.
                  <br />
                  Phần còn lại 70% bạn có thể thanh toán trực tiếp cho chủ xe
                  ngay khi nhận được xe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Policy;
