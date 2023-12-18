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
  const [toggleMenu,setToggleMenu] =useState(false);
  return (
    <div className="gpt3__navbar flex align-center justify-between">
      <div className="gpt__navbar-links grow justify-start aligns-center">
          <div className='gpt3__navbar-links_logo mr-8'>
              <img src={logo} alt="logo" className="h-4 w-[62.56px] " />
          </div>
          <div className='gpt3_navbar-links_container flex  '>
            <Menu/>
          </div>
          <div className='gpt3__navbar-sign'>
            <p className='flex justify-end items-center'>Sign in</p>
            <button type='button'>Sign up</button>
          </div>
      </div>
      <div className='gpt3_navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(false)} />
        }

        {toggleMenu &&
          <div className='gtp3__navbar-menu_container scale-up-center'>
            <div className="gpt3__navbar-menu_container_links">
              <Menu/>
            </div>
            <div className='gpt3__navbar-sign-menu_container-links-sign'>
              <p className='flex justify-end items-center'>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>

        }
      </div>
    </div>
  )
}

export default Navbar