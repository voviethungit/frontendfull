import React from 'react';
import Trip from './Trip';
import Header from '../Header';
import Footer from '../Footer';

function Maintrip() {
  return (
    <div className='maintrip'>
      <Header/>
      <Trip/>
      <Footer/> 
    </div>
  )
}

export default Maintrip
