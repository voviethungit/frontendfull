import React from 'react'
import Header from './Header';
import Banner from './Banner';
import Sale from './Sale';
import Content from './Content';
import Location from './Location';
import Post from './Post';
import Protect from './Protect';
import Instruct  from './Instruct';
import Aboutme from './Aboutme';
import Registercar from './Registercar';
import Blog from './Blog';
import Footer from './Footer';
const Main = () => {
  return (
    // Trang này là trang chính chỉ để import các thành phần từ các trang khác vào
    <div className='main'>
      <Header/>
      <Banner/>
      <Sale/>
      <Content/>
      <Location/>
      <Post/>
      <Protect/>
      <Instruct />
      <Aboutme/>
      <Registercar />
      <Blog />
      <Footer />
    </div>
  )
}

export default Main;