import React, { useState } from 'react';
import Slider from 'react-slick';
import "./css/listblog.css";
import Header from "../Header";
import Footer from "../Footer";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgGirl from '../img/banner1.jpg';
import { Link } from 'react-router-dom';
import anh1 from '../img/blog1.jpg';
import anh2 from '../img/blog2.jpg';
import anh3 from '../img/blog3.jpg';
import anh4 from '../img/blog4.jpg';

const ListBlog1 = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const listBlogSlider = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: true,
            dots: true,
          },
        },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };
  const dataListBlogSlider = [
    {
      id: 1,
      time: '12-8-2023',
      title: 'Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH 2/9 bằng việc thuê xe',
      linkImg: anh1,
      linkTo: '/listblog'
    },
    // {
    //   id: 2,
    //   time: '12-8-2023',
    //   title: 'Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH 2/9 bằng việc thuê xe',
    //   linkImg: anh2,
    //   linkTo: '/listblog1'
    // },
    {
      id: 3,
      time: '12-8-2023',
      title: 'Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH 2/9 bằng việc thuê xe',
      linkImg: anh3,
      linkTo: '/listblog2'
    },
    {
      id: 4,
      time: '12-8-2023',
      title: 'Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH 2/9 bằng việc thuê xe',
      linkImg: anh4,
      linkTo: '/listblog3'
    },
  ];
  const handleImageClick = (linkTo) => {
    if (linkTo) {
      window.location.href = linkTo;
    }
  };
  return (
    <div className="main__listblog1">
      <Header/>
      <div className="blog__chill">
        <div className="blog_detail_main">
          <img
            src="https://n1-cstg.mioto.vn/g/2023/07/10/00/CVEJCQII.jpg"
            alt=""
          />
        </div>
        <div className="blog_detail_content">
          <div className="main_content">
            <div className="group-tag">
              <span className="info info-bg">Trải nghiệm</span>
            </div>
            <h2>
              Thuê Xe Ô Tô Tự Lái Tại Hà Nội: Sự Thuận Tiện Trong Việc Khám Phá
              Thủ Đô Hà Nội
            </h2>
            <div className="contant">
              <p>
                Việc thuê xe ô tô tự lái đang trở thành một lựa chọn phổ biến cho
                những ai muốn khám phá Hà Nội một cách tự do và tiện lợi. Không
                chỉ giúp bạn thoải mái di chuyển theo ý muốn mà còn mang đến những
                trải nghiệm độc đáo và thú vị trong chuyến hành trình của mình.
                Cùng Mioto tìm hiểu dịch vụ này và những lợi ích mà khi thuê xe tự
                lái mang lại nhé.
              </p>
  
              <h2 className="font-size">
                Tại sao nên thuê xe ô tô tự lái tại Hà Nội?
              </h2>
              <h3>Tự do di chuyển</h3>
              <p>
                Thuê xe tự lái cho phép bạn tự do di chuyển mà không bị ràng buộc
                bởi lịch trình của các phương tiện công cộng hay tour du lịch. Bạn
                có thể dừng lại bất cứ đâu và bất cứ lúc nào để thưởng thức phong
                cảnh, tham quan các điểm thú vị trên đường đi.
              </p>
  
              <h3 className="font-size2">Khám phá đa dạng</h3>
  
              <p>
                Hà Nội là một thành phố đa dạng với những con đường hấp dẫn, quận
                phố độc đáo và di sản văn hóa độc đáo. Bằng cách thuê xe tự lái,
                bạn có cơ hội khám phá những góc khuất và điểm đến ít người biết
                đến.
              </p>
  
              <h3 className="font-size2">Tiện lợi và linh hoạt</h3>
              <p>
                {" "}
                Việc sở hữu một chiếc xe cá nhân không phải lúc nào cũng tiện lợi.
                Thuê xe ô tô tự lái cho phép bạn sử dụng xe theo nhu cầu mà không
                phải lo lắng về bảo dưỡng, sửa chữa và các vấn đề khác.
              </p>
  
              <h3 className="font-size2">Thoải mái và riêng tư</h3>
              <p>
                Bạn có thể tận hưởng chuyến đi với gia đình hoặc bạn bè mà không
                bị gò ép của những người lạ trong cùng một nhóm tour. Riêng tư và
                thoải mái là điểm mạnh khi sử dụng dịch vụ thuê xe tự lái
              </p>
  
              <h3 className="font-size2">
                Tự do khám phá văn hóa và ẩm thực độc đáo
              </h3>
              <p>
                Hà Nội là một thành phố với văn hóa lâu đời và ẩm thực đa dạng.
                Khi bạn thuê xe ô tô tự lái, bạn có cơ hội khám phá những ngõ phố
                cổ kính, ngắm nhìn các kiến trúc cổ điển và thưởng thức những món
                ăn độc đáo tại các quán ẩm thực truyền thống. Việc tự mình lái xe
                giúp bạn tự do trong việc lựa chọn địa điểm và thời gian tham
                quan, mang đến trải nghiệm thú vị và độc đáo.
              </p>
  
              <h3 className="font-size2"> Tiết kiệm thời gian và chi phí</h3>
              <p>
                Trong môi trường đô thị như Hà Nội, việc di chuyển bằng xe ô tô tự
                lái cũng giúp bạn tiết kiệm thời gian và chi phí. Bạn không cần
                phải đợi chờ lâu để bắt xe buýt hoặc taxi, cũng như không phải chi
                trả các khoản phí vận chuyển riêng lẻ cho mỗi chuyến đi. Điều này
                đặc biệt quan trọng khi bạn có lịch trình bận rộn và muốn tận
                hưởng thời gian một cách hiệu quả.
              </p>
  
              <h3 className="font-size2">Lựa chọn dịch vụ uy tín khi thuê xe</h3>
              <p>
                Trước khi quyết định thuê xe, hãy tìm hiểu và chọn các dịch vụ uy
                tín, có đánh giá tích cực từ phía người dùng trước đó. Điều này
                giúp bạn tránh các rủi ro về chất lượng và dịch vụ.
              </p>
  
              <h3 className="font-size2">Chọn loại xe phù hợp</h3>
              <p>
                Dựa trên nhu cầu của bạn, lựa chọn loại xe ô tô phù hợp với số
                lượng người tham gia và mục đích của chuyến đi. Các dịch vụ thường
                cung cấp nhiều loại xe khác nhau để bạn lựa chọn.
              </p>
  
              <h2 className="font-size2">
                Kiểm tra hợp đồng và điều khoản khi thuê xe
              </h2>
  
              <p>
                Trước khi ký hợp đồng thuê, hãy đảm bảo bạn đã đọc kỹ các điều
                khoản và điều kiện, bao gồm giá cả, phí phạt, quy định bảo hiểm và
                khả năng nâng cấp, hủy bỏ.
              </p>
  
              <h3 className="font-size2">Kiểm tra trạng thái của xe</h3>
              <p>
                {" "}
                Nếu thời tiết thuận lợi, hãy đến Hồ Tây và thử các hoạt động như
                chèo thuyền kayak, tham gia cắm trại, hay đơn giản chỉ tận hưởng
                không gian yên bình bên bờ hồ.
              </p>
  
              <h3 className="font-size">
                Vậy khi thuê xe tại <span className="color__mioto"> Mioto </span>{" "}
                có ưu điểm gì?
              </h3>
              <h3 className="font-size2">Đa dạng trong từng dòng xe</h3>
  
              <p>
                <span className="color__mioto">Mioto</span> đa dạng từng dòng xe,
                từ phổ thông đến cao cấp, giúp bạn dễ dàng lựa chọn để phù hợp nhu
                cầu của mình. Từ những chiếc sedan thoải mái cho chuyến đi thành
                phố đến những chiếc SUV mạnh mẽ cho những cuộc hành trình chinh
                phục núi đồi, hay những chiếc xe mini gọn nhẹ nhưng động cơ không
                hề nhẹ, tất cả đều có sẵn để phục vụ nhu cầu của bạn.
              </p>
              <p>
                <img
                  src="https://n1-cstg.mioto.vn/g/2023/07/10/00/C9JL7WB4.jpg"
                  alt=""
                />
              </p>
  
              <h3>Giao xe tận nơi và giao tại sân bay</h3>
              <p>
                Một điều tiện lợi ở Mioto là bất kể ngày hay đêm, hoặc bạn cần
                giao trực tiếp tại sân bay khi đi công tác. Mioto cũng luôn sẵn
                sàng để giải quyết nhu cầu của bạn.
              </p>
              <h3 className="font-size2">
                Có kèo gấp <span className="color__mioto">Mioto </span>đều cân tất
              </h3>
              <p>
                Với tính năng Đặt xe nhanh, bạn thuận tiện hơn trong việc di
                chuyển mà không cần đợi xe quá nhiều thời gian làm ảnh hưởng lịch
                trình cũng như tiến độ của việc.
              </p>
              <p>
                <img
                  src="https://n1-cstg.mioto.vn/g/2023/07/10/00/CVEJCQII.jpg"
                  alt=""
                />
              </p>
  
              <h3>Thủ tục đơn giản và nhanh chóng</h3>
              <p>
                Bạn chỉ cần có CCCD gắn chip (Hoặc Passport) & Giấy phép lái xe là
                bạn đã đủ điều kiện thuê xe trên Mioto.
              </p>
  
              <h3>Thanh toán online dễ dàng</h3>
              <p>
                Đa dạng hình thức thanh toán: ATM, thẻ Visa & Ví điện tử (Momo,
                VnPay, ZaloPay), giúp bạn dễ dàng thanh toán online chỉ với thao
                tác vài phút trên ứng dụng Mioto.
              </p>
  
              <h3>Lái xe an toàn khi có bảo hiểm chuyến đi</h3>
              <p>
                Vững tay lái với gói bảo hiểm thuê xe từ nhà bảo hiểm MIC & VNI.
              </p>
              <p>
                <img
                  src="https://n1-cstg.mioto.vn/g/2023/07/10/00/CGQCKPCB.jpg"
                  alt=""
                />
              </p>
            </div>
          </div>
        </div> 
        <div className="slide-container ">
          <h1>Bài Viết liên quan</h1>
          <Slider {...listBlogSlider}>
          {dataListBlogSlider.map((item) => (
            <div key={item.id} className="slide-container-slider">
              {item.linkTo ? (
                <Link to={item.linkTo}>
                  <img className='slide-container-slider-img' src={item.linkImg} alt={item.title} onError={handleErrorImage} />
                </Link>
              ) : (
                <img
                  key={item.id}
                  className='slide-container-slider-img'
                  src={item.linkImg || defaultImage}
                  alt={item.title}
                  onClick={() => handleImageClick(item.linkTo)}
                />
              )}
              <div className='slide-container-slider-text'>
                <p>{item.time}</p>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
      <Footer/>
    </div>
    );
};

export default ListBlog1;
