import React from 'react';

// Importing components
import Navbar from '../components/Navbar';
import Component1 from '../components/homecomponents/component1';
import Component2 from '../components/homecomponents/component2';
import Component3 from '../components/homecomponents/component3';
import MajorProjects from '../components/homecomponents/Majorprojects';
import Component4 from '../components/homecomponents/component4';
import Component5 from '../components/homecomponents/component5';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Component1 />
      <Component2 />
      <Component3 />
      <MajorProjects />
      <Component4 />
      <Component5 />
      <Footer />
    </>
  );
};

export default Home;
