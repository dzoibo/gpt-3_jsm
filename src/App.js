import './App.css';
import React from 'react';
import {Footer , Blog , Possibility, Feature , Header, WhatGP3} from './containers'
import {CTA, Brand, Navbar} from './components';
import './App.css'

function App() {
  return (
    <div>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGP3/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
