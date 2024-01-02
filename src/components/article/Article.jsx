import React from 'react';
import './article.css'

const Article = (props)=>{
  const {image,date,contain}=props;
  return (
    <>
      <div>
        <img src={image} alt="blog 2" className='h-[137px] w-full' />
      </div>

      <div className=' p-6 pr-10  bg-[#042C54] flex flex-col justify-between  grow'>
        <div className=''>
          <div className='text-xs mb-3'>{date}</div>
          <div className='font-extrabold text-xl sm:text-2xl mb-6'>{contain}</div>  
        </div>
        
        <div className=' text-xs cursor-pointer'>Read Full Article</div>
      </div>
    </>
  )
}

export default Article