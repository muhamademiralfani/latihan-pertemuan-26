/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Children } from 'react';
import pers_1 from '../image/pers-1.jpg';
import pers_2 from '../image/pers-2.jpg';
import pers_3 from '../image/pers-3.jpg';
import CardSection from './CardSection';
import ButtonSection from './ButtonSection';

const Section = ({ section_title, milestone = '', founder = '', children }) => {
  return (
    <div className='flex flex-col gap-y-10 justify-center '>
      <div className='flex justify-between mt-4 border-b-2 border-green-500'>
        <div className='bg-green-500 py-1 px-3 text-white'>
          <span>{section_title}</span>
        </div>
        <div className='flex text-gray-400'>
          <a className='mx-4'>{milestone}</a>
          <a className='mx-4'>{founder}</a>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-around mt-10 gap-10 lg:px-4 px-8 md:px-8'>{children}</div>
      <ButtonSection />
    </div>
  );
};

export default Section;
