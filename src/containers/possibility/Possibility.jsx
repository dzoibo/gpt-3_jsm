import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';


const Possibility = () => {
  return (
    <>
      <div className=' flex flex-wrap items-end justify-center sm:justify-between sm:flex-nowrap gap-3 mb-[50px] sm:mb-[100px] mx-8'>
        <div className='mb-5'>
          <img src={possibilityImage} className='max-h-[680px] ' alt="possibility" />
        </div>
        <div>
          <div className='text-[#71E5FF] font-medium'>
            Request Early Access to Get Started
          </div>
          <div className='gradient__text font-extrabold text-2xl mt-2.5 sm:text-[34px] '>
            The possibilities are beyond your imagination
          </div>
          <div className='text-color-text leading-9 mb-9 mt-6'>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </div>
          <div className='text-subtext font-medium leading-9'>
            Request Early Access to Get Started
          </div>
        </div>
      </div>
      <div className='mx-8 flex-wrap sm:flex-nowrap rounded-[10px] gap-4 flex p-6 sm:p-8 items-center justify-center sm:justify-between border border-black min-h-[170px]' style={{'background': 'linear-gradient(90deg, #AE67FA 1.84%, #F49867 102.67%)'}}>
        <div>
          <div className='text-xs text-[#0E0E0E] mb-2 font-medium'>Request Early Access to Get Started</div>
          <div className='text-lg sm:text-2xl text-black font-extrabold'>Register today & start exploring the endless possiblities.</div>
        </div>
        <div className=' rounded-[48px] text-white w-[190px] h-[60px] flex justify-center items-center rounded-10 bg-black'>
          Get started
        </div>
      </div>
    </>
    

  )
}

export default Possibility