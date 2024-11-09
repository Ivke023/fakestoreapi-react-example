import React, {useContext} from 'react'

// import params
import { useParams } from 'react-router-dom';

// import cart context
import { CartContext } from '../contexts/CartContext';

// import product context
import { ProductContext } from '../contexts/ProductContext';

// import loading icon
import {IoMdTimer} from 'react-icons/io'

const ProductDetails = () => {
  // get the product by id
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  // get the single product
  const product = products.find((item) => {
    return item.id === parseInt(id);
  })

  // if product is not found
  if (!product) {
    return <section className='h-screen flex justify-center items-center'><IoMdTimer/></section>
  }

  // destructure product
  const { title,price,description,image } = product;

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className="container mx-auto">
        {/* image and text wrapper */}
        <div className='flex flex-col lg:flex-row items-center'>
          {/* image */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img src={image} alt={title} className='max-w-[200px] lg:max-w-sm'/>

            
          
          </div>
            {/* description */}
            <div className='flex-1 text-center lg:text-left'>
              <h2 className='text-[26px] font-medium max-w-[450px] mx-auto'>{title}</h2>
              <div className='text-xl text-red-500 font-medium mb-6'>$ {price}</div>
              <p className='mb-8'>{description}</p>
              <button onClick={() => addToCart(product,product.id)} className='bg-primary text-white py-4 px-8'>Add To Cart</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails