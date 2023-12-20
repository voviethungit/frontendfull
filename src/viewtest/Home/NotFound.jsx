import React from 'react';

const NotFound = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '20px',
  };

  const textStyle = {
    fontSize: '1.5rem',
    color: '#666',
    marginBottom: '10px',
  };

  const developerStyle = {
    fontSize: '1rem',
    color: '#999',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>404 - Page Not Found</h1>
      <p style={textStyle}>Trang Không Tồn Tại!</p>
      <br />
      <br />
      <a href="/"> <p style={textStyle}>Quay Lại Trang Chủ</p></a>
      <br />
      <br />
      <br />
      <br />
      <p style={developerStyle}>DEVELOPER © 5AESIEUNHAN</p>
    </div>
  );
};

export default NotFound;
