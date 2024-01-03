import React from 'react';
import './brand.css'
import {google, slack,atlassian,dropbox,shopify} from './import'

const Brand = () => {
  return (
    <div className='px-8 w-full flex gap-11 flex-wrap justify-center'>
      <div data-aos="fade-up">
        <img src={google} alt="google" />
      </div>
      <div data-aos="fade-up" data-aos-delay="100">
        <img src={slack} alt="slack" />
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        <img src={atlassian} alt="atlassian" />
      </div>
      <div data-aos="fade-up" data-aos-delay="300">
        <img src={dropbox} alt="dropbox" />
      </div>
      <div data-aos="fade-up" data-aos-delay="400">
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand