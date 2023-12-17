import React from 'react'
import Header from '../Header';
import Login from './Login';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';

function MainLogin() {
  return (
    <div className='mainlogin'>
       <Helmet>
        <title>Đăng nhập</title>
      </Helmet>
      <Header/>
      <Login />
      <Footer/>
    </div>
  )
}

export default MainLogin
