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
const ListBlog3 = () => {
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
        {
            id: 3,
            time: '12-8-2023',
            title: 'Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH 2/9 bằng việc thuê xe',
            linkImg: anh3,
            linkTo: '/listblog2'
        },
        // {
        //     id: 4,
        //     time: '12-8-2023',
        //     title: 'Khám phá ĐÀ NẴNG vào lễ QUỐC KHÁNH 2/9 bằng việc thuê xe',
        //     linkImg: anh4,
        //     linkTo: '/listblog3'
        // },
    ];
    const handleImageClick = (linkTo) => {
        if (linkTo) {
            window.location.href = linkTo;
        }
    };
    return (
        <div className="main__listblog3">
            <Header />
            <div className="blog__chill">
                <div className="blog_detail_main">
                    <img
                        src="https://n1-cstg.mioto.vn/g/2023/06/19/16/1M6Y1MV1.jpg"
                        alt=""
                    />
                </div>
                <div className="blog_detail_content">
                    <div className="main_content">
                        <div className="group-tag">
                            <span className="info info-bg">Trải nghiệm</span>
                        </div>
                        <h2>Nên Lựa Chọn Xe Số Sàn Hay Số Tự Động, Kinh Nghiệm Dành Cho Lái Mới Hoặc Mua Xe Lần Đầu?</h2>
                        <div className="contant">
                            <p>
                                Khi tìm hiểu về mua một chiếc xe mới, một câu hỏi phổ biến khi người mua thường gặp phải là liệu nên chọn xe số sàn hay số tự động. Cũng như đối với lái mới, quyết định này có thể đáng ngại và khó khăn. Dưới đây là một số ưu điểm và nhược điểm của cả hai loại xe, giúp bạn có được cái nhìn tổng quan để đưa ra quyết định phù hợp với nhu cầu của mình.
                            </p>

                            <h3>Xe ô tô số sàn</h3>
                            <p>
                                Xe ô tô số sàn, còn được gọi là xe ô tô cơ bản hay xe ô tô sử dụng hộp số cơ khí, là một loại xe có hộp số cơ bản được điều khiển bằng cách sử dụng côn và phanh chân. Trong khi công nghệ hộp số tự động đang ngày càng phổ biến. Vậy ô tô số sàn có những ưu & nhược điểm gì? Hãy cùng Mioto tìm hiểu nhé!
                            </p>

                            <h3 className="font-size2">Ưu điểm của xe số sàn</h3>

                            <p>
                                Tính kiểm soát cao: Xe số sàn cho phép người lái hoàn toàn kiểm soát chiếc xe. Người lái có thể chọn cách chuyển số tốt nhất dựa vào tốc độ, địa hình và điều kiện giao thông, giúp giữ cho xe luôn trong tình trạng tốt nhất. <br></br>
                                Tiết kiệm nhiên liệu: Xe số sàn thường đơn giản hơn về cấu trúc so với xe số tự động, do đó nó tiêu thụ ít nhiên liệu hơn. Điều này đồng nghĩa với việc giảm thiểu chi phí vận hành và tiết kiệm tiền cho người sử dụng.
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
                <div className='slide-container'>
                    <h1> Bài viết liên quan</h1>
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
            <Footer />
        </div>
    );
};

export default ListBlog3;
