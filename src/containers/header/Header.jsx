import React from 'react';
import './header.css'
import ai from '../../assets/ai.png';
import people from '../../assets/people.png'


const Footer = () => {
  return (
    <div className='items-center lg:flex-row lg:items-start flex-col flex lg:pr-8 px-8  mb-[80px] md:mb-[100px]' id='home'>
      <div className='mb-8 sm:text-xl text-l sm:mt-[120px] mt-12 text-left gpt3__header-content'>
        <h1 className="mb-[33px] gradient__text sm:text-[62px] text-4xl pr-4 sm:leading-[75px] font-extrabold ">Let's Build Something
          amazing with GPT-3
          OpenAI
        </h1>
        <div className='text-color-text  text-left mb-10 '> 
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </div>

        <div className='h-12 sm:h-[73px] flex mb-[38px] '>
          <input className='w-28 h-full outline-0 rounded-l-lg  grow flex items-center pl-8 placeholder:text-[#3D6184] bg-[#052D56] ' type="text" placeholder='Your Email Address' />
          <button className='w-32 h-full  sm:w-[174px] flex items-center justify-center  outline-0 border-0 text-white font-bold  bg-[#FF4820] rounded-r-lg'>
            Get Started
          </button>
        </div>

        <div className='sm:flex-row flex-col sm:gap-4 gap-2 flex items-center'>
          <img src={people} alt="requester" />
          <div className='text-white text-xs text-center'>1600 people requested access a visit in last 24 hours</div>
        </div>
      </div>
      <div className=' gpt3__header-image'>
        <img src={ai} alt="logo" className="sm:min-w-[467px] sm:h-[500px] w-[420px] h-[340px] mb-5" />
      </div>
     
    </div>
  )
}

export default Footer