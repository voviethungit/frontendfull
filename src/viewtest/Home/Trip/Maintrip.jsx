import React from 'react';
import Trip from './Trip';
import Header from '../Header';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';

function Maintrip() {
  return (
    <div className='maintrip'>
       <Helmet>
        <title>Bảo hiểm</title>
      </Helmet>
      <Header/>
      <Trip/>
      <Footer/> 
    </div>
  )
}

export default Maintrip
