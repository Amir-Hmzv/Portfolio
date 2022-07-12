import React from 'react';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
    return (
        <div className='w-full h-screen text-center ' id='main'>
            <div className='max-w-[1240px] h-full w-full  p-2 mx-auto flex justify-center items-center'>
                <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I'm <span className='text-[#5651e5] '> Clint</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I’m a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaFacebook />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaInstagram />
                </div>
          </div>
                </div>
            </div>
        </div>
    );
};

export default Main;