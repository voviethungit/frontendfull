import React from 'react';
import './css/mainabout.css';
import Header from '../Home/Header';
import AboutBlog from './AboutBlog';
import Footer from '../Home/Footer';


const MainAbout = () => {
  return (
    <div className='mainabout'>
      <Header/>
      <AboutBlog/>
      <Footer/>
    </div>
  )
}

export default MainAbout;