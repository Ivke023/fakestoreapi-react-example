import React, { useContext } from 'react'
// import Link
import { Link, BrowserRouter } from 'react-router-dom';
// import icons
import {IoMdAdd, IoMdClose, IoMdRemove} from 'react-icons/io';
// import cart context
import { CartContext } from '../contexts/CartContext';

const Item = ({item}) => {
  // use cart context
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);

  // destructure item
  const {id, title, image, price, amount} = item;

  return (
    <div className='flex gap-x-4 py-2 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <BrowserRouter>
          <Link to={`/product/${id}`}>
            <img className='max-w-[80px]' src={image} alt={title} />
          </Link>
          <div className='w-full flex flex-col'>
            {/* title and remove icon */}
            <div className='flex justify-between mb-2'>
              <Link to={`/product/${id}`} className='text-sm uppercase hover:underline font-medium max-w-[240px] text-primary'>
                {title}
              </Link>
              {/* remove from cart icon */}
              <div onClick={() => removeFromCart(id)} className='text-xl cursor-pointer'>
                <IoMdClose className='text-gray-500 hover:text-red-500 transition'/>
              </div>
            </div>
            <div className='flex gap-x-2 h-[36px] text-sm'>
              {/* quantity */}
              <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
                {/* minus icon */}
                <div onClick={() => decreaseAmount(id)} className='flex-1 h-full flex items-center justify-center cursor-pointer'>
                  <IoMdRemove/>
                </div>
                <div className='h-full flex items-center justify-center px-2'>
                {amount}
                </div>
                {/* plus icon */}
                <div onClick={() => increaseAmount(id)} className='flex-1 h-full flex items-center justify-center cursor-pointer'>
                  <IoMdAdd/>
                </div>
              </div>
              {/* item price */}
              <div className='flex-1 flex justify-around items-center'>
                $ {price}
              </div>
              {/* final price - rounded at 2 decimals */}
              <div className='flex-1 flex justify-end items-center text-primary font-medium'>
                {`$ ${parseFloat(price * amount).toFixed(2)}`}
              </div>
            </div> 
          </div>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default Item