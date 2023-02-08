import React from 'react';
import Header from './Header';

const Banner = () => {
    return (
        <div>
            <Header></Header>
              <div data-aos="zoom-in" class=" w-[100%]">
                <img className='w-full rounded-lg' src="https://i.ibb.co/s24VNj8/Phone-Exchange-2-Note-Codes.jpg" alt="Burger" />
            </div>
        </div>
    );
};

export default Banner;