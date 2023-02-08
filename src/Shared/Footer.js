import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  }
  return (
      <footer className="footer items-center p-2 mx-auto bg-neutral text-neutral-content">
  <div className="items-center grid-flow-col">
  <img onClick={navigateToHome} className='w-10' src="https://i.ibb.co/KNv2VgZ/527-5274855-replace-icon-change-icon-removebg-preview.png" alt="" />
        <p>Copyright © 2023 - All right reserved</p>
  </div> 
  <div className="grid-flow-col md:place-self-center md:justify-self-end">
  <a className="link mr-1 link-hover" href='https://www.facebook.com/SrSohan2748' target='blank'> <FaFacebookSquare className='text-4xl'></FaFacebookSquare> </a>
          <a className="link link-hover" href='https://github.com/sohan284' target='blank'><AiFillGithub className='text-4xl'></AiFillGithub> </a>
          <a className="link link-hover" href='https://www.linkedin.com/in/sr-sohan-1621a0199/' target='blank'><AiFillLinkedin className='text-4xl'></AiFillLinkedin> </a></div>
</footer>
  );
};
export default Footer;