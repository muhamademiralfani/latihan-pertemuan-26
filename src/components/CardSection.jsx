/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const CardSection = ({ src, title, date }) => {
  return (
    <div className='flex flex-col w-full gap-5 '>
      <img src={src} alt='' className='rounded  w-full object-cover' />
      <div>
        <h4 className='text-[16px] lg:text-[20px] md:text-[20px] font-bold'>{title}</h4>
        <span className='flex mt-2 text-gray-400'>{date}</span>
      </div>
    </div>
  );
};

export default CardSection;
