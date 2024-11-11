/* eslint-disable no-unused-vars */
import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-center sm:flex-col-reverse w-full bg-[#E4EBF5] mt-40'>
      <div className='text-gray-500 flex lg:flex-row-reverse md:flex-col flex-col  justify-between text-sm lg:w-[1200px] md:w-[500px] w-[500px] px-10 mx-auto py-10 text-center'>
        <ul className='flex flex-wrap gap-x-4 lg:flex-row md:flex-row  md:flex-wrap  md:justify-center md:text-center md:items-center text-center items-center'>  
          <li>
            <a href=''>Tentang Kami</a>
          </li>
          <li>
            <a href=''>Pusat Penjual</a>
          </li>
          <li>
            <a href=''>Mobile Apps</a>
          </li>
          <li>
            <a href=''>Mitra</a>
          </li>
          <li>
            <a href=''>Karir</a>
          </li>
          <li>
            <a href=''>Tokopedia Care</a>
          </li>
          <li>
            <a href=''>B2B Digital</a>
          </li>
        </ul>
        <span className='text-sm mt-2 lg:mt-0 md:mt-0'>© 2009-2024, PT Tokopedia</span>
      </div>
    </div>
  );
};

export default Footer;
