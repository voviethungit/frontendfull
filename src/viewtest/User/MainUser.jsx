import React from 'react';
import './css/mainuser.css';
import UserInfor from './UserInfor';
import Header from '../Home/Header';
import Footer from '../Home/Footer'



function MainUser() {
  return (
    <div className='mainuser'>
      <Header/>
      <UserInfor/>
      <Footer/>
    </div>
  )
}

export default MainUser
