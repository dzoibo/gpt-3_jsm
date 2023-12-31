import React from 'react';
import './features.css'

const Features = () => {
  return (
    <div className='text-left relative flex gap-[100px] my-[100px] mx-8 sm:flex-nowrap sm:justify-between justify-center flex-wrap'>
      <div className='blur-radius  -z-10'>

      </div>
      <div className='max-w-[420px] '>
        <div className='mb-[34px] text-[34px] gradient__text font-extrabold'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</div>
        <div className='text-[#FF8A71] '>Request Early Access to Get Started</div>
      </div>

      <div className='gpt3__features-item flex flex-col grow gap-10 '>
        <div className='flex gap-12 sm:gap-[100px] '>
          <div className='text-lg gpt3__features-item_main'>
            <div className='gpt3__item-bar'></div>
            <div>Improving end distrusts instantly </div>
          </div>
          <div className='gpt3__features-item_detail'>
            From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.
          </div>
        </div>

        <div className='flex gap-12 sm:gap-[100px] '>
          <div  className='text-lg gpt3__features-item_main'> 
            <div className='gpt3__item-bar'></div>
            <div className='text-lg'>Become the tended active </div>
          </div>
          <div className='text-lg gpt3__features-item_detail'>
            Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.
          </div>
        </div>

        <div className='flex gap-12 sm:gap-[100px] '>
          <div  className='text-lg gpt3__features-item_main'>
            <div className='gpt3__item-bar'></div>
            <div className='text-lg'>Message or am nothing </div>
          </div>
          <div  className='text-lg gpt3__features-item_detail'>
            Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.
          </div>
        </div>

        <div className='flex gap-12 sm:gap-[100px] '>
          <div className='text-lg gpt3__features-item_main'>
            <div className='gpt3__item-bar'></div>
            <div className='text-lg'>Really boy law county </div>
          </div>
          <div className='text-lg gpt3__features-item_detail'>
            Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.
          </div>
        </div>

      </div>
    </div>
  )
}

export default Features