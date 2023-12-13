import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./css/contentproduct.css";
import "./css/base.css";
import {
  FaHeart,
  FaShareNodes,
  FaStar,
  FaFax,
  FaShield,
  FaQuestion,
  FaCalendarMinus,
  FaCircleCheck,
  FaCircleExclamation,
  FaFlag,
  FaChair,
  FaMendeley,
  FaChargingStation,
  FaBluetoothB,
  FaCamera,
  FaCameraRetro,
  FaBullseye,
  FaCarBurst,
  FaLocationCrosshairs,
  FaUsb,
  FaGlassWater,
  FaHandDots,
  FaIdCard,
  FaIdCardClip,
  FaLocationDot,
  FaCarRear,
  FaX
} from "react-icons/fa6";
import { BsShieldCheck } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgGirl from "../img/banner1.jpg";
import user from "../img/erenyeager.jpg";

function ContentProduct() {
  const [defaultImage, setDefaultImage] = useState({});
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [showFullComment, setShowFullComment] = useState(Array(reviews.length).fill(false));
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [car, setCar] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [isHidden, setIsHidden] = useState(true);
  const [fullName, setFullName] = useState('');
  const [avatar, setAvatar] = useState(null);


  const openModal = (image) => {
    setModalOpen(true);
    setOverlayOpacity(1);
  };

  const closeModal = () => {
    setModalOpen(false);
    setOverlayOpacity(0);
  };
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [id]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const accessToken = localStorage.getItem("accessToken");
      const userId = localStorage.getItem("userId");
      const response = await axios.post(
        "http://localhost:5000/reviews",
        {
          userId,
          carId: id,
          rating: rating,
          reviewText: reviewText,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      window.location.reload();
      console.log("Review submitted:", response.data);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {

      axios.get('http://localhost:5000/getProfile', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          setAvatar(response.data.user.avatar);
          setFullName(response.data.user.fullName);
        })
        .catch((error) => {
          console.error('Lỗi :', error);

        });
    }
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-car/${id}`)
      .then((response) => {
        setCar(response.data.car);
      })
      .catch((error) => {
        console.error("Lỗi:", error);
      });
  }, [id]);

  if (!car) {
    return <div>Dang tai...</div>;
  }
  const contactproduct__tablet = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    style: { display: "none" },
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          style: { display: "block" },
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          style: { display: "block" },
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          style: { display: "block" },
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          style: { display: "block" },
        },
      },
    ],
  };
  // ảnh xe trên cùng
  const dataImageCar = [
    {
      id: 1,
      img: car.imagePath,
    },
    {
      id: 2,
      img: car.image1,
    },
    {
      id: 3,
      img: car.image2,
    },
    {
      id: 4,
      img: car.image3,
    },
  ];
  // ảnh xe tương tự ở dưới cùng
  const car__slider = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    row: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
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
  const dataCarSlider = [
    {
      id: 1,
      tax: "Đặt xe nhanh",
      flash: "Miễn thế chấp",
      number: "Số tự động",
      title: "VINFAST LUX SA 2.0 2021",
      location: "Quận 7, Hồ Chí Minh",
      start: "5.0",
      usage: "75 chuyến",
      price: "800k",
      userImg: user,
      linkImg: car.imagePath,
    },
    {
      id: 2,
      tax: "Đặt xe nhanh",
      flash: "Miễn thế chấp",
      number: "Số tự động",
      title: "VINFAST LUX SA 2.0 2021",
      location: "Quận 7, Hồ Chí Minh",
      start: "5.0",
      usage: "75 chuyến",
      price: "800k",
      userImg: user,
      linkImg: car.imagePath,
    },
  ];
  // Xe yêu thích
  const handleIconClick = () => {
    // Thay đổi màu nền khi người dùng nhấn vào biểu tượng
    setBackgroundColor("red"); // Thay đổi màu nền theo ý muốn của bạn
  };
  // Đánh giá sao
  const rate = (starNumber) => {
    setRating(starNumber);
  };
  //hàm hiển thị bình luận
  const toggleComment = (index) => {
    const newCommentStates = [...showFullComment];
    newCommentStates[index] = !newCommentStates[index];
    setShowFullComment(newCommentStates);
  };
  // hàm hiển thị xem thêm điều khoản
  const toggleContent = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="contentproduct">
      <div className="contentproduct__img">
        <div className="contentproduct__img-main">
          <img src={car.imagePath} alt={car.title}></img>
        </div>
        <div className="contentproduct__img-list">
          <img
            src={car.image1}
            alt=""
            className="contentproduct__img-list-child"
          />
          <img
            src={car.image2}
            alt=""
            className="contentproduct__img-list-child"
          />
          <img
            src={car.image3}
            alt=""
            className="contentproduct__img-list-child"
          />
        </div>
      </div>
      <Slider
        {...contactproduct__tablet}
        className="contentproduct__img-tablet"
      >
        {dataImageCar.map((item) => (
          <img src={item.img} className="contentproduct-imgtablet-img"></img>
        ))}
      </Slider>
      <div className="contentproduct__detail">
        <div className="contentproduct__detail-container">
          <div className="contentproduct__detail-container-name">
            <div className="group-name">
              <h3>{car.title}</h3>
              <div className="group-icon">
                <i>
                  <FaShareNodes></FaShareNodes>
                </i>
                <i>
                  <FaHeart></FaHeart>
                </i>
              </div>
            </div>
            <div className="group-total">
              <div className="group-total-star">
                <i>
                  <FaStar></FaStar>
                </i>
                <span>{car.rate}</span>
              </div>
              <div className="group-total-trip">
                <i>
                  <FaFax></FaFax>
                </i>
                <span>{car.location}</span>
              </div>
            </div>
            <div className="group-tag">
              <span className="group-tag-transmission tag-item">
                {" "}
                Số tự động
              </span>
              <span className="group-tag-delivery tag-item">
                {" "}
                Giao xe tận nơi
              </span>
              <span className="group-tag-instant tag-item">Đặt xe nhanh</span>
            </div>
          </div>
          <div className="line-page"></div>
          <div className="contentproduct__detail-sidebar-tablet">
            <div className="contentproduct__detail-sidebar-insurance">
              <i>
                <FaShield></FaShield>
              </i>
              <Link to ="/bao-hiem" className="contentproduct__detail-sidebar-insurance-content">
                <h3>Bảo hiểm thuê xe MIC</h3>
                <span>Xem chi tiết</span>
              </Link>
            </div>
            <div className="contentproduct__detail-sidebar-cardetail">
              <div className="price">
                <h4>{car.price}/ngày</h4>
              </div>
              <div className="date-time-form">
                <div className="form-item">
                  <label>Nhận xe</label>
                  <div className="wrap-date-time">
                    <div className="wrap-date">
                      <span className="value">30/10/2023</span>
                    </div>
                    <div className="wrap-time">
                      <span className="value">20:00</span>
                    </div>
                  </div>
                </div>
                <div className="line"></div>
                <div className="form-item">
                  <label>Trả xe</label>
                  <div className="wrap-date-time">
                    <div className="wrap-date">
                      <span className="value">31/10/2023</span>
                    </div>
                    <div className="wrap-time">
                      <span className="value">22:00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown-form">
                <label>Địa điểm giao nhận xe</label>
                <div className="wrap-form">
                  <span className="value">{car.location}</span>
                </div>
              </div>
              <div className="line-page"></div>
              <div className="price-container">
                <div className="price-item">
                  <p className="df-align-center">
                    Đơn giá thuê xe
                    <span className="tooltip">
                      <i className="df-align-center-icon">
                        {" "}
                        <FaQuestion></FaQuestion>
                      </i>
                      <span className="df-align-center-tooltip-text">
                        Giá thuê xe được tính theo ngày, thời gian thuê ít hơn
                        24 tiếng sẽ được tính tròn 1 ngày <br />
                        Giá thuê xe không bao gồm tiền xăng. Khi kết thúc chuyến
                        đi, bạn vui lòng đổ xăng về lại mức ban đầu như khi nhận
                        xe
                      </span>
                    </span>
                  </p>
                  <p className="cost">
                    <span>{car.price}/ ngày</span>
                  </p>
                </div>
                <div className="price-item">
                  <p className="df-align-center">
                    Phí dịch vụ
                    <span className="tooltip">
                      <i className="df-align-center-icon">
                        {" "}
                        <FaQuestion></FaQuestion>
                      </i>
                      <span className="df-align-center-tooltip-text">
                        Phí dịch vụ giúp chúng tôi duy trì và phát triển dịch vụ
                        trên ưng dụng Mioto
                      </span>
                    </span>
                  </p>
                  <p className="cost">
                    <span>122 500đ/ ngày</span>
                  </p>
                </div>
                <div className="price-item">
                  <p className="df-align-center">
                    Phí bảo hiểm
                    <span className="tooltip">
                      <i className="df-align-center-icon">
                        {" "}
                        <FaQuestion></FaQuestion>
                      </i>
                      <span className="df-align-center-tooltip-text">
                        Chuyến đi của bạn được mua gói bảo hiểm vật chất xe ô
                        tô. Trường hợp có sự cố ngoài ý muốn (trong phạm vi bảo
                        hiểm), số tiền bạn thanh toán tối đa là 2.000.000
                        đồng/vụ (không bao gồm các trường hợp giảm trừ bồi
                        thường theo quy tắc bảo hiểm)
                      </span>
                    </span>
                  </p>
                  <p className="cost">
                    <span>125 000đ/ ngày</span>
                  </p>
                </div>
                <div className="line-page"></div>
                <div className="price-item">
                  <p className="df-align-center">Tổng phí thuê xe</p>
                  <p className="cost">
                    <span>1 225 000đ * 1ngày</span>
                  </p>
                </div>
                <div className="promoion">
                  <i className="promoion-icon">
                    <FaCalendarMinus></FaCalendarMinus>
                  </i>
                  <p className="promotion-text">Sử dụng khuyến mãi</p>
                </div>
                <div className="line-page"></div>
                <div className="price-item price-content-total">
                  <p className="df-align-center">Tổng phí thuê xe</p>
                  <p className="cost">
                    <span>1 225 000đ * 1ngày</span>
                  </p>
                </div>
                <button className="btn__large price-container-button">
                  <i>
                    <FaCircleCheck></FaCircleCheck>
                  </i>
                  <h3>Chọn Thuê</h3>
                </button>
              </div>
              <div className="surcharge">
                <p class="title text-primary">Phụ phí có thể phát sinh</p>
                <div className="surcharge-container">
                  <div className="surcharge-item">
                    <i>
                      <FaCircleExclamation></FaCircleExclamation>
                    </i>
                    <div className="surcharge-item-content">
                      <div className="surcharge-item-content-item">
                        <p>Phí vượt giới hạn</p>
                        <span>5.000đ/km</span>
                      </div>
                      <div className="surcharge-item-contnent-item">
                        <p>
                          Phụ phí phát sinh khi lộ trình vượt quá 3000km khi
                          thuê xe 1 ngày
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="surcharge-container">
                  <div className="surcharge-item">
                    <i>
                      <FaCircleExclamation></FaCircleExclamation>
                    </i>
                    <div className="surcharge-item-content">
                      <div className="surcharge-item-content-item">
                        <p>Phí quá giờ</p>
                        <span>120.000đ/h</span>
                      </div>
                      <div className="surcharge-item-contnent-item">
                        <p>
                          Phụ phí phát sinh nếu hoàn trả xe trễ giờ. Trường hợp
                          trễ quá 5 tiếng, phụ phí thêm 1 ngày thuê
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="surcharge-container">
                  <div className="surcharge-item">
                    <i>
                      <FaCircleExclamation></FaCircleExclamation>
                    </i>
                    <div className="surcharge-item-content">
                      <div className="surcharge-item-content-item">
                        <p>Phí vệ sinh</p>
                        <span>100 000đ</span>
                      </div>
                      <div className="surcharge-item-contnent-item">
                        <p>
                          Phụ phí phát sinh khi xe hoàn trả không đảm bảo vệ
                          sinh (nhiều vết bẩn, bùn cát, sình lầy...)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="report" onClick={openModal}>
                <i>
                  <FaFlag></FaFlag>
                </i>
                <p>Báo cáo xe này</p>
              </div>
            </div>
          </div>
          <div className="contentproduct__detail-container-content">
            <div className="contentproduct__detail-container-content-info-cardesc">
              <h6> Đặc điểm</h6>
              <div className="outstanding-features">
                <div className="outstanding-features-item">
                  <i>
                    <FaChair></FaChair>
                  </i>
                  <div className="title">
                    <p className="sub">Số ghế</p>
                    <p className="main">{car.chair} chỗ</p>
                  </div>
                </div>
                <div className="outstanding-features-item">
                  <i>
                    <FaMendeley></FaMendeley>
                  </i>
                  <div className="title">
                    <p className="sub">Truyền động</p>
                    <p className="main">Số tự động</p>
                  </div>
                </div>
                <div className="outstanding-features-item">
                  <i>
                    <FaChargingStation></FaChargingStation>
                  </i>
                  <div className="title">
                    <p className="sub">Nhiên liệu</p>
                    <p className="main">{car.fuel}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="line-page"></div>
            <div className="contentproduct__detail-container-content-describe">
              <h6>Mô Tả</h6>
              <p>{car.description}</p>
            </div>
            <div className="line-page"></div>
            <div className="contentproduct__detail-container-content-convenient">
              <h6>Các tiện nghi khác</h6>
              <div className="features-car">
                <ul>
                  <li>
                    <i>
                      <FaBluetoothB></FaBluetoothB>
                    </i>
                    <span>Blutooth</span>
                  </li>
                  <li>
                    <i>
                      <FaCamera></FaCamera>
                    </i>
                    <span>Camera hành trình</span>
                  </li>
                  <li>
                    <i>
                      <FaCameraRetro></FaCameraRetro>
                    </i>
                    <span>Camera lùi</span>
                  </li>
                  <li>
                    <i>
                      <FaBullseye></FaBullseye>
                    </i>
                    <span>Cảm biến lốp</span>
                  </li>
                  <li>
                    <i>
                      <FaCarBurst></FaCarBurst>
                    </i>
                    <span>Cảm biến va chạm</span>
                  </li>
                  <li>
                    <i>
                      <FaLocationCrosshairs></FaLocationCrosshairs>
                    </i>
                    <span>Định vị GPS</span>
                  </li>
                  <li>
                    <i>
                      <FaUsb></FaUsb>
                    </i>
                    <span>Khe cắm USB</span>
                  </li>
                  <li>
                    <i>
                      <FaGlassWater></FaGlassWater>
                    </i>
                    <span>ETC</span>
                  </li>
                  <li>
                    <i>
                      <FaHandDots></FaHandDots>
                    </i>
                    <span>Túi khí an toàn</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="line-page"></div>
            <div className="contentproduct__detail-container-content-papers">
              <h6>Giấy tờ thuê xe</h6>
              <div className="required-papers">
                <div className="required-papers-item">
                  <i></i> <span>Chọn 1 trong 2 hình thức</span>
                </div>
                <div className="required-papers-item">
                  <i>
                    <FaIdCard></FaIdCard>
                  </i>{" "}
                  <span>GPLX & CCCD gắn chíp (đối chiếu)</span>
                </div>
                <div className="required-papers-item">
                  <i>
                    <FaIdCardClip></FaIdCardClip>
                  </i>{" "}
                  <span>GPLX (đối chiếu) & Passport(giữ lại)</span>
                </div>
              </div>
            </div>
            <div className="contentproduct__detail-container-content-mortgage">
              <h6>Tài sản thế chấp</h6>
              <div className="required-papers">
                <p>
                  15 triệu (tiền mặt/ chuyển khoản cho chủ xe khi nhận xe) hoặc
                  Xe máy (kèm cà vẹt gốc) giá trị 15 triệu
                </p>
              </div>
            </div>
            <div className="contentproduct__detail-container-content-rules">
              <h6>Điều khoản</h6>
              <p  className={isHidden ? 'hide' : ''}>
                Quy định khác: <br />
                ◦ Sử dụng xe đúng mục đích. <br />
                ◦ Không sử dụng xe thuê vào mục đích phi pháp, trái pháp luật.{" "}
                <br />
                ◦ Không sử dụng xe thuê để cầm cố, thế chấp. <br />
                ◦ Không hút thuốc, nhả kẹo cao su, xả rác trong xe. <br />
                ◦ Không chở hàng quốc cấm dễ cháy nổ. <br />
                ◦ Không chở hoa quả, thực phẩm nặng mùi trong xe. <br />
                ◦ Khi trả xe, nếu xe bẩn hoặc có mùi trong xe, khách hàng vui
                lòng vệ sinh xe sạch sẽ hoặc gửi phụ thu phí vệ sinh xe. <br />
                Trân trọng cảm ơn, chúc quý khách hàng có những chuyến đi tuyệt
                vời !
              </p>
              <p className="read-more" onClick={toggleContent}>
              {isHidden ? 'Xem thêm' : 'Ẩn đi'}
              </p>
            </div>
            <form className="contentproduct__evaluate" onSubmit={handleSubmit}>
              <h3>Đánh giá</h3>
              <div className="comment">
                <input
                  type="text"
                  placeholder="Hãy nhập bình luận"
                  className="comment__input"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                />
              </div>
              <div className="clickstart" id="clickstart">
                {[1, 2, 3, 4, 5].map((starNumber) => (
                  <span
                    key={starNumber}
                    className={`clickstart__star ${starNumber <= rating ? "active" : ""
                      }`}
                    onClick={() => rate(starNumber)}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <button type="submit" className="contentproduct__evaluate-button">
                Gửi
              </button>
            </form>
            <div className="line-page"></div>
            <div className="contentproduct__detail-container-content-evaluate">
              <div className="review">
                <i>
                  <FaStar></FaStar>
                </i>{" "}
                5.0 <span> 1 đánh giá</span>
              </div>
              <div className="list-reviews">
                {reviews.map((review, index) => (
                  <div className="list-reviews-item" key={index}>
                    <div className="list-reviews-item-firt">
                      <div className="list-reviews-item-firt-avt">
                        <img
                          className="list-reviews-item-img"
                          src={avatar}
                          alt={fullName}
                        />
                        <div className="list-reviews-item-name" key={index}>
                          <h6>{fullName}</h6>
                          <div className="list-reviews-item-name-star">
                            {Array.from({ length: review.rating }, (_, i) => (
                              <i key={i}>
                                <FaStar />
                              </i>
                            ))}

                          </div>
                        </div>
                      </div>

                      <div className="list-reviews-item-cmt" key={index}>
                        <div className={`list-reviews-item-name-cmt ${showFullComment[index] ? 'full-comment' : ''}`}>
                          <h3>{review.reviewText}</h3>
                          {!showFullComment[index] && review.reviewText.length > 150 && (<div className="show-more" onClick={() => toggleComment(index)}>hiển thị thêm</div>
                          )}
                          {showFullComment[index] && (
                            <div className="none-more" onClick={() => toggleComment(index)}>
                              Ẩn
                            </div>
                          )}
                        </div>
                      </div>

                    </div>
                    <p>{review.createdAt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="contentproduct__detail-sidebar">
          <div className="contentproduct__detail-sidebar-insurance">
            <i>
              <FaShield></FaShield>
            </i>
            <Link to="/bao-hiem" className="contentproduct__detail-sidebar-insurance-content">
              <h3>Bảo hiểm thuê xe MIC</h3>
              <span>Xem chi tiết</span>
            </Link>
          </div>
          <div className="contentproduct__detail-sidebar-cardetail">
            <div className="price">
              <h4>{car.price}/ngày</h4>
            </div>
            <div className="date-time-form">
              <div className="form-item">
                <label>Nhận xe</label>
                <div className="wrap-date-time">
                  <div className="wrap-date">
                    <span className="value">30/10/2023</span>
                  </div>
                  <div className="wrap-time">
                    <span className="value">20:00</span>
                  </div>
                </div>
              </div>
              <div className="line"></div>
              <div className="form-item">
                <label>Trả xe</label>
                <div className="wrap-date-time">
                  <div className="wrap-date">
                    <span className="value">31/10/2023</span>
                  </div>
                  <div className="wrap-time">
                    <span className="value">22:00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown-form">
              <label></label>
              <div className="wrap-form">
                <span className="value">{car.location}</span>
              </div>
            </div>
            <div className="line-page"></div>
            <div className="price-container">
              <div className="price-item">
                <p className="df-align-center">
                  Đơn giá thuê xe
                  <span className="tooltip">
                    <i className="df-align-center-icon">
                      {" "}
                      <FaQuestion></FaQuestion>
                    </i>
                    <span className="df-align-center-tooltip-text">
                      Giá thuê xe được tính theo ngày, thời gian thuê ít hơn 24
                      tiếng sẽ được tính tròn 1 ngày <br />
                      Giá thuê xe không bao gồm tiền xăng. Khi kết thúc chuyến
                      đi, bạn vui lòng đổ xăng về lại mức ban đầu như khi nhận
                      xe
                    </span>
                  </span>
                </p>
                <p className="cost">
                  <span>{car.price}/ ngày</span>
                </p>
              </div>
              <div className="price-item">
                <p className="df-align-center">
                  Phí dịch vụ
                  <span className="tooltip">
                    <i className="df-align-center-icon">
                      {" "}
                      <FaQuestion></FaQuestion>
                    </i>
                    <span className="df-align-center-tooltip-text">
                      Phí dịch vụ giúp chúng tôi duy trì và phát triển dịch vụ
                      trên ưng dụng Mioto
                    </span>
                  </span>
                </p>
                <p className="cost">
                  <span>122 500đ/ ngày</span>
                </p>
              </div>
              <div className="price-item">
                <p className="df-align-center">
                  Phí bảo hiểm
                  <span className="tooltip">
                    <i className="df-align-center-icon">
                      {" "}
                      <FaQuestion></FaQuestion>
                    </i>
                    <span className="df-align-center-tooltip-text">
                      Chuyến đi của bạn được mua gói bảo hiểm vật chất xe ô tô.
                      Trường hợp có sự cố ngoài ý muốn (trong phạm vi bảo hiểm),
                      số tiền bạn thanh toán tối đa là 2.000.000 đồng/vụ (không
                      bao gồm các trường hợp giảm trừ bồi thường theo quy tắc
                      bảo hiểm)
                    </span>
                  </span>
                </p>
                <p className="cost">
                  <span>125 000đ/ ngày</span>
                </p>
              </div>
              <div className="line-page"></div>
              <div className="price-item">
                <p className="df-align-center">Tổng phí thuê xe</p>
                <p className="cost">
                  <span>1 225 000đ * 1ngày</span>
                </p>
              </div>
              <div className="promoion">
                <i className="promoion-icon">
                  <FaCalendarMinus></FaCalendarMinus>
                </i>
                <p className="promotion-text">Sử dụng khuyến mãi</p>
              </div>
              <div className="line-page"></div>
              <div className="price-item price-content-total">
                <p className="df-align-center">Tổng phí thuê xe</p>
                <p className="cost">
                  <span>1 225 000đ * 1ngày</span>
                </p>
              </div>
              <Link to="/thanh-toan">
                <button className="btn__large price-container-button">
                  <i>
                    <FaCircleCheck></FaCircleCheck>
                  </i>
                  <h3>Chọn Thuê</h3>
                </button>
              </Link>
            </div>
            <div className="surcharge">
              <p class="title text-primary">Phụ phí có thể phát sinh</p>
              <div className="surcharge-container">
                <div className="surcharge-item">
                  <i>
                    <FaCircleExclamation></FaCircleExclamation>
                  </i>
                  <div className="surcharge-item-content">
                    <div className="surcharge-item-content-item">
                      <p>Phí vượt giới hạn</p>
                      <span>5.000đ/km</span>
                    </div>
                    <div className="surcharge-item-contnent-item">
                      <p>
                        Phụ phí phát sinh khi lộ trình vượt quá 3000km khi thuê
                        xe 1 ngày
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="surcharge-container">
                <div className="surcharge-item">
                  <i>
                    <FaCircleExclamation></FaCircleExclamation>
                  </i>
                  <div className="surcharge-item-content">
                    <div className="surcharge-item-content-item">
                      <p>Phí quá giờ</p>
                      <span>120.000đ/h</span>
                    </div>
                    <div className="surcharge-item-contnent-item">
                      <p>
                        Phụ phí phát sinh nếu hoàn trả xe trễ giờ. Trường hợp
                        trễ quá 5 tiếng, phụ phí thêm 1 ngày thuê
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="surcharge-container">
                <div className="surcharge-item">
                  <i>
                    <FaCircleExclamation></FaCircleExclamation>
                  </i>
                  <div className="surcharge-item-content">
                    <div className="surcharge-item-content-item">
                      <p>Phí vệ sinh</p>
                      <span>100 000đ</span>
                    </div>
                    <div className="surcharge-item-contnent-item">
                      <p>
                        Phụ phí phát sinh khi xe hoàn trả không đảm bảo vệ sinh
                        (nhiều vết bẩn, bùn cát, sình lầy...)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="report" onClick={openModal}>
              <i>
                <FaFlag></FaFlag>
              </i>
              <p>Báo cáo xe này</p>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="report__overlay" onClick={closeModal} style={{ opacity: overlayOpacity }}>
          <form className="report__form" onClick={(e) => e.stopPropagation()}>
            <span className="report__form-close" onClick={closeModal}>
              <FaX />
            </span>
            <h3 className="report__form-title">Báo Xấu</h3>
            <div className="report__form-email">
              <h3 className="report__form-email-text">
                Email
              </h3>
              <input className="report__form-email-input" type="email" placeholder="Vui lòng nhập địa chỉ email của bạn" />
            </div>
            <div className="report__form-content">
              <h3 className="report__form-content-text">
                Vui lòng nhập báo cáo
              </h3>
              <textarea className="report__form-content-input" type="text" placeholder="Vui lòng nhập lý do hoặc lời nhắn" />
            </div>
            <button className="report__form-button">
              <h3 className="report__form-button-text">Báo cáo</h3>
            </button>
          </form>
        </div>
      )}
      <div className="contentproduct__other">
        <h2>Xe tương tự</h2>
        <Slider {...car__slider}>
          {dataCarSlider.map((item) => (
            <Link>
              <div key={item.id} className="contentproduct__other-child">
                <div className="contentproduct__other-child-top">
                  <img
                    key={item.id}
                    src={
                      defaultImage[item.title] === item.title
                        ? defaultImage.linkDefault
                        : item.linkImg
                    }
                    alt={item.title}
                    onError={handleErrorImage}
                  />
                  <div className="absolute__heart" style={{ backgroundColor }}>
                    <i onClick={handleIconClick}>
                      <FaHeart />
                    </i>
                  </div>
                  <div className="absolute__user">
                    <img src={item.userImg} alt="" />
                  </div>
                </div>
                <div className="contentproduct__other-child-bottom">
                  <div className="contentproduct__other-child-auto">
                    <div className="contentproduct__other-child-auto-car btn__auto">
                      <p className="contentproduct__other-child-auto-car-text">
                        {" "}
                        {item.number}
                      </p>
                    </div>
                  </div>
                  <div className="contentproduct__other-child-name">
                    <h1 className="contentproduct__other-child-name-main">
                      {" "}
                      <h3>{item.title}</h3>
                    </h1>
                    <i>
                      <BsShieldCheck></BsShieldCheck>
                    </i>
                  </div>
                  <div className="contentproduct__other-child-location">
                    <i>
                      <FaLocationDot></FaLocationDot>
                    </i>
                    <p className="contentproduct__other-child-location-text">
                      {item.location}
                    </p>
                  </div>
                  <div className="contentproduct__other-child-underlined">
                    {" "}
                  </div>
                  <div className="contentproduct__other-child-detail">
                    <div className="contentproduct__other-child-detail-evaluate">
                      <div className="contentproduct__other-child-detail-evaluate-star">
                        <i>
                          <FaStar></FaStar>
                        </i>
                        <p className="contentproduct__other-child-detail-evaluate-star-text">
                          {item.start}
                        </p>
                      </div>
                      <div className="contentproduct__other-child-detail-evaluate-usage">
                        <i>
                          <FaCarRear></FaCarRear>
                        </i>
                        <p className="contentproduct__other-child-detail-evaluate-usage-text">
                          {item.usage}
                        </p>
                      </div>
                    </div>
                    <div className="contentproduct__other-child-detail-buy">
                      <span className="contentproduct__other-child-detail-buy-sale">
                        {item.price}
                      </span>
                      {/* <p className='contentproduct__other-child-detail-buy-day'>
              <span>Giá tổng</span> 1800k
            </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ContentProduct;
