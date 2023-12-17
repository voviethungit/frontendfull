import React from 'react';
import './css/mainuser.css';
import UserInfor from './UserInfor';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import { Helmet } from 'react-helmet';



function MainUser() {
  return (
    <div className='mainuser'>
       <Helmet>
        <title>Người dùng</title>
      </Helmet>
      <Header/>
      <UserInfor/>
      <Footer/>
    </div>
  )
}

export default MainUser
