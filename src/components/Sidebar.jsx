import React, { useContext } from 'react';
// import link
import { BrowserRouter, Link, Router } from 'react-router-dom';
// import icons
import {IoMdArrowForward} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi';
// import components
import Item from '../components/Item';
// import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const {sidebarOpen, handleSidebarClose} = useContext(SidebarContext);
  const {cart,clearCart,total} = useContext(CartContext);

  return (
    <div className={`${sidebarOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between border-b py-6'>
        <div className='uppercase font-semibold text-sm'>Shopping Cart (0)</div>
        {/* icons */}
        <div onClick={handleSidebarClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>

      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return <Item key={item.id} item={item} />
        })}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          {/* total */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span> $ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div onClick={() => clearCart()} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
            <FiTrash2/>
          </div>
          
         
        </div>
        <BrowserRouter>
            <Link to={'/'} className='bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium'>View Cart</Link>
            <Link onClick={() => {clearCart(); alert("You successully checked out")}} className='bg-primary flex p-4 justify-center items-center text-white w-full font-medium'>Checkout</Link>
          </BrowserRouter>
      </div>
    </div>
  )
}

export default Sidebar