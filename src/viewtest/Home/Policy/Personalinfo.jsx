import React, { useState } from "react";
import "./css/policy.css"
import Header from '../Header';
import Footer from '../Footer';
import {Link} from 'react-router-dom';


import { FaAngleDown } from "react-icons/fa6";
const Personalinfo = () => {
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
                  Chính sách bảo mật <FaAngleDown />
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
              <Link to="/perso" className="tutorial-sidebar--item activee">Chính sách bảo mật</Link>
              <div className="line"></div>
              <Link to="/resolve">Giải quyết khiếu nại</Link>
              
            </div>
            </div>
            <div className="category-option">
              <h4>Chính sách bảo mật</h4>
              <div className="category-option-content">
                <h6>1. Giới thiệu</h6>
                <p>
                  Chào mừng bạn đến với nền tảng Mioto.vn (bao gồm website và ứng
                  dụng di động) được được vận hành bởi Công ty Cổ Phần Mioto Asia.
                  Mioto thông báo đến bạn và cần sự đồng ý và cho phép của bạn để
                  xử lý, thu thập và lưu trữ dữ liệu của bạn nhằm mục đích cung
                  cấp các dịch vụ cho bạn trong suốt quá trình sử dụng Website và
                  Ứng dụng di động, chúng tôi cam kết nghiêm túc thực hiện trách
                  nhiệm của mình liên quan đến bảo mật thông tin cá nhân và tôn
                  trọng quyền riêng tư của tất cả người dùng trên nền tảng.
                </p>

                <p>
                  Mioto là một sàn giao dịch thương mại điện tử (“Sàn TMĐT) đã
                  được đăng ký với Bộ Công Thương. Người dùng trên sàn bao gồm
                  người bán (chủ xe), người mua (khách thuê) và các bên khác sử
                  dụng dịch vụ của chúng tôi.
                </p>

                <p>
                  "Dữ Liệu Cá Nhân" có nghĩa là dữ liệu, dù đúng hay không, về một
                  cá nhân mà thông qua đó có thể xác định được danh tính, hoặc từ
                  dữ liệu đó và thông tin khác mà một tổ chức có hoặc có khả năng
                  tiếp cận. Các ví dụ thường gặp về dữ liệu cá nhân có thể gồm có
                  tên, số chứng minh nhân dân/căn cước công dân, mã số thuế, giấy
                  phép lái xe và thông tin liên hệ.
                </p>

                <p>
                  Chính sách bảo mật này ("Chính sách bảo mật" hay "Chính sách")
                  được thiết kế để giúp bạn hiểu được cách thức chúng tôi thu
                  thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân mà bạn đã
                  cung cấp cho chúng tôi và/hoặc lưu giữ về bạn, cho dù là hiện
                  nay hoặc trong tương lai, cũng như để giúp bạn đưa ra quyết định
                  sáng suốt trước khi cung cấp cho chúng tôi bất kỳ dữ liệu cá
                  nhân nào của bạn.
                </p>

                <p>
                  Bằng việc sử dụng Các Dịch Vụ, đăng ký tài khoản với chúng tôi
                  hoặc truy cập Nền tảng, bạn xác nhận và đồng ý rằng bạn chấp
                  nhận các phương pháp, yêu cầu, và/hoặc chính sách được mô tả
                  trong Chính sách bảo mật này, và theo đây bạn đồng ý cho phép
                  chúng tôi thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá
                  nhân của bạn như mô tả trong đây. Việc cho phép này sẽ có hiệu
                  lực và bắt đầu từ thời điểm bạn đồng ý cho đến khi bạn quyết
                  định rút lại sự đồng ý hoặc tự động kết thúc trong các trường
                  hợp theo quy định của pháp luật.
                </p>
                <h6>2. Khi nào Mioto sẽ thu thập dữ liệu cá nhân?</h6>

                <p>Chúng tôi sẽ/có thể thu thập dữ liệu cá nhân về bạn:</p>
                <li>Khi bạn đăng ký và/hoặc sử dụng Các Dịch Vụ hoặc Nền tảng của chúng tôi;</li>
                <li>Khi bạn gửi bất kỳ biểu mẫu nào, bao gồm đơn đăng ký hoặc các mẫu đơn khác liên quan đến bất kỳ sản phẩm và dịch vụ nào của chúng tôi, bằng hình thức trực tuyến hay dưới hình thức khác;</li>
                <li>Khi bạn ký kết bất kỳ thỏa thuận nào hoặc cung cấp các tài liệu hoặc thông tin khác liên quan đến tương tác giữa bạn với chúng tôi/khách hàng của chúng tôi, hoặc khi bạn sử dụng các sản phẩm và dịch vụ của chúng tôi;</li>
                <li>Khi bạn tương tác với chúng tôi, chẳng hạn như thông qua các cuộc gọi điện thoại (có thể được ghi âm lại), thư từ, fax, gặp gỡ trực tiếp, các nền ứng dụng truyền thông xã hội và email;</li>
                <li>Khi bạn sử dụng các dịch vụ điện tử của chúng tôi, hoặc tương tác với chúng tôi qua Nền tảng hoặc Trang Web hoặc Các Dịch Vụ của chúng tôi. Trường hợp này bao gồm thông qua tập tin cookie mà chúng tôi có thể triển khai khi bạn tương tác với các Nền tảng hoặc Trang Web của chúng tôi;</li>
                <li>Khi bạn liên kết tài khoản Mioto với tài khoản mạng xã hội của bạn hoặc các tài khoản bên ngoài khác hoặc sử dụng các tính năng mạng xã hội khác, phù hợp với các chính sách của nhà cung cấp</li>
                <br />
                <h6>3. Phạm vi, mục đích thu thập và sử dụng thông tin</h6>

                <u className="announcement-fonweigh8">Phạm vi thu thập</u>
                <br />
                <br />
                <p> <span className="announcement-fonweigh8" >Đối với Người bán/chủ xe:</span> Họ tên, email, chứng minh nhân dân/căn cước công dân, mã số thuế, điện thoại, tên đăng nhập, mật khẩu đăng nhập, địa chỉ sinh sống, tài khoản ngân hàng và thông tin thanh toán, các hình ảnh và thông tin về sản phẩm muốn đăng tải trên nền tảng.</p>
                <p > <span className="announcement-fonweigh8">Đối với Người mua/khách thuê: </span> Họ tên, email, chứng minh nhân dân/căn cước công dân, giấy phép lái xe ô tô, điện thoại, tên đăng nhập, mật khẩu đăng nhập, địa chỉ sinh sống, tài khoản ngân hàng và thông tin thanh toán.</p>
                <p>Các thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư điện tử của mình. Ngoài ra, thành viên có trách nhiệm thông báo kịp thời cho Mioto về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợ</p>
                <p>Bạn đồng ý không cung cấp cho chúng tôi bất cứ thông tin nào không chính xác hoặc gây hiểu nhầm và bạn đồng ý sẽ thông báo cho chúng tôi về bất cứ thông tin nào không chính xác hoặc khi có sự thay đổi thông tin.</p>

                <u className="announcement-fonweigh8">Mục đích thu thập và sử dụng thông tin</u>
                <br /> <br />
                <p>Mioto thu thập thông tin thành viên để:</p>
                <li>Xác minh danh tính của bạn và để quản lý tài khoản trực tuyến mà bạn có thể đã thiết lập với chúng tôi;</li>
                <li>Liên hệ xác nhận khi khách hàng đăng ký sử dụng dịch vụ trên website nhằm đảm bảo quyền lợi cho cho người tiêu dùng;</li>
                <li>Hỗ trợ việc đặt xe và cung cấp xe cho Khách hàng;</li>
                <li>Cung cấp các dịch vụ đến thành viên;</li>
                <li>Để xử lý các đơn đặt hàng bạn gửi qua Nền tảng;</li>
                <li>Gửi các thông báo về các hoạt động trao đổi thông tin giữa thành viên và Mioto bao gồm nhưng không giới hạn: chương trình khuyến mại, khảo sát ý kiến, tiếp thị và quảng cáo sản phẩm;</li>
                <li>Liên lạc với bạn để xử lý và trả lời các truy vấn, phản hồi, khiếu nại hoặc tranh chấp của bạn, cho dù trực tiếp hoặc thông qua bất kỳ nhà cung cấp dịch vụ khách hàng được thuê ở bên ngoài nào;</li>
                <li>Để lập số liệu thống kê và nghiên cứu đáp ứng yêu cầu báo cáo và/hoặc duy trì sổ sách nội bộ hoặc theo quy định;</li>
                <li>Để thực hiện quy trình tìm hiểu và xác minh hoặc các hoạt động sàng lọc khác (bao gồm nhưng không giới hạn kiểm tra lý lịch) tuân thủ các nghĩa vụ theo quy định pháp luật hoặc cơ quan nhà nước có thẩm quyền hoặc các thủ tục kiểm soát rủi ro của chúng tôi, có thể được pháp luật yêu cầu hoặc có thể đã được chúng tôi áp dụng;</li>
                <li>Ngăn ngừa các hoạt động phá hủy tài khoản người dùng của thành viên hoặc các hoạt động giả mạo thành viên;</li>

                <br />
                <h6>4. Những người hoặc tổ chức có thể được tiếp cận với thông tin</h6>
                <p>Mioto sẽ không tiết lộ thông tin của khách hàng cho các bên thứ ba vì mục đích kinh doanh hoặc tiếp thị độc lập của riêng họ mà không có sự đồng ý của bạn. Tuy nhiên, Mioto có thể tiết lộ thông tin của khách hàng cho các đối tượng sau:</p>
                <li>Các cơ quan nhà nước có thẩm quyền: Mioto sẽ cung cấp thông tin cá nhân của khách hàng theo yêu cầu của các cơ quan này.</li>
                <li>Ban quản trị Mioto, Bộ phận kinh doanh, Bộ phận Chăm sóc khách hàng và các cá nhân được phân công thực hiện các công việc có liên quan: Việc tiếp cận thông tin của các đối tượng này nhằm cung cấp dịch vụ cũng như hỗ trợ khách hàng trong quá trình sử dụng các dịch vụ được cung cấp bởi Mioto.</li>
                <li>Các bên khác khi có sự đồng ý hoặc theo hướng dẫn của khách hàng: Ngoài các tiết lộ như được mô tả trong Chính sách bảo mật thông tin cá nhân này, Mioto có thể chia sẻ thông tin cá nhân của khách hàng với các bên thứ ba khi khách hàng đồng ý hoặc yêu cầu việc chia sẻ như vậy.</li>

                <h6>5. Mioto có tiết lộ thông tin của người dùng không?</h6>
                <li>Trong quá trình thực hiện hoạt động kinh doanh, chúng tôi sẽ/có thể cần phải sử dụng, xử lý, tiết lộ và/hoặc chuyển giao dữ liệu cá nhân của bạn cho bên thứ ba bao gồm nhưng không giới hạn: cơ quan nhà nước có thẩm quyền, các công ty liên kết hoặc liên quan của chúng tôi,… việc tiết lộ này sẽ được thực hiện theo đúng trình tự và quy định của pháp luật hiện hành. Chúng tôi cố gắng đảm bảo rằng các bên thứ ba này giữ an toàn cho dữ liệu cá nhân của bạn khỏi bị truy cập, thu thập, sử dụng, tiết lộ, xử lý trái phép hoặc các rủi ro tương tự và chỉ lưu giữ dữ liệu cá nhân của bạn miễn là dữ liệu cá nhân của bạn vẫn còn cần thiết cho những việc nêu trên.</li>
                <li>Để tránh nghi ngờ, trong trường hợp các quy định của pháp luật về bảo vệ bí mật thông tin cá nhân hoặc các điều luật hiện hành khác cho phép một tổ chức chẳng hạn như chúng tôi thu thập, sử dụng hoặc tiết lộ dữ liệu cá nhân của bạn mà không cần sự đồng ý của bạn, sự cho phép như thế của pháp luật sẽ tiếp tục áp dụng. Phù hợp với các quy định nêu trên và theo các quy định của pháp luật hiện hành, chúng tôi có thể sử dụng dữ liệu cá nhân của bạn cho các cơ sở pháp lý đã được công nhận, bao gồm tuân thủ các nghĩa vụ pháp lý của chúng tôi, để thực hiện hợp đồng của chúng tôi với bạn, để đạt được lợi ích hợp pháp và lý do của chúng tôi để sử dụng dữ liệu đó cao hơn bất kỳ phương hại nào đến quyền bảo vệ dữ liệu của bạn hoặc khi cần thiết liên quan với một yêu cầu pháp lý.</li>
                <li>Các bên bất hợp pháp (tin tặc) có thể chặn hoặc truy cập trái phép dữ liệu cá nhân có trên trang web, nền tảng của chúng tôi có thể hoạt động không chính xác hoặc không hoạt động như dự kiến, hoặc có người có thể truy cập, lạm dụng hoặc sử dụng sai trái thông tin mà không phải lỗi của chúng tôi. Tuy nhiên chúng tôi sẽ triển khai các biện pháp bảo mật hợp lý để bảo vệ dữ liệu cá nhân của bạn theo quy định của các quy định của pháp luật về bảo vệ bí mật thông tin cá nhân; tuy nhiên không thể đảm bảo sự bảo mật tuyệt đối chẳng hạn như trường hợp tiết lộ trái phép phát sinh từ hoạt động tin tặc vì ý đồ xấu hoặc hành vi tấn công tinh vi bởi kẻ xấu mà không phải lỗi của chúng tôi.</li>
                <li>Bất kể quy định nào được quy định tại đây, tất cả người dùng và bên thư ba/người được phép truy cập dữ liệu cá nhân từ Mioto, (i) không được cho phép sử dụng các dữ liệu cá nhân trừ khi có lý do chính đáng cần thiết để phản hồi và để thực hiện việc trả lời, xử lý, giải quyết hoặc hoàn thành các giao dịch mà không có sự cho phép trước bằng văn bản của người dùng và Mioto; (ii) phải ngưng việc liên lạc với Người mua sử dụng các thông tin này bên ngoài nền tảng Mioto; (iii) không được cho phép tiết lộ các dữ liệu cá nhân đến bất cứ bên thứ ba không được phép nào mà không có sự cho phép trước bằng văn bản của người dùng đó và Mioto; (iv) phải thực hiện các biện pháp an ninh thích hợp để bảo vệ từng dữ liệu cá nhân người dùng của Mioto mà họ đang sở hữu, chỉ lưu giữ dữ liệu này chừng nào vẫn còn cần thiết cho các mục đích ở trên và phù hợp với quy định của pháp luật bảo vệ dữ liệu cá nhân, và xóa hoặc hoàn trả các dữ liệu này cho Mioto theo yêu cầu từ Mioto hoặc trong thời gian sớm nhất có thể khi hoàn thành giao dịch; và (v) thông báo cho Mioto tại contact@mioto.vn trong trường hợp có khả năng vi phạm dữ liệu hoặc mất dữ liệu khác của người dùng này.</li>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Personalinfo;
