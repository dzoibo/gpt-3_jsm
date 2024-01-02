import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';


const Possibility = () => {
  return (
    <div id='possibility' className=' flex flex-wrap items-end justify-center sm:justify-between sm:flex-nowrap gap-3 mb-[50px] sm:mb-[100px] mx-8'>
      <div className='mb-5'>
        <img src={possibilityImage} className='max-h-[680px] min-w-[300px] ' alt="possibility" />
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
  )
}

export default Possibility