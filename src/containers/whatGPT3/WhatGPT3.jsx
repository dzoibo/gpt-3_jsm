import React from 'react';
import './whatGPT3.css'

const WhatGpt3 = () => {
  return (
    <div id='wgpt3' className='lg:pr-8 py-10 mt-32 sm:mt-20 mx-8 px-8 bg-[#0F4279] '>
      <div  className=' text-left flex justify-between flex-wrap gap-10 sm:flex-nowrap sm:gap-20 ' >
        <div>
          <div className='gpt3__item-bar'>
          </div>
          <div className='w-[160px] shrink-0 font-extrabold text-xl sm:text-2xl min-w-fit text-white'>
            What is GPT 3
          </div>
        </div>
        <div className=' text-left text-color-text'>
          We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
        </div>  
      </div>

      <div className='flex sm:my-16 flex-wrap sm:flex-nowrap my-12 gap-5 justify-between items-center'>
        <div className='gradient__text text-[34px] font-extrabold'>The possibilities are beyond your imagination</div>
        <div className="text-[#FF8A71] font-medium">Explore the Library</div>
      </div>

      <div className='flex gap-10 flex-wrap sm:flex-nowrap mt-10'>
        <div  >
          <div className='gpt3__item-bar'>
          </div>
          <div className='text-white font-extrabold  text-xl sm:text-2xl'>
            chatbots
          </div>
          <div className='mt-8 text-color-text'>
            We so opinion friends me message as delight. Whole front do of plate heard oh ought. 
          </div>
        </div>
        <div >
          <div className='gpt3__item-bar'>
          </div>
          <div className='font-extrabold text-xl text-white sm:text-2xl'>
            Knowledgebase
          </div>
          <div className='mt-8 text-color-text'>
            At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b
          </div>
        </div>
        <div >
          <div className='gpt3__item-bar'>
          </div>
          <div className=' text-white font-extrabold text-xl sm:text-2xl'>
            Education
          </div>
          <div className='mt-8 text-color-text'>
            At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b
          </div>
        </div>

      </div>
    </div>
  )
}

export default WhatGpt3