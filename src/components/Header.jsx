import React, { useContext, useState } from 'react'
// import context
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
// import icons 
import {BsBag} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo
import Logo from '../img/logo.svg';


const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  const {sidebarOpen, setSidebarOpen} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);

  // event listener
  window.addEventListener('scroll', () => {
    window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
  });

  return (
    <header className={`${isActive ? 'bg-white shadow-md' : 'bg-white opacity-40'} fixed w-full z-10 transition-all min-h-60px flex items-center justify-normal`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
    
          
            <div>
              <Router>
                <Link to={'/'}>
                <img className='w-[40px] p-2' src={Logo} alt='Home'/>
                </Link>
              </Router>
            </div>
            
       
        
        
        <div onClick={() => setSidebarOpen(!sidebarOpen)} className='cursor-pointer flex relative'>
          <BsBag className='text-2xl'/>
          <div className='bg-blue-500 absolute -right-2 -bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
        </div>
        
      </div>
    </header>
  )
}

export default Header