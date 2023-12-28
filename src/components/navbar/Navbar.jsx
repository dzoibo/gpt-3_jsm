import React, { useState } from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
const Menu=()=>(
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <div className=" flex  items-center justify-between ">
      <div className="gpt__navbar-links lg:pr-8 pr-0 pl-8  w-full flex justify-between items-center py-4">
          <div className='mr-8'>
              <img src={logo} alt="logo" className=" h-4 w-[62.56px] " />
          </div>
          <div className='gpt3__navbar-links_container flex '>
            <Menu/>
          </div>
          <div className=' gpt3__navbar-sign flex'>
            <p className='flex justify-end items-center'>Sign in</p>
            <button type='button'>Sign up</button>
          </div>
      </div>
      <div className='gpt3__navbar-menu sm:pr-8'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)} />
        }

        {toggleMenu &&
          <div className='bg-[#031B34] leading-9 absolute right-8 top-16 md:top-12 scale-up-center p-4'>
            <div className=" text-right text-white  w-28">
              <Menu/>
            </div>
            <div className='gpt3__navbar-sign-menu_container-links-sign flex-col items-end'>
              <p className='flex justify-end items-center text-white font-bold'>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar