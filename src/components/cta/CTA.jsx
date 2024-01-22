import React from 'react';
import './cta.css'

const CTA = () => {
  return (
   
      <div data-aos="fade-up" className='mx-8 flex-wrap sm:flex-nowrap rounded-[10px] gap-4 flex p-6 sm:p-8 items-center justify-center sm:justify-between border border-black min-h-[170px]' style={{'background': 'linear-gradient(90deg, #AE67FA 1.84%, #F49867 102.67%)'}}>
        <div>
          <div className='text-xs text-[#0E0E0E] mb-2 font-medium'>Request Early Access to Get Started</div>
          <div className='text-lg sm:text-2xl text-black font-extrabold'>Register today & start exploring the endless possiblities.</div>
        </div>
        <div className=' rounded-[48px] text-white w-[190px] h-[60px] flex justify-center items-center rounded-10 bg-black'>
          Get started
        </div>
      </div>
  )
}

export default CTA