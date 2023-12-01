import React, { useState } from "react";
import "./css/policy.css"
import Header from '../Header';
import Footer from '../Footer';
import {Link} from 'react-router-dom';


import { FaAngleDown } from "react-icons/fa6";

const Resolveconflic = () => {
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
                  Giải quyết khiếu nại <FaAngleDown />
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
              <Link to="/policy">
                Chính sách & Quy định
              </Link>
              <div className="line"></div>
              <Link to="/terms">Nguyên tắc chung</Link>,
              <div className="line"></div>
              <Link to="/perso">Chính sách bảo mật</Link>
              <div className="line"></div>
              <Link to="/resolve"  className="tutorial-sidebar--item activee">Giải quyết khiếu nại</Link>
              
            </div>
            </div>
            <div className="category-option">
              <h4>Quy trình giải quyết khiếu nại</h4>
              <div className="category-option-content">
                <p>
                  Công ty và Chủ xe có trách nhiệm tiếp nhận các khiếu nại và hỗ
                  trợ Khách hàng liên quan đến các giao dịch được kết nối thông
                  qua Sàn giao dịch. Các khiếu nại liên quan đến việc cung cấp, sử
                  dụng dịch vụ thuê xe trên Sàn giao dịch do Công ty chịu trách
                  nhiệm độc lập giải quyết trên cơ sở quy định của pháp luật, Điều
                  khoản và Điều kiện sử dụng dịch vụ, các thông báo, quy chế đã
                  công bố với Thành viên (Khách hàng và Chủ xe). Khi phát sinh
                  tranh chấp, Công ty đề cao giải pháp thương lượng, hòa giải giữa
                  các bên nhằm duy trì sự tin cậy của Thành viên vào chất lượng
                  dịch vụ của Sàn giao dịch. Khách hàng có thể thực hiện theo các
                  bước sau:
                </p>

                <p>
                  <strong>Bước 1: </strong>
                  Khách hàng khiếu nại về dịch vụ qua số điện thoại 1900 9217 hoặc
                  gửi mail cho Bộ phận Chăm sóc Khách hàng tại địa chỉ
                  support@mioto.vn. Thời gian để Công ty tiếp nhận khiếu nại là 3
                  ngày kể từ ngày sử dụng dịch vụ hoặc từ ngày phát sinh sự việc.
                </p>

                <p>
                  <strong>Bước 2: </strong>
                  Trong thời hạn (3) ngày làm việc kể từ khi tiếp nhận thông tin
                  khiếu nại của Khách hàng, Bộ phận Chăm sóc Khách hàng xác nhận
                  thông tin khiếu nại, tiến hành phân loại thông tin và thông báo
                  cho Khách hàng:
                </p>

                <p>
                  <strong>Bước 3: </strong>
                  Giải quyết vấn đề:
                  <br />
                  Bộ phận Chăm sóc Khách hàng sẽ tiến hành xác minh, kiểm chứng và
                  phân tích tính chất và mức độ của nội dung khiếu nại, phạm vi
                  khiếu nại và trách nhiệm xử lý để phối hợp với Chủ xe và Bên
                  cung cấp dịch vụ thứ 3 đưa ra biện pháp cụ thể để hỗ trợ Khách
                  hàng giải quyết tranh chấp đó.
                  <br />
                  3a. Chuyển các vấn đề có liên quan trực tiếp đến Công ty cho các
                  Bộ phận có liên quan kiểm tra và đối chiếu.
                  <br />
                  3b. Chuyển các vấn đề có liên quan cho Chủ xe giải quyết.
                  <br />
                  Trong thời hạn ba (3) ngày làm việc kể từ khi tiếp nhận thông
                  báo về khiếu nại, Chủ xe có trách nhiệm phối hợp với Mioto để
                  giải quyết, xử lý khiếu nại. Chủ xe sẽ thông báo cho Khách hàng
                  biện pháp xử lý hoặc ủy quyền thông báo cho Công ty.
                </p>

                <p>
                  <strong>Bước 4: </strong>
                  Đóng khiếu nại:
                  <br />
                  4a. Khách hàng đồng ý với các phản hồi của Bộ phận Chăm sóc
                  Khách hàng - Kết thúc khiếu nại. Khách hàng không đồng ý - Quay
                  lại bước 3
                  <br />
                  4b. Theo dõi các giải quyết khiếu nại của Chủ xe - Kết thúc
                  khiếu nại khi Khách hàng và Chủ xe đã thỏa thuận xong.
                  <br />
                  Khi nhận được thông báo về biện pháp xử lý từ Chủ xe nhưng Khách
                  hàng không đồng ý thì Công ty sẽ chủ trì việc thương lượng, hòa
                  giải giữa Khách hàng và Chủ xe để đi đến kết quả giải quyết phù
                  hợp với cả hai bên. Trong trường hợp Khách hàng và Chủ xe không
                  đi đến thỏa thuận chung hoặc Khách hàng không đồng ý với những
                  biện pháp giải quyết cuối cùng của Chủ xe và/hoặc nằm ngoài khả
                  năng và thẩm quyền của Công ty thì Khách hàng hoặc C hủ xe có
                  thể nhờ đến Cơ quan Nhà nước có thẩm quyền can thiệp và giải
                  quyết theo Pháp luật nhằm đảm bảo lợi ích hợp pháp của các bên.
                </p>
                <p>
                  Công ty tôn trọng và nghiêm túc thực hiện các quy định của Pháp
                  luật về Bảo vệ quyền lợi của người dùng. Công ty khuyến nghị
                  Khách hàng và Chủ xe cung cấp chính xác, trung thực, chi tiết
                  các thông tin cá nhân và nội dung đăng tin liên quan đến dịch
                  vụ. Chúng tôi cũng đề nghị Chủ xe cần nghiêm túc tuân thủ các
                  quy định của Pháp luật, cũng như có những hành vi phù hợp đối
                  với Khách hàng. Mọi hành vi lừa đảo, gian lận trong kinh doanh,
                  gây tổn hại đến người khác đều bị lên án và phải chịu hoàn toàn
                  trách nhiệm trước Pháp luật. Các bên bao gồm Khách hàng và Chủ
                  xe sẽ phải có trách nhiệm tích cực trong việc giải quyết khiếu
                  nại. Chủ xe cần có trách nhiệm chủ động xử lý và cung cấp văn
                  bản giấy tờ chứng thực thông tin liên quan đến sự việc đang có
                  khiếu nại, tranh chấp với Khách hàng. Công ty chỉ đóng vai trò
                  hỗ trợ, phối hợp việc thương lượng, hòa giải và giải quyết khiếu
                  nại giữ Khách hàng và Chủ xe. Công ty cũng có trách nhiệm cung
                  cấp những thông tin liên quan đến Khách hàng và Chủ xe nếu được
                  Chủ xe hoặc Khách hàng hoặc Cơ quan Pháp luật có thẩm quyền yêu
                  cầu.
                </p>
                <p>
                  Sau khi Khách hàng và Chủ xe đã giải quyết xong tranh chấp, cần
                  có trách nhiệm báo lại cho Công ty để cập nhật tình hình. Trong
                  trường hợp giao dịch phát sinh mâu thuẫn mà lỗi thuộc về Chủ xe:
                  Công ty sẽ áp dụng các biện pháp xử lý vi phạm tương ứng bao gồm
                  nhưng không giới hạn: cảnh cáo, khóa tài khoản hoặc chuyển cho
                  Cơ quan Pháp luật có thẩm quyền tùy theo mức độ của sai phạm.
                  Công ty sẽ chấm dứt và gỡ bỏ toàn bộ tin bài về sản phẩm, dịch
                  vụ của Chủ xe đó trên Sàn giao dịch đồng thời yêu cầu Chủ xe bồi
                  hoàn cho Khách hàng thỏa đáng trên cơ sở thỏa thuận với Khách
                  hàng.
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

export default Resolveconflic;
