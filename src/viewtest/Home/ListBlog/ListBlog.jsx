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

const ListBlog = () => {
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
    // {
    //   id: 1,
    //   time: '12-8-2023',
    //   title: 'Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH 2/9 bằng việc thuê xe',
    //   linkImg: anh1,
    //   linkTo: '/listblog'
    // },
    {
      id: 2,
      time: '12-8-2023',
      title: 'Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH 2/9 bằng việc thuê xe',
      linkImg: anh2,
      linkTo: '/listblog1'
    },
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
    <div className="main__listblog">
    <Header/>
    <div className="blog__chill">
      <div className="blog_detail_main">
        <img
          src="https://n1-cstg.mioto.vn/g/2023/07/12/09/6L6M2ZNX.jpg"
          alt=""
        />
      </div>
      <div className="blog_detail_content">
        <div className="main_content">
          <div className="group-tag">
            <span className="info info-bg">Trải nghiệm</span>
          </div>
          <h2>
            Khám phá Hà Nội vào Lễ Quốc Khánh 2/9 bằng việc thuê xe tự lái
          </h2>
          <div className="contant">
            <p>
              Đối với những người yêu thích du lịch và khám phá, Lễ Quốc Khánh
              2/9 là cơ hội lý tưởng để trải nghiệm vẻ đẹp và văn hóa của Hà
              Nội. Cũng như còn điều gì tuyệt vời hơn khi lễ này cùng gia đình
              vi vu 36 phố phường Hà Nội, ngắm nhìn vẻ đẹp cổ kính đậm văn hoá
              người Việt. Thành phố này không chỉ có những di sản văn hóa lâu
              đời mà còn có cả những danh lam thắng cảnh tuyệt đẹp. Hãy để Mioto
              gợi ý cho bạn những địa điểm lý tưởng để bạn ghé thăm trong dịp Lễ
              2/9 này nhé!
            </p>

            <h2 className="font-size">
              Phương tiện di chuyển thuận lợi cho chuyến đi?
            </h2>

            <p>
              Dịp Lễ 2/9 nói riêng cũng như các dịp Lễ khác nói chung, việc lựa
              chọn một phương tiện di chuyển phù hợp và thuận tiện cho lịch
              trình cũng là việc đáng quan tâm. Việc di chuyển bằng xe tự lái
              giúp bạn tiết kiệm thời gian so với việc sử dụng phương tiện công
              cộng hoặc chờ đợi taxi. Khi bạn sở hữu chiếc xe tự lái, bạn sẽ có
              toàn quyền quyết định địa điểm và thời gian di chuyển.
            </p>

            <p className="font-size5">Những lưu ý khi thuê xe tự lái</p>

            <h3 className="font-size2">Kiểm tra xe kỹ</h3>

            <p>
              Trước khi xuất phát, hãy kiểm tra kỹ càng các yếu tố như lốp xe,
              dầu động cơ và nhiên liệu.
            </p>

            <h3 className="font-size2">Luôn tuân thủ luật giao thông</h3>
            <p>
              {" "}
              Hãy tuân thủ các quy tắc giao thông và luôn đảm bảo an toàn khi
              lái xe.
            </p>

            <h3 className="font-size2">Tìm hiểu địa chỉ</h3>
            <p>
              Trước khi bắt đầu hành trình, nên tìm hiểu địa chỉ và lộ trình,
              lên kế hoạch cho các địa điểm để tránh lạc đường.
            </p>

            <h3 className="font-size2">Sử dụng GPS</h3>
            <p>
              Sử dụng thiết bị GPS hoặc điện thoại thông minh để dễ dàng dẫn
              đường.
            </p>

            <h3 className="font-size2">Bảo hiểm xe hợp lệ</h3>
            <p>
              Trước khi thuê xe, hãy kiểm tra xem bảo hiểm xe có hiệu lực và đầy
              đủ không, để đảm bảo bạn sẽ không gặp rắc rối trong trường hợp xảy
              ra sự cố.
            </p>

            <h3 className="font-size2">Thuê xe từ nguồn đáng tin cậy</h3>
            <p>
              Lựa chọn đơn vị cho thuê xe có danh tiếng tốt và uy tín. Điều này
              giúp đảm bảo bạn nhận được dịch vụ chất lượng và xe trong tình
              trạng tốt.
            </p>

            <h3 className="font-size2">Chuẩn bị giấy tờ cần thiết</h3>
            <p>
              Đừng quên mang theo giấy phép lái xe hợp lệ và giấy tờ tùy thân
              khi thuê xe. Có thể bạn sẽ cần chúng trong quá trình di chuyển.
            </p>

            <h2 className="font-size">
              Địa điểm thú vị để khám phá vào Lễ 2/9
            </h2>

            <h3 className="font-size2">Tham quan các bảo tàng</h3>
            <p>
              Nếu bạn quan tâm đến lịch sử và văn hóa, có nhiều bảo tàng ở Hà
              Nội như Bảo tàng Dân tộc học, Bảo tàng Lịch sử Quốc gia, nơi bạn
              có thể hiểu rõ hơn về lịch sử và di sản của đất nước.
            </p>

            <h3 className="font-size2">Dạo chơi ở Hồ Tây</h3>
            <p>
              {" "}
              Nếu thời tiết thuận lợi, hãy đến Hồ Tây và thử các hoạt động như
              chèo thuyền kayak, tham gia cắm trại, hay đơn giản chỉ tận hưởng
              không gian yên bình bên bờ hồ.
            </p>

            <h3 className="font-size2">Hồ Hoàn Kiếm</h3>
            <p>
              Khởi đầu hành trình với một buổi sáng tại Hồ Hoàn Kiếm. Bạn có thể
              dạo chơi quanh hồ, tham quan Ngọc Sơn Temple và ngắm cây cầu Thê
              Húc.
            </p>
            <p>
              <img
                src="https://n1-cstg.mioto.vn/g/2023/07/12/09/6JRP8F3U.jpg"
                alt=""
              />
            </p>

            <h3>Phố cổ Hà Nội</h3>
            <p>
              Tiếp theo, hãy lái xe đến Phố cổ Hà Nội, nơi lưu giữ nhiều di sản
              văn hóa truyền thống. Hãy dừng lại để thử những món ăn ngon truyền
              thống và mua sắm những sản phẩm độc đáo.
            </p>
            <p>
              <img
                src="https://n1-cstg.mioto.vn/g/2023/07/12/09/6L6M2ZNX.jpg"
                alt=""
              />
            </p>

            <h3>Văn Miếu - Quốc Tử Giám</h3>
            <p>
              Một trung tâm văn hóa lịch sử của thành phố, nơi tôn vinh học vấn.
              Bạn có thể tìm hiểu về lịch sử và văn hóa thông qua các tượng đài
              và bảng thông tin tại đây.
            </p>

            <h3>Thử các món ăn địa phương</h3>
            <p>
              Hà Nội nổi tiếng với những món ăn độc đáo như phở, bún chả, chả cá
              Lã Vọng. Đừng bỏ lỡ cơ hội thử những món ăn tại các quán địa
              phương.
            </p>

            <h3>Khám phá văn hóa đêm</h3>
            <p>
              Nếu bạn ưa thích không gian văn hóa đêm, hãy tham gia các hoạt
              động như xem múa rối nước tại Nhà hát múa rối nước Thăng Long, hay
              dạo chơi tại khu phố cổ vào ban đêm để cảm nhận vẻ đẹp lãng mạn và
              đèn lồng lung linh.
            </p>
          </div>
        </div>
      </div>

      <div className="slide-container ">
        <h1>Bài viết liên quan</h1>
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

export default ListBlog;
