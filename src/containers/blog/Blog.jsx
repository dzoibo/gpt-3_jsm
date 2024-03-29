import React from 'react';
import './blog.css';
import {blog1, blog2,blog3,blog4,blog5} from './import'
import { Article } from '../../components';
const Blog = () => {
  return (
    <div className='mx-8 ' id='blog' >
      <h1 data-aos="fade-up" className='max-w-[700px] my-[90px] py-5 gradient__text font-extrabold text-5xl sm:text-6xl' >A lot is happening, We are blogging about it.</h1>
      <div  className='flex flex-wrap md:flex-nowrap min-h-[690px] h-auto w-full gap-10'>

        <div data-aos="fade-up" className=' h-auto w-full md:w-2/5 relative text-white flex flex-col'>
          <div>
            <img src={blog1} alt="blog 1" className='h-[137px] sm:h-[287px] w-full' />
          </div>

          <div className=' p-6 pr-10  bg-[#042C54] flex flex-col justify-between  grow'>
            <div className=''>
              <div className='text-xs mb-3'>sept 26, 2021</div>
              <div className='font-extrabold text-2xl mb-6'>GPT-3 and Open  AI is the future. Let us explore how it is?</div>  
            </div>
            
            <div className=' text-xs cursor-pointer'>Read Full Article</div>
          </div>
        </div>

        <div className='flex flex-col gap-10 grow'>
          <div className='grow flex flex-wrap sm:flex-nowrap justify-between gap-10' >
            <div data-aos="fade-up" className='relative text-white flex flex-col'>
              <Article image={blog2} date={'sept 26, 2021'} contain={'GPT-3 and Open  AI is the future. Let us explore how it is?'}></Article>
            </div>

            <div  data-aos="fade-up"  className='grow relative text-white flex flex-col'>
              <Article image={blog3} date={'sept 26, 2021'} contain={'GPT-3 and Open  AI is the future. Let us explore how it is?'}></Article>
            </div> 
          </div>

          <div className='flex-wrap sm:flex-nowrap flex justify-between gap-10'>
            <div  data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='grow relative text-white flex flex-col'>
              <Article image={blog4} date={'sept 26, 2021'} contain={'GPT-3 and Open  AI is the future. Let us explore how it is?'}></Article>
            </div>

            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='grow relative text-white flex flex-col'>
              <Article image={blog5} date={'sept 26, 2021'} contain={'GPT-3 and Open  AI is the future. Let us explore how it is?'}></Article>
            </div>
          </div>
          
        </div>

      </div>
      
    </div>
  )
}

export default Blog