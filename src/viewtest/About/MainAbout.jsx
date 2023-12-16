import React from 'react';
import './css/mainabout.css';
import Header from '../Home/Header';
import AboutBlog from './AboutBlog';
import Footer from '../Home/Footer';
import { Helmet } from 'react-helmet';


const MainAbout = () => {
  return (
    <div className='mainabout'>
       <Helmet>
        <title>Về chúng tôi</title>
      </Helmet>
      <Header/>
      <AboutBlog/>
      <Footer/>
    </div>
  )
}

export default MainAbout;