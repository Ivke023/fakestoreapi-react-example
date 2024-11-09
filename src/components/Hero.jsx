import React from 'react'
// import images
import HeroImg from '../img/hero.jpg';
// import link
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <section className='bg-pink-200 h-[600px] bg-hero bg-no-repeat bg-center bg-cover py-24'>
      <div className="container mx-auto flex justify-center h-full">
        {/* text */}
        <div className='flex flex-col text-center items-center justify-center  bg-white opacity-40 p-24'>
          <h1 className='uppercase text-4xl text-primary'>Autumn sale - clothes and accessories</h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary p-2 mt-3'>
              Discover our products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero