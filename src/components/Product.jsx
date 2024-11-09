import React, {useContext} from 'react';
// import Link
import { Link } from 'react-router-dom';
// import icons
import {BsPlus,BsEyeFill} from 'react-icons/bs';
// import cart context
import { CartContext } from '../contexts/CartContext';

const Product = ({product}) => {
  const {addToCart} = useContext(CartContext);
 
  // destructure product
  const {id, title, category, image, price} = product;
  return (
    <div>
      <div className='border border-gray-200 h-[300px] mb-4 relative overflow-hidden group transition'>
        {/* img */}
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img src={image} alt={title} className='max-h-[160px] group-hover:scale-110 transition duration-300'/>
          </div>
        </div>
        {/* buttons */}
        <div className='absolute top-6 right-11 group-hover:right-5 bg-blue-500/40 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center w-12 h-12 text-white bg-blue-500'>
            <BsPlus className='text-3xl'/>
            </div>
          </button>
          <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
            <BsEyeFill/>
          </Link>
        </div>
      </div>
      {/* category, title and price */}
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
          <h3 className='font-semibold mb-1'>{title}</h3>
        </Link>
        <div className='font-semibold'>$ {price}</div>
      </div>
    </div>
  )
}

export default Product