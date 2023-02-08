import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div>
         <div data-aos="zoom-in" className='flex justify-center mt-36 items-center'>
        <HashLoader
          color="#004680"
          size={100}
        />
      </div>
        </div>
    );
};

export default Loading;