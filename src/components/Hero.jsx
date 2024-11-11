/* eslint-disable no-unused-vars */
import React from 'react';
import hero_1 from '../image/hero-1.jpg';
import hero_2 from '../image/hero-2.jpg';
import hero_3 from '../image/hero-3.jpg';
import hero_4 from '../image/hero-4.jpg';

const Hero = () => {
  return (
    <div className='grid lg:grid-rows-4 md:grid-rows-8 grid-rows-8 grid-flow-col h-[500px] gap-1 -z-10'>
      <a href='#' className='row-span-4 :row-span-4 border w-full relative overflow-hidden'>
        <img src={hero_1} alt='' className='w-full h-full object-cover brightness-[0.5] transform duration-500 hover:scale-110' />
        <div className='absolute bottom-2 p-5 lg:text-xl md:text-xs text-white text-sm'>Persiapan IFW 2024? Tokopedia Fashion Market x Indonesia Fashion Week Punya Kejutan Bua...</div>
      </a>
      <a href='#' className='border row-span-2 relative overflow-hidden'>
        <img src={hero_2} alt='' className='w-full h-full object-cover brightness-75 transform duration-500 hover:scale-110' />
        <div className='absolute bottom-1 p-5  lg:text-xl md:text-xs text-white text-sm'>Brand fesyen THENBLANK ciptakan peluang dalam negeri bersama Tokopedia</div>
      </a>
      <div href='#' className='grid grid-col-1 grid-flow-col gap-1 border row-span-2'>
        <a href='#' className='col-span-1 border relative overflow-hidden'>
          <img src={hero_3} alt='' className='w-full h-full object-cover  brightness-[0.5] transform duration-500 hover:scale-125' />
          <div className='absolute bottom-1  p-4 lg:text-xl md:text-xs text-white text-sm'>Implementasi AI di Tokopedia, dari Gudang Pintar</div>
        </a>
        <a href='#' className='col-span-1 border relative overflow-hidden'>
          <img src={hero_4} alt='' className='w-full h-full object-cover brightness-[0.5] transform duration-500 hover:scale-125' />
          <div className='absolute bottom-1  p-4  lg:text-xl md:text-xs text-white text-sm'>CPO Tokopedia Berbagi Cara menerapkan Data...</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
