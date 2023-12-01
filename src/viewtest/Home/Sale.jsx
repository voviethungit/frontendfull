import './css/base.css';
import './css/sale.css';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaX } from "react-icons/fa6";

function Sale() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [overlayOpacity, setOverlayOpacity] = useState(0);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
        setOverlayOpacity(1); // Đặt giá trị opacity thành 1 khi mở modal   
    };

    const closeModal = () => {
        setModalOpen(false);
        setOverlayOpacity(0); // Đặt giá trị opacity thành 0 khi đóng modal
    };
    const settings = {
        dots: true,  // thể hiện chấm nhỏ dưới slide
        infinite: false, // slide cuối + click = slide đầu (false)
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
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/01/08/26AFULG2.jpg',
        },
        {
            id: 2,
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/01/10/2NTDDMBQ.jpg',
        },
        {
            id: 3,
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/01/09/25F448Y1.jpg',
        },
        {
            id: 4,
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/01/09/dich_vu_thue_xe_tu_lai_tphcm.jpg',
        },
        {
            id: 5,
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/01/10/thue_xe_tu_lai_4_cho_tphcm.jpg',
        },
        {
            id: 6,
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/01/10/thue_xe_co_tai_xe_tphcm.jpg',
        },
        {
            id: 7,
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/02/08/thue_xe_tu_lai_7_cho_tphcm.jpg',
        },
        {
            id: 8,
            linkImg:
                'https://n1-cstg.mioto.vn/g/2023/10/06/01/H4831UA9.jpg',
        },
    ];

    return (
        <div className='sale'>
            <div className='sale__text'>
                <h3>Chương trình khuyến mãi</h3>
                <p>Nhận nhiều ưu đãi từ Mioto</p>
            </div>
            <div className="sale__slider">
                <Slider {...settings}>
                    {dataDigitalBestSeller.map((item) => (
                        <div className="sale__slider-container"  onClick={() => openModal(item.linkImg)}>
                            <div className="sale__slider-container-top">
                                <img
                                    src={
                                        item.linkImg
                                    }
                                    alt={item.title}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {modalOpen && (
                <div className="modal-overlay" onClick={closeModal} style={{ opacity: overlayOpacity }}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <span className="modal-close" onClick={closeModal}>
                            <FaX/>
                        </span>
                        <img src={selectedImage} alt="Selected" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Sale;
