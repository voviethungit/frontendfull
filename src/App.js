import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './viewtest/Home/Main';
import MainUser from './viewtest/User/MainUser';
import MainAbout from './viewtest/About/MainAbout';
import ListBlog from './viewtest/Home/ListBlog/ListBlog';
import ListBlog1 from './viewtest/Home/ListBlog/ListBlog1';
import ListBlog2 from './viewtest/Home/ListBlog/ListBlog2';
import ListBlog3 from './viewtest/Home/ListBlog/ListBlog3';
import MainProduct from './viewtest/Home/Product/MainProduct';
import MainLogin from './viewtest/Home/Login_Register/MainLogin';
import MainRegister from './viewtest/Home/Login_Register/MainRegister';
import Forgotpasword from './viewtest/Home/Login_Register/Forgotpasword.jsx';
import Myfavs from './viewtest/User/Myfavs';
import UserInfor from './viewtest/User/UserInfor';
import Mycars from './viewtest/User/Mycars';
import Myreward from './viewtest/User/Myreward';
import Mytrips from './viewtest/User/Mytrips';
import Resetpw from './viewtest/User/Resetpw';
import Navbarmobile from './viewtest/User/Navbarmobile';
import Myaddress from './viewtest/User/Myaddress.jsx'
import Maintrip from './viewtest/Home/Trip/Maintrip';
import ScrollToTop from './viewtest/Home/Scroptotop';
// Tú Footer
import Policy from './viewtest/Home/Policy/Policy';
import Terms from './viewtest/Home/Policy/Terms';
import Personalinfo from './viewtest/Home/Policy/Personalinfo';
import Resolveconflic from './viewtest/Home/Policy/Resolveconflic';
// Tiến Footer
import Mainhowto from './viewtest/Home/howtowork/Mainhowto';
import Booking from './viewtest/Home/howtowork/Booking';
import Paymenthowto from './viewtest/Home/howtowork/Paymenthowto';
import Regu from './viewtest/Home/howtowork/Regu';
// Địa điểm xe nổi bật
import Mainlocation from './viewtest/Home/Location/Mainlocation';
// Nạp tiền
import PayLive from './viewtest/Pay/PayLive';
// 404 NOT FOUND
import NotFound from './viewtest/Home/NotFound.jsx';
import SuccessPassword from './viewtest/Home/Login_Register/SuccessPassword.jsx';
// Thanh toán
import Pay from './viewtest/Pay/Pay.jsx';
import SuccessPage from './viewtest/Pay/SuccessPage'
// import { HelmetProvider } from 'react-helmet';
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/nguoi-dung' element={<MainUser />} />
          <Route path='/ve-xe-tot' element={<MainAbout />} />
          <Route path='/bai-viet' element={<ListBlog />} />
          <Route path='/bai-viet1' element={<ListBlog1 />} />
          <Route path='/bai-viet2' element={<ListBlog2 />} />
          <Route path='/bai-viet3' element={<ListBlog3 />} />
          <Route path='/san-pham/:id' element={<MainProduct />} />
          <Route path='/dang-nhap' element={<MainLogin />} />
          <Route path='/dang-ky' element={<MainRegister />} />
          <Route path='/dang-nhap/quen-mat-khau' element={<Forgotpasword />} />
          <Route path='/UserInfor' element={<UserInfor />} />
          <Route path='/xe-yeu-thich' element={<Myfavs />} />
          <Route path='/chuyen-di-cua-toi' element={<Mytrips />} />
          <Route path='/vi-cua-toi' element={<Mycars />} />
          <Route path='/qua-tang-cua-toi' element={<Myreward />} />
          <Route path='/dia-chi-cua-toi' element={<Myaddress />} />
          <Route path='/doi-mat-khau' element={<Resetpw />} />
          <Route path='/Navbarmobile' element={<Navbarmobile />} />
          <Route path='/bao-hiem' element={<Maintrip />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/perso' element={<Personalinfo />} />
          <Route path='/resolve' element={<Resolveconflic />} />
          <Route path='/mainhow' element={<Mainhowto />} />
          <Route path='/book' element={<Booking />} />
          <Route path='/paymen' element={<Paymenthowto />} />
          <Route path='/regu' element={<Regu />} />
          <Route path='/dia-diem/:id' element={<Mainlocation />} />
          <Route path='/nap-tien' element={<PayLive />} />
          <Route path='/thanh-toan/:id' element={<Pay />} />
          <Route path='/success' element={<SuccessPage />} />
          <Route path='/reset-password/:token' element={<SuccessPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

