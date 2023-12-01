import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./css/Howtowork.css";
import { Link } from "react-router-dom";
import Howtonavbarmb from "./Howtonavbarmb";

function Regu() {
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
            <Link className="howto-link-btn" to="/book">
              Hướng dẫn đặt xe
            </Link>
            <Link className="howto-link-btn" to="/paymen">
              Hướng dẫn thanh toán
            </Link>
            <Link className="howto-link-btn active-howto" to='/regu'>Quy chế hoạt động </Link>
          </div>
          <div className="main-content">
            <div className="main-content-option">
              <div className="main-content-option-top">
                <h1>Quy chế hoạt động</h1>
              </div>
            </div>
            <div className="regu-content">
              <h2>I. Nguyên tắc chung</h2>
              <p>
                Sàn giao dịch TMĐT Mioto.vn (sau đây gọi tắt là “Sàn giao dịch")
                do Công ty Cổ phần Mioto Asia ("Công ty") xây dựng và vận hành.
                Thành viên trên Sàn giao dịch là các thương nhân, tổ chức, cá
                nhân có hoạt động thương mại hợp pháp được Ban Quản lí Sàn giao
                dịch
              </p>
              <p>
                TMĐT Mioto.vn ("Ban Quản lí") chính thức công nhận và được phép
                sử dụng dịch vụ của Sàn giao dịch và các bên liên quan cung cấp.
              </p>
              <p>
                Nguyên tắc này áp dụng cho các Thành viên đăng ký sử dụng, tham
                gia đăng thông tin được thực hiện trên Sàn giao dịch.
                <br />
                Thương nhân, tổ chức, cá nhân tham gia giao dịch tại Sàn giao
                dịch tự do thỏa thuận trên cơ sở tôn trọng quyền và lợi ích hợp
                pháp của các bên tham gia hoạt động cung ứng và sử dụng dịch vụ
                không trái với qui định của Pháp luật.
                <br />
                Thông tin về thương nhân, tổ chức, cá nhân tham gia là Thành
                viên trên Mioto.vn phải minh bạch và chính xác.
                <br />
                Dịch vụ được giới thiệu trên Sàn giao dịch phải đáp ứng đầy đủ
                các quy định của Pháp luật có liên quan, không thuộc các trường
                hợp cấm kinh doanh, cấm quảng cáo theo quy định của Pháp luật.
              </p>
              <p>
                Tất cả các nội dung trong Quy chế này phải tuân thủ theo hệ
                thống Pháp luật hiện hành của Việt Nam. Thành viên khi tham gia
                vào Sàn giao dịch phải tự tìm hiểu trách nhiệm pháp lý của mình
                đối với Pháp luật hiện hành của Việt Nam và cam kết thực hiện
                đúng những nội dung trong Quy chế của Sàn giao dịch.
              </p>
              <h2>II. Quy định chung</h2>
              <p>
                <strong>1. Định nghĩa chung</strong>
              </p>
              <p>
                Tên miền Sàn Giao dịch TMĐT Mioto.vn: do Công ty Cổ phần Mioto
                Asia phát triển với tên miền của Sàn giao dịch là Mioto.vn.
                Người bán (Chủ xe/Đối tác): là thương nhân, tổ chức, cá nhân có
                nhu cầu sử dụng dịch vụ của Sàn giao dịch để: giới thiệu xe cho
                thuê, dịch vụ cho thuê xe…
              </p>
              <p>
                Người mua (Khách thuê xe/Khách hàng): là thương nhân, tổ chức,
                cá nhân có nhu cầu tìm hiểu thông tin và sử dụng dịch vụ được
                đăng bán trên Sàn giao dịch. Người mua có quyền đăng ký tài
                khoản hoặc không cần đăng ký. Thành viên: là bao gồm cả Người
                bán (Chủ xe) lẫn Người mua (Khách hàng). Thành viên tham gia
                giao dịch trên Sàn giao dịch là thương nhân, tổ chức, cá nhân có
                nhu cầu thuê và cho thuê trên website Mioto.vn. Thành viên phải
                đăng ký kê khai ban đầu các thông tin cá nhân có liên quan, được
                Ban Quản lí Sàn giao dịch chính thức công nhận và được phép sử
                dụng dịch vụ do Sàn giao dịch cung cấp. Sản phẩm/Dịch vụ: là
                dịch vụ cho thuê xe ô tô được giao dịch trên Sàn giao dịch.
              </p>
              <p>TMĐT: Thương mại điện tử</p>
              <p>
                Sở hữu trí tuệ: là bất kỳ bằng sáng chế, bản quyền, thiết kế
                được đăng ký hoặc chưa đăng ký, quyền đối với thiết kế, nhãn
                hiệu được đăng ký hoặc chưa đăng ký, nhãn hiệu dịch vụ hoặc
                quyền sở hữu công nghiệp hoặc sở hữu trí tuệ khác và bao gồm các
                ứng dụng cho bất kỳ mục nào trong những mục trên Sàn giao dịch
              </p>
              <p>
                Nội dung bản Quy chế này tuân thủ theo các quy định hiện hành
                của Pháp luật Việt Nam. Thành viên khi tham gia giao dịch trên
                Sàn giao dịch phải tự tìm hiểu trách nhiệm pháp lý của mình đối
                với Pháp luật hiện hành của Việt Nam và cam kết thực hiện đúng
                những Nội dung trong Quy chế của Sàn giao dịch.
              </p>
              <p>
                <strong>2. Hướng dẫn sử dụng chung</strong>
              </p>
              <p>
                Công ty sẽ cấp một tài khoản (Account) để Thành viên có thể sử
                dụng dịch trên Sàn giao dịch trong khuôn khổ Điều khoản sử dụng
                đã đề ra. Thành viên sẽ phải đăng ký tài khoản với thông tin xác
                thực về bản thân và phải cập nhật nếu có bất kỳ thay đổi nào.
                Thành viên xác nhận rằng những thông tin cung cấp là sự thật và
                chính xác. Mỗi Thành viên truy cập phải có trách nhiệm với mật
                khẩu, tài khoản, hoạt động của mình trên website và phải thông
                báo cho Ban Quản lí biết khi tài khoản bị truy cập trái phép.
              </p>
              <p>
                Công ty không chịu bất kỳ trách nhiệm nào, dù trực tiếp hay gián
                tiếp, đối với những thiệt hại hoặc mất mát gây ra do Thành viên
                không tuân thủ quy định. Thành viên sử dụng dịch vụ của Sàn giao
                dịch với mục đích duy nhất là dành cho cá nhân mình. Thành viên
                không thể ủy quyền cho người khác sử dụng trạng thái khách hàng
                của mình, và không thể ấn định hay chuyển giao tài khoản của
                mình cho bất kỳ ai hoặc một thực thể nào khác. Bên cạnh đó,
                Thành viên đồng ý tuân thủ tất cả các quy định Pháp luật liên
                quan được áp dụng tại quốc gia của mình, tại đất nước, thành phố
                mà Thành viên đang sinh sống có sử dụng dịch vụ của Sàn giao
                dịch. Thành viên chỉ có thể truy cập vào website của Sàn giao
                dịch bằng cách sử dụng các cách thức được cho phép.
              </p>
              <p>
                Thành viên có trách nhiệm phải kiểm tra để đảm bảo rằng Thành
                viên đã truy cập đúng website dành cho thiết bị của mình. Công
                ty không chịu trách nhiệm nếu Thành viên không có một thiết bị
                tương thích để truy cập website của Sàn giao dịch. Công ty giữ
                quyền chấm dứt thỏa thuận này nếu Thành viên sử dụng website với
                một thiết bị không tương thích hay không được cho phép.
              </p>
              <p>
                Thành viên sẽ chỉ sử dụng website cho các mục đích hợp pháp;
                tuyệt đối sẽ không sử dụng website để gửi và lưu trữ bất kỳ dữ
                liệu trái phép nào hoặc phục vụ các mục đích lừa đảo. Thành viên
                sẽ không sử dụng website của Sàn giao dịch để gây phiền toái,
                khó chịu, bất tiện hoặc làm giả yêu cầu đặt xe. Thành viên sẽ
                không gây ảnh hưởng đến hoạt động bình thường của Sàn giao dịch.
                Thành viên sẽ không cố gắng gây tổn hại cho Sàn giao dịch bằng
                bất kỳ cách nào. Thành viên sẽ không sao chép, hoặc phân phối
                các nội dung thuộc về Sàn giao dịch mà không có sự cho phép bằng
                văn bản của Công ty. Thành viên đồng ý rằng việc sử dụng dịch vụ
                trên Sàn giao dịch của Thành viên sẽ tùy thuộc vào Chính sách
                bảo mật của Công ty có thể được sửa đổi theo thời gian.
              </p>
              <p>
                Công ty nghiêm cấm sử dụng bất kỳ phần nào của trang web này với
                mục đích thương mại hoặc nhân danh bất kỳ đối tác thứ ba nào nếu
                không được Công ty cho phép bằng văn bản. Nếu vi phạm bất cứ
                điều nào trong đây, Công ty sẽ hủy tài khoản của Thành viên mà
                không cần báo trước.
              </p>
              <p>
                Trong suốt quá trình đăng ký, Thành viên đồng ý nhận thông tin
                tiếp thị từ Sàn giao dịch. Nếu không muốn tiếp tục nhận thông
                tin tiếp thị, Thành viên có thể từ chối bằng cách gọi điện cho
                Công ty theo số điện thoại 1900 9217 hoặc gửi email cho Bộ phận
                Chăm sóc Khách hàng của Công ty tại support@mioto.vn
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Regu;
