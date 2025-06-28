import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/footer';

const BasicLayout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default BasicLayout;
