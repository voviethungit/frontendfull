import "./css/base.css";
import "./css/sale.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaX } from "react-icons/fa6";

function Sale() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedTitle1, setSelectedTitle1] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedContent1, setSelectedContent1] = useState(null);
  const [selectedContent2, setSelectedContent2] = useState(null);
  const [selectedContent3, setSelectedContent3] = useState(null);
  const [selectedContent4, setSelectedContent4] = useState(null);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modalOpen]);
  const openModal = (image, title, title1, content,content1,content2,content3,content4) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setSelectedTitle1(title1);
    setSelectedContent(content);
    setSelectedContent1(content1);
    setSelectedContent2(content2);
    setSelectedContent3(content3);
    setSelectedContent4(content4);

    setModalOpen(true);
    setOverlayOpacity(1);
  };

  const closeModal = () => {
    setModalOpen(false);
    setOverlayOpacity(0);
  };
  const handleScroll = (e) => {
    const element = e.target;
    setIsScrollable(element.scrollHeight > element.clientHeight);
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0, // thể hiện hình ảnh 3 (0,1,2)
          // infinite: true,
          dots: true,
        },
      },
      // {
      //     breakpoint: 740,
      //     settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //         infinite: true,
      //         dots: true,
      //     },
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2, // thể hiện hình ảnh 3 (0,1,2)
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
  const dataDigitalBestSeller = [
    {
      id: 1,
      linkImg: "https://n1-cstg.mioto.vn/g/2023/11/10/22/BPU1KI6E.jpg",
      title: "🎊 ĐẶT XE SỚM NGAY HÔM NA",
      title1: "CHO DỊP LỄ GIÁNG SINH - TẾT DƯƠNG LỊCH - TẾT ÂM LỊCH",
      content:
        "🚘 Vào các dịp Giáng sinh - Lễ Tết, các mẫu xe 5* được nhiều khách hàng yêu thích trên Xe Tốt bởi dịch vụ tốt & mức giá hợp lí luôn được đặt chỗ sớm và số lượng không còn nhiều khi thuê cận ngày.",
      content1: "👉 Bạn đã có kế hoạch cho những kì nghỉ sắp đến ? Nếu có, hãy đặt sớm ngay hôm nay để giữ chỗ chiếc xe bạn yêu thích với mức giá tốt nhất trên Xe Tốt." ,
      content2: "● Nhập mã NOEL - giảm ngay 180k cho chuyến đi dịp Giáng sinh (23/12/2023 - 24/12/2023), ưu đãi được áp dụng khi đặt cọc trước 20/12/2023." ,
      content3: "● Nhập mã MI24 - giảm ngay 180k cho chuyến đi dịp Tết Dương lịch (31/12/2023 - 01/01/2024), ưu đãi được áp dụng khi đặt cọc trước 27/12/2023." ,
      content4: "Xe Tốt rất mong được đồng hành cùng bạn. Chúc bạn có những chuyến đi thật vui bên cạnh gia đình & bạn bè trong kì nghỉ sắp đến." ,
    },
    {
      id: 2,
      linkImg: "https://n1-tstg.mioto.vn/g/2023/11/01/01/Jgeu43aLkxRz3uh8uSPkYA.jpg",
      title: "🎁 NHẬP MÃ GIANGSINH - NHẬN NGAY ƯU ĐÃI 10% KHI",
      title1: "THUÊ XE TẠI XE TỐT",
      content: "❄️ Giáng Sinh sắp đến gần kề, tạm xa phố thị bộn bề, rủ ngay hội bạn để lên lịch đi chơi đó đây trước khi năm cũ khép lại." ,
      content1: "🎊 Mừng Giáng Sinh sang, Xe Tốt có ưu đãi 10% (tối đa 100k) khi nhập mã GIANGSINH. Ưu đãi được áp dụng đến hết ngày 31/12/2023" ,
      content2: "📲 Ưu đãi đã có, mở app đặt xe ngay!" ,
    },
    {
      id: 3,
      linkImg: "https://n1-tstg.mioto.vn/g/2023/11/01/08/qApvmD6S2TKfZAayuwaT-w.jpg",
      title: "⚡️GIẢM 220K CHO LẦN ĐẦU THUÊ XE 7 CHỖ TẠI XE TỐT ",
      content: "🚘 Cần tìm chân ái để cả nhà mình di chuyển thoải mái? " ,
      content1: "📲 Mở Xe Tốt, thuê ngay xe 7 chỗ rộng rãi. Nhà bao nhiêu người, Xe Tốt cũng chiều đúng ý. ",
      content2: " 🌟 Đặc biệt, Xe Tốt tung ưu đãi giảm 200k cho lần đầu thuê xe 7 chỗ trên ứng dụng.",
      content3: "Ưu đãi được áp dụng đến hết tháng 12. ",
      content4: " 👨‍👩‍👧‍👦 Mở Xe Tốt chớp ngay ưu đãi. Thuê liền xe, rong chơi không cần nghĩ ngợi!",

    },
    {
      id: 4,
      linkImg:
        "https://n1-cstg.mioto.vn/g/2023/10/01/09/dich_vu_thue_xe_tu_lai_tphcm.jpg",
   
        title: "GIẢM NGAY 150K KHI THUÊ XE TẠI XE TỐT 🎁",
        content: "Bạn mới có bằng B2 nên muốn trải nghiệm nhiều dòng xe? Bạn đang phân vân không biết nên chọn xe gì cho phù hợp trước khi quyết định mua xe? Đừng lo, ghé Xe Tốt chọn ngay dòng xe phù hợp để trải nghiệm chân thật nhất. Xe Tốt đa dạng nhiều dòng xe, từ phổ thông tới cao cấp, bạn tha hồ lựa chọn ✨" ,
        content1: "Đặc biệt, giảm 150k khi chọn thuê mini cho lần thuê đầu tiên tại Xe Tốt 💥" ,
        content2: "Mở Xe Tốt có deal xịn. Thuê mini chill đúng ý!" ,
    
    },
    {
      id: 5,
      linkImg:
        "https://n2-tstg.mioto.vn/g/2023/11/01/08/MAOldorMSujP42tdICeyIQ.jpg",
        title: "GIẢM 20% KHI THUÊ XE ĐIỆN TẠI XE TỐT ✨",
        content: " 🚙 Xe điện là lựa chọn hoàn hảo cho tín đồ đam mê công nghệ." ,
        content1: "🔋 Chỉ với một lần sạc cho quãng đường 400km giúp bạn di chuyển dễ dàng khắp các ngõ phố. " ,
        content2: "🎊 Chọn ngay xe điện để thỏa sức trải nghiệm khi Xe Tốt tung ưu đãi giảm 180k cho dòng xe điện trên ứng dụng, ưu đãi được áp dụng đến hết ngày 31/12/2023. " ,
        content3: "📲 Đặt thuê là có xe đến tận cửa, mở app chốt xe ngay! " ,
    },
    {
      id: 6,
      linkImg:
        "https://n2-tstg.mioto.vn/g/2023/11/02/00/sc0dxhsBo9U8G_LdCjPO_A.jpg",
        title: "🎉 NHẬP MÃ MI12 - ƯU ĐÃI 15% KHI THUÊ XE CÓ TÀI TẠ",
        title1: "XE TỐT",
        content: "🌦 Dù nắng dù mưa vẫn có Xe Tốt đón đưa. Với dịch vụ thuê xe có tài tiện lợi, nhanh chóng cùng thủ tục đơn giản. Bạn chỉ cần mở app đặt xe, có Xe Tốt đến đón ngay." ,
        content1: "💥 Nhập mã MI12 - giảm ngay 15% (tối đa 150k) chi phí khi thuê xe có tài tại Xe Tốt. Ưu đãi được áp dụng đến hết 31/12/2023." ,
        content2: "📲 Đặt thuê là có xe đến tận cửa, mở Xe Tốt chốt xe ngay!" ,
    
    },
    {
      id: 7,
      linkImg:
        "https://n1-cstg.mioto.vn/g/2023/11/11/01/WRAFDCZ.jpg",
        title: "  🎁 TIẾT KIỆM 15% CÙNG MÃ CITY KHI THUÊ XE HONDA",
        title1: "CITY TẠI XE TỐT",
        content: "🌟 Mang trên mình một ngoại hình trẻ trung với thiết kế thể thao cùng dàn trang thiết bị hiện đại, Honda City luôn là dòng xe chiếm ưu thế nhất trong phân khúc sedan hạng B. " ,
        content1: "🚗 Với vận hành mượt mà và động cơ chắc chắn, dù di chuyển nội thành hay vùng ngoại ô, Honda City cũng đều đáp ứng." ,
        content2: "💥 Trải nghiệm Honda City - nhận ngay ưu đãi 15% (tối đa 150k)  khi nhập mã CITY. Ưu đãi áp dụng đến hết ngày 17/12/2023." ,
        content3: "📲 Ưu đãi đã có, đặt xe trải nghiệm ngay!" ,
    },

  ];

  return (
    <div className="sale">
      <div className="sale__text">
        <h3>Chương trình khuyến mãi</h3>
        <p>Nhận nhiều ưu đãi từ Xe Tốt</p>
      </div>
      <div className="sale__slider">
        <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <div
              className="sale__slider-container"
              onClick={() =>
                openModal(item.linkImg, item.title, item.title1, item.content, item.content1, item.content2, item.content3, item.content4)
              }
            >
              <div className="sale__slider-container-top">
                <img src={item.linkImg} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {modalOpen && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          style={{ opacity: overlayOpacity }}
        >
          <div className="modall" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>
              <FaX />
            </span>
            <img src={selectedImage} alt="Selected" />
         <div className="modall-content1">
    
            <h1>{selectedTitle}</h1>
            <h1>{selectedTitle1}</h1>

            <p>{selectedContent}</p>
            <p>{selectedContent1}</p>
            <p>{selectedContent2}</p>
            <p>{selectedContent3}</p>
            <p>{selectedContent4}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sale;
