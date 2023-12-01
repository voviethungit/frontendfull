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

const ListBlog2 = () => {
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
    {
      id: 2,
      time: '12-8-2023',
      title: 'Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH 2/9 bằng việc thuê xe',
      linkImg: anh2,
      linkTo: '/listblog1'
    },
    // {
    //   id: 3,
    //   time: '12-8-2023',
    //   title: 'Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH 2/9 bằng việc thuê xe',
    //   linkImg: anh3,
    //   linkTo: '/listblog2'
    // },
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
    <div className="main__listblog2">
      <Header/>
    <div className="blog__chill">
      <div className="blog_detail_main">
        <img
          src="https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg"
          alt=""
        />
      </div>
      <div className="blog_detail_content">
        <div className="main_content">
          <div className="group-tag">
            <span className="info info-bg">Trải nghiệm</span>
          </div>
          <h2>Xe Ô Tô Điện - Sự Lựa Chọn Hoàn Hảo Cho Lái Mới</h2>
          <div className="contant">
            <p>
              Trong thời đại công nghệ phát triển nhanh chóng, xe ô tô điện đã
              trở thành xu hướng phổ biến và được đánh giá cao về tính bền vững
              và tiết kiệm năng lượng. Đối với những người mới bước chân vào thế
              giới lái xe, việc chọn một chiếc xe ô tô điện là một quyết định
              thông minh và hoàn hảo. Dưới đây là một số lý do tại sao xe ô tô
              điện là lựa chọn lý tưởng cho lái mới, giúp bạn có được cái nhìn
              tổng quan để đưa ra quyết định phù hợp với nhu cầu của mình.
            </p>

            <h3>An toàn đối với lái mới</h3>
            <p>
              Một trong những yếu tố quan trọng hàng đầu khi chọn xe ô tô cho
              lái mới là tính an toàn. Xe ô tô điện thường được trang bị nhiều
              công nghệ an toàn tiên tiến, bao gồm hệ thống phanh chống bó cứng
              ABS, hệ thống kiểm soát lực kéo và túi khí. Điều này giúp giảm
              thiểu nguy cơ tai nạn và bảo vệ tốt cho người lái cũng như hành
              khách. <br /> <br />
              Bên cạnh đó, các chiếc xe điện thường có trọng lượng phân bố tốt
              và trọng tâm thấp, giúp tăng tính ổn định và khả năng giữ thăng
              bằng trong quá trình lái xe. Các hệ thống hỗ trợ lái như cảnh báo
              lấn làn và cảnh báo điểm mù cũng giúp cho lái xe mới tự tin và an
              toàn hơn trên đường.
            </p>

            <h3 className="font-size2">Tiết kiệm chi phí vận hành</h3>

            <p>
              Một trong những ưu điểm nổi bật của xe ô tô điện là tiết kiệm chi
              phí vận hành so với xe động cơ đốt trong truyền thống. Xe điện
              không yêu cầu dầu diesel hoặc xăng, thay vào đó sử dụng điện năng,
              giúp giảm thiểu chi phí nhiên liệu. Thêm vào đó, nhiều nước cũng
              cung cấp ưu đãi thuế và hỗ trợ cho người sở hữu xe ô tô điện, giúp
              giảm nguy cơ quá tải tài chính cho lái xe mới. <br />
              <br />
              Ngoài ra, xe điện ít phụ thuộc vào các bộ phận cơ học phức tạp,
              giảm thiểu chi phí bảo dưỡng và sửa chữa. Điều này đặc biệt hữu
              ích cho lái mới, người thường chưa có nhiều kinh nghiệm trong việc
              duy trì và bảo trì ô tô.
            </p>

            <h3 className="font-size2">Bảo vệ môi trường</h3>
            <p>
              {" "}
              Xe ô tô điện được đánh giá cao về tính bền vững và bảo vệ môi
              trường. Với không khí ngày càng ô nhiễm và biến đổi khí hậu trở
              thành mối quan ngại hàng đầu, việc sử dụng xe điện là một cách
              đóng góp tích cực cho sự bảo vệ môi trường. <br />
              <br />
              Xe điện không sản sinh ra khí thải độc hại và CO2 như xe động cơ
              đốt trong, giúp giảm thiểu tác động tiêu cực đến không khí và môi
              trường. Điều này cũng góp phần hỗ trợ nỗ lực toàn cầu trong việc
              giảm phát thải khí nhà kính và gia tăng sử dụng nguồn năng lượng
              tái tạo.
            </p>

            <h3 className="font-size2">Thuê xe điện giá rẻ ở đâu?</h3>
            <p>
              Nếu bạn là một người yêu môi trường, là tín đồ của phương tiện
              xanh hoặc muốn trải nghiệm trước khi quyết định mua xe thì Mioto
              chính là ứng dụng cho thuê xe tự lái & có tài đáng để bạn cân
              nhắc. <br /> <br />
              <span className="color__mioto">Mioto </span> có đa dạng nhiều dòng
              xe, từ xe xăng, xe dầu hay xe điện, Mioto đều đáp ứng nhu cầu của
              bạn. Giá thuê xe điện tại Mioto chỉ từ 1000k/ngày, và đặc biệt khi{" "}
              <br /> <span className="color__mioto">Mioto</span> tung ưu đãi
              giảm 20% (tối đa 300k) khi bạn trải nghiệm xe điện tại ứng dụng.
              Ưu đãi được áp dụng đến hết ngày 31/07/2023.
            </p>
            <p>
              <img
                src="https://n1-cstg.mioto.vn/g/2023/06/25/08/ZLW62WK.jpg"
                alt=""
              />
            </p>
            <p>
              Xe ô tô điện là sự lựa chọn hoàn hảo cho lái mới với những ưu điểm
              vượt trội về môi trường, hiệu suất và tiết kiệm năng lượng. Ngoài
              ra, việc lái xe ô tô điện cũng đơn giản và dễ dàng hơn, giúp người
              lái tập trung vào việc hưởng thụ trải nghiệm lái xe thú vị và đóng
              góp tích cực đến bảo vệ môi trường. Mặc dù có một số thách thức
              cần đối mặt, nhưng với sự phát triển của công nghệ và quy mô sản
              xuất, xe ô tô điện có tiềm năng trở thành xu hướng chính trong
              tương lai và thúc đẩy sự chuyển đổi đến một tương lai giao thông
              bền vững và sạch hơn.
              <br />
              Hy vọng bài viết này sẽ giúp bạn có cái nhìn tổng quan hơn để đưa
              ra quyết định phù hợp với nhu cầu của mình.
            </p>
            <a href="#" className="color__mioto">
              Xem thêm Nên Lựa Chọn Xe Số Sàn Hay Số Tự Động, Kinh Nghiệm Dành
              Cho Lái Mới Hoặc Mua Xe Lần Đầu?
            </a>
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

export default ListBlog2;
