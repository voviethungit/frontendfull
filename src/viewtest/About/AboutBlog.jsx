import React from "react";
// import Nav from "./Nav";
import './css/aboutblog.css';
import './css/base.css'



import {
  FaSuitcaseRolling,
  FaUserGroup,
  FaHatCowboy,
  FaCar,
  FaMapLocationDot,
  FaRegStar,
} from "react-icons/fa6";

const AboutBlog = () => {
  return (
    <div>
    

      <div className="container_about">

        <div className="aboutus-desc">
          <h1>Mioto - Cùng bạn đến mọi hành trình</h1>
          <p>
            Mỗi chuyến đi là một hành trình khám phá cuộc sống và thế giới xung
            quanh, là cơ hội học hỏi và chinh phục những điều mới lạ của mỗi cá
            nhân để trở nên tốt hơn. Do đó, chất lượng trải nghiệm của khách
            hàng là ưu tiên hàng đầu và là nguồn cảm hứng của đội ngũ MIOTO.
            <br />
            <br />
            MIOTO là nền tảng chia sẻ ô tô, sứ mệnh của chúng tôi không chỉ dừng
            lại ở việc kết nối chủ xe và khách hàng một cách Nhanh chóng - An
            toàn - Tiện lợi, mà còn hướng đến việc truyền cảm hứng KHÁM PHÁ
            những điều mới lạ đến cộng đồng qua những chuyến đi trên nền tảng
            của chúng tôi.
          </p>
        </div>
        <div className="aboutus-img">
          <img
            src="https://www.mioto.vn/static/media/aboutus1.4c31a699.png"
            alt=""
          />
        </div>

        <div className="intro-container">
          <div className="intro-container__info">
            <h2>Drive. Explore. Inspire</h2>
            <p>
              <strong>Cầm lái</strong> và <strong>Khám phá</strong> thế giới đầy{" "}
              <strong> Cảm hứng </strong>
            </p>
            <p>
              MIOTO đặt mục tiêu trở thành cộng động người dùng ô tô Văn minh &
              Uy tín #1 tại Việt Nam, nhằm mang lại những giá trị thiết thực cho
              tất cả những thành viên hướng đến một cuộc sống tốt đẹp hơn.
              <br />
              <br />
              Chúng tôi tin rằng mỗi hành trình đều quan trọng, vì vậy đội ngũ
              và các đối tác của MIOTO với nhiều kinh nghiệm về lĩnh vực cho
              thuê xe, công nghệ, bảo hiểm & du lịch sẽ mang đến cho hành trình
              của bạn thêm nhiều trải nghiệm mới lạ, thú vị cùng sự an toàn ở
              mức cao nhất.
            </p>
          </div>
          <div className="intro-container__img">
            <img
              src="https://www.mioto.vn/static/media/aboutus2.18999daf.png"
              alt=""
            />{" "}
          </div>
        </div>
      </div>
   
      <div className="aboutus-icon">
        <h1>Mioto và những con số </h1>
        <div className="list-icon">
          <div className="list-icon__item">
            <span className="icon-item__content">
              {" "}
              <FaSuitcaseRolling />
            </span>
            <h5>100,000+</h5>
            <p>
              Chuyến đi đầy cảm hứng
              <br />
              Mioto đã đồng hành
            </p>
          </div>
          <div className="list-icon__item">
            <span className="icon-item__content">
              {" "}
              <FaUserGroup />
            </span>
            <h5>50,000+</h5>
            <p>
              Khách hàng
              <br />
              đã trải nghiệm dịch vụ
            </p>
          </div>
          <div className="list-icon__item">
            <span className="icon-item__content">
              {" "}
              <FaHatCowboy />
            </span>
            <h5>5,000++</h5>
            <p>
              Đối tác chủ xe
              <br />
              trong cộng đồng Mioto
            </p>
          </div>
          <div className="list-icon__item">
            <span className="icon-item__content">
              {" "}
              <FaCar />
            </span>
            <h5>100+</h5>
            <p>
              Dòng xe
              <br />
              khác nhau đang cho thuê
            </p>
          </div>
          <div className="list-icon__item">
            <span className="icon-item__content">
              {" "}
              <FaMapLocationDot />
            </span>
            <h5>100+</h5>
            <p>
              Thành phố
              <br />
              Mioto đã có mặt
            </p>
          </div>
          <div className="list-icon__item">
            <span className="icon-item__content">
              {" "}
              <FaRegStar />
            </span>
            <h5>4.95/5*</h5>
            <p>
              Là số điểm nhận được từ trên 50,000 khách hàng
              <br />
              đánh giá về dịch vụ của chúng tôi
            </p>
          </div>
        </div>
      </div>
    
       </div>
       
      
  
  );
};

export default AboutBlog;
