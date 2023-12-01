import React from 'react';
import Header from '../Header';
import ContentProduct from './ContentProduct';
import Footer from '../Footer';
// import Saleof from '../Saleof';

function MainProduct() {
  return (
    <div className='mainproduct'>
      <Header/>
      <ContentProduct/>
      {/* <Saleof/> */}
      <Footer/>
    </div>
  )
}

export default MainProduct
