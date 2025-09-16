import React from 'react'
import Navbar from '../components/Navbar';
import Aboutsection1 from './About-us/Aboutsection1';
import Footer from './Footer';
const Aboutus = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '60px' }}>
        <Aboutsection1 />
        <Footer />
      </div>
    </>
  )
}

export default Aboutus
