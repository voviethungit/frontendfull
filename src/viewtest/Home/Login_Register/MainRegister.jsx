import React from 'react'
import Header from '../Header';
import Register from './Register';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';

function MainRegister() {
  return (
    <div className='mainregister'>
       <Helmet>
        <title>Đăng ký</title>
      </Helmet>
      <Header/>
      <Register />
      <Footer/>
    </div>
  )
}

export default MainRegister;
