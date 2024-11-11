/* eslint-disable no-unused-vars */
import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full border-b-2 shadow-sm lg:flex md:hidden hidden mb-5'>
      <div className='flex flex-col justify-between items-center py-5 shadow-sm lg:w-[1100px] md:w-[500px] w-[500px]  mx-auto'>
        <h1 className='w-full text-5xl text-green-400'>tokopedia</h1>
        <ul className='flex w-full mt-20 font-bold text-xl relative'>
          <li className='px-7 py-5 border-b-4 border-white hover:border-b-4 hover:border-blue-300'>
            <a href=''>Home</a>
          </li>

          <li className='px-7 py-5 flex items-center border-b-4 border-white hover:border-b-4 hover:border-blue-300  group'>
            <a href=''>Company</a>
          </li>

          {/* Dropdown for Community */}
          <li className='px-7 py-5 flex items-center border-b-4 border-white hover:border-b-4 hover:border-blue-300 relative group'>
            <a href=''>Community</a>
            <svg className='w-4 h-4 ml-1' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M19 9l-7 7-7-7'></path>
            </svg>
            <div className='absolute hidden group-hover:block top-full left-0 bg-white text-base py-5 px-2 font-normal  mt-1'>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:text-blue-400'>
                Seller Story
              </a>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:text-blue-400'>
                Life at Tokopedia
              </a>
            </div>
          </li>

          <li className='px-7 py-5 flex items-center border-b-4 border-white hover:border-b-4 hover:border-blue-300 relative group'>
            <a href=''>Stories</a>
            <svg className='w-4 h-4 ml-1' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M19 9l-7 7-7-7'></path>
            </svg>
            <div className='absolute hidden group-hover:block w-60 top-full left-0 bg-white text-base py-5 px-2 font-normal   mt-1'>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:text-blue-400'>
                Behind The Scene
              </a>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:text-blue-400'>
                Inovation
              </a>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:text-blue-400'>
                Milstone
              </a>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:text-blue-400'>
                Operation
              </a>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:text-blue-400'>
                Product
              </a>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:text-blue-400'>
                Social Impact
              </a>
            </div>
          </li>

          <li className='px-7 py-5 flex items-center border-b-4 border-white hover:border-b-4 hover:border-blue-300 relative group'>
            <a href=''>Insight</a>
            <svg className='w-4 h-4 ml-1' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M19 9l-7 7-7-7'></path>
            </svg>
            <div className='absolute hidden group-hover:block top-full left-0 bg-white text-base py-5 px-2 font-normal  mt-1'>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:text-blue-400'>
                Behind The Scene
              </a>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:text-blue-400'>
                Inovation
              </a>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:text-blue-400'>
                Milstone
              </a>
            </div>
          </li>

          <li className='px-7 py-5 flex items-center border-b-4 border-white hover:border-b-4 hover:border-blue-300'>
            <a href='' className='flex'>
              TopList
            </a>
          </li>

          {/* Dropdown for NewsRoom */}
          <li className='px-7 py-5 flex items-center border-b-4 border-white hover:border-b-4 hover:border-blue-300 relative group'>
            <a href='' className=''>
              NewsRoom
            </a>
            <svg className='w-4 h-4 ml-1' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M19 9l-7 7-7-7'></path>
            </svg>
            <div className='absolute hidden group-hover:block top-full left-0 bg-white text-base py-5 px-2 font-normal  mt-1'>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:text-blue-400'>
                Behind The Scene
              </a>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:text-blue-400'>
                Inovation
              </a>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:text-blue-400'>
                Milstone
              </a>
            </div>
          </li>

          {/* Dropdown for Kalku */}
          <li className='px-7 py-5 flex items-center border-b-4 border-white hover:border-b-4 hover:border-blue-300 relative group'>
            <a href=''>Kalku</a>
            <svg className='w-4 h-4 ml-1' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path d='M19 9l-7 7-7-7'></path>
            </svg>
            <div className='absolute hidden group-hover:block top-full left-0 bg-white text-base py-5 px-2 font-normal  mt-1'>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:text-blue-400'>
                Kalkulator
              </a>
          
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
