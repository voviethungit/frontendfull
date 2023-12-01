import React, { useState } from "react";
import "./css/policy.css"
import Header from '../Header';
import Footer from '../Footer';
import {Link} from 'react-router-dom';


import { FaAngleDown } from "react-icons/fa6";

const Terms = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePolyci = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Header />
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
                liệu cá nhân của bạn. Tuy nhiên, chúng tôi muốn nhắc nhở rằng nếu
                thu hồi sự đồng ý của mình, Quý Người dùng sẽ không thể tiếp cận
                với những người dùng khác trên nền tảng để phục vụ nhu cầu sử dụng
                dịch vụ của mình.
              </p>
              <p>
                <span className="announcement-fonweigh8">Mioto</span> hiểu rằng
                việc bảo vệ dữ liệu cá nhân là rất quan trọng, và chúng tôi cam
                kết tuân thủ Nghị định 13/2023/NĐ-CP và các quy định về bảo vệ dữ
                liệu liên quan khác. Bỏ qua thông tin này nếu bạn đồng ý để chia
                sẻ thông tin cá nhân của mình với các Người dùng khác trên nền
                tảng <span className="announcement-fonweigh8">Mioto</span> Hoặc
                vào tài khoản của mình vào để thu hồi/xóa dữ liệu. Cảm ơn sự quan
                tâm của bạn về vấn đề này. Chúng tôi rất trân trọng và hy vọng sẽ
                có cơ hội tiếp tục hỗ trợ bạn trong tương lai.
              </p>
            </div>
          </div>
          <div className="space sec"> </div>
          <div className="sidebar-polyci">
            <div className="dropdown-container-content">
              <div className="dropdown-container">
                <button
                  className="dropdown-btn selected"
                  onClick={togglePolyci}
                >
                  Nguyên tắc chung <FaAngleDown />
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
            .<div className="sidebar-content">
            <div className="hidden-sidebar">
              <div className="line"></div>
              <Link to="/policy" className="font16">
                Chính sách & Quy định
              </Link>
              <div className="line"></div>
              <Link to="/terms"  className="tutorial-sidebar--item activee">Nguyên tắc chung</Link>
              <div className="line"></div>
              <Link to="/perso" className="font16">Chính sách bảo mật</Link>
              <div className="line"></div>
              <Link to="/resolve" className="font16">Giải quyết khiếu nại</Link>
              
            </div>
            </div>
            <div className="category-option">
              <h4>Nguyên tắc chung</h4>
              <div className="category-option-content">
                <h6>Trách nhiệm và trung thực</h6>
                <p>
                  Mioto hướng đến việc xây dựng một cộng đồng thuê xe với mong
                  muốn mang lại sự tiện ích cho khách thuê xe và chủ xe. Chính vì
                  vậy, khách thuê xe cần có trách nhiệm giữ gìn xe thuê, và trân
                  trọng như chính xe của bạn. Nếu có phát sinh vấn đề hay bất cứ
                  sự cố nào đối với xe trên chuyến đi của bạn, hãy mạnh dạn giải
                  quyết với chủ xe một cách TRUNG THỰC và CÓ TRÁCH NHIỆM.
                </p>
                <h6>Tạo sự tin tưởng</h6>
                <p>
                  Các chủ xe hãy tạo hồ sơ của mình trên ứng dụng Mioto thật rõ
                  ràng và minh bạch, bao gồm các hình ảnh cá nhân, tên, thông tin
                  liên lạc của bạn, mô tả kĩ càng và đầu tư nhiều vào chất lượng
                  hình ảnh để chiếc xe của bạn trông thật cuốn hút, điều này sẽ
                  giúp khách thuê TIN TƯỞNG và tỉ lệ thuê xe của bạn sẽ cao hơn.
                  <br />
                  Bạn có thể kiểm tra trực tuyến hồ sơ của Khách hàng trước khi
                  quyết định cho thuê, điều này sẽ giúp bạn an tâm hơn trước khi
                  giao chìa khóa xe cho những vị khách của mình.
                </p>

                <h6>Hãy giữ xe sạch sẽ</h6>
                <p>
                  Mioto hướng đến việc xây dựng một cộng đồng văn minh, vì vậy hãy
                  yêu quý và giữ vệ sinh những chiếc xe bạn thuê. Việc giao nhận
                  và hoàn trả những chiếc xe SẠCH SẼ giúp cả hai bên kết thúc giao
                  dịch một cách tốt đẹp và sẵn sàng cho những giao dịch tuyệt vời
                  sau này.
                </p>
                <h6>Thông báo ngay khi có vấn đề phát sinh</h6>
                <p>
                  Bất kì khi nào có phát sinh vấn đề trong quá trình thuê xe, chủ
                  xe và khách thuê xe nên THÔNG BÁO ngay cho nhau, và sử dụng các
                  điều khoản trong hợp đồng thuê xe hoặc các chính sách của Mioto
                  được đăng trên website Mioto.vn để giải quyết nhanh chóng.
                </p>
                <h6>Tuân thủ pháp luật</h6>
                <p>Các chủ xe có trách nhiệm đảm bảo xe của bạn có đầy đủ giấy tờ pháp lý và trong tình trạng AN TOÀN trước khi giao xe cho khách.
                  <br />
                  Khách thuê xe có trách nhiệm CHẤP HÀNH nghiêm chỉnh luật lệ giao thông và tuân thủ tất cả các điều luật hiện hành có liên quan trong thời gian thuê xe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Terms;
