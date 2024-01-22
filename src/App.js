import './App.css';
import React , { useEffect } from 'react';
import {Footer ,Features, Blog , Possibility , Header, WhatGP3} from './containers'
import {CTA, Brand, Navbar} from './components';
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1100,
      ease: "ease-out",
      anchorPlacement: "bottom-bottom"
    });
    AOS.refresh();
  }, []);
  return (
    <div >
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGP3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
