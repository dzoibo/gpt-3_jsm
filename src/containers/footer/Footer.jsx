import React from 'react';
import logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  const currentYear=new Date().getFullYear();
  return (
    <div id='footer' className='flex flex-col items-center text-white mx-8'>
      <h1 className="mt-20  mb-16 gradient__text sm:text-[62px] text-4xl pr-4 sm:mt-[175px] sm:leading-[75px] font-extrabold max-w-[830px] "> Do you want to step in to the future before others
      </h1>
      <button className='md:mb-[180px] mb-[100px] h-16 w-[218px] text-giray outline-none border-white border'>
          Request Early Access
      </button>

      <div className='text-center sm:text-left flex text-sm text-giray md:gap-[162px] gap-20 flex-col items-center sm:flex-row justify-center'>
        <div className='flex flex-col sm:items-start items-center' >
          <img className='h-12 w-[118px] mb-4' src={logo} alt="logo" />
          <div>
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </div>
        </div>

        <ul>
          <li className='text-sm'>Links</li>
          <li>Overon</li>
          <li>Social Media</li>
          <li>Counters</li>
          <li>Contact</li>
        </ul>

        <ul >
          <li className='text-sm'>Company</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </ul>

        <ul >
          <li className='text-sm'>Get in touch</li>
          <li>Crechterwoord K12 182 DK Alknjkcb</li>
          <li>085-132567</li>
          <li>info@payme.net</li>
        </ul>
      </div>
      <div className='mt-20 text-center text-sm w-full mb-6'>© {currentYear} DZOIBO. All rights reserved.</div>
    </div>
  )
}

export default Footer