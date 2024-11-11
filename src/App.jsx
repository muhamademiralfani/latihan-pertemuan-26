/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import { data_section } from './utils/data';
import CardSection from './components/CardSection';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='flex flex-col w-screen justify-center items-center'>
      <Navbar />
      <div className='flex flex-col lg:w-[1100px] md:w-[500px] w-[350]px] justify-center overflow-hidden lg:mx-auto'>
        <Hero />
        {data_section.map((data, index) => {
          return (
            <Section key={index} section_title={data.title} milestone={data.milestone} founder={data.founder}>
              {data.card.map((item, index) => {
                return <CardSection key={index} src={item.src} title={item.title} date={item.date} />;
              })}
            </Section>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
