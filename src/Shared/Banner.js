import React from 'react';
import Header from './Header';

const Banner = () => {
    return (
        <div className='mx-auto'>
            <Header></Header>
              <div  >
              
                <img className='w-full rounded relative opacity-30' src="https://i.ibb.co/ZmLPh5Q/Phone-Exchange-2-Note-Codes.jpg" alt="Burger" />
                
                <div className='absolute text-center font-serif text-5xl px-5 text-primary shadow-xl font-extrabold top-[10%] lg:top-[50%] lg:left-[33%] '>
                <h1>Shop now anywhere <br /> anytime</h1>
                </div>
              
             
              </div>
        </div>
    );
};

export default Banner;