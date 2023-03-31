import React, { useState } from 'react';
import {FaBars,FaTimes, FaGithub,FaLinkedin,} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=' '>
       <div className='flex  justify-between  px-5 py-5  bg-[#0a192f] '>
        <div className='font-farmm text-pink-600 text-4xl '>
          <h1>md jamirul</h1>
        </div>
        <div className=''>
        <ul className='hidden md:flex text-gray-300 gap-4   '>
        <li className='text-lg capitalize hover:cursor-pointer hover:text-pink-600 font-semibold transition-all duration-300'>
          <Link to='home'  duration={500}>
            Home
          </Link>
        </li>
        <li className='text-lg capitalize hover:cursor-pointer hover:text-pink-600 font-semibold transition-all duration-300'>
          <Link to='about'  duration={500}>
            About
          </Link>
        </li>
        <li className='text-lg capitalize hover:cursor-pointer hover:text-pink-600 font-semibold transition-all duration-300'>
          <Link to='skills'  duration={500}>
            Skills
          </Link>
        </li>
        <li className='text-lg capitalize hover:cursor-pointer hover:text-pink-600 font-semibold transition-all duration-300'>
          <Link to='work'  duration={500}>
            Work
          </Link>
        </li>
        <li className='text-lg capitalize hover:cursor-pointer hover:text-pink-600 font-semibold transition-all duration-300'>
          <Link to='contact'  duration={500}>
            Contact
          </Link>
        </li>
      </ul>
         
         {/* Hamburger */}
      
        
       </div>
        



      {/* Mobile menu */}
      <div className={!nav ? 'hidden' : 'absolute md:hidden top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
      <ul
        
      >
        <li className='py-6 text-gray-300 hover:text-pink-600  text-4xl '>
          <Link onClick={handleClick} to='home'  duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-gray-300 hover:text-pink-600  text-4xl'>
         
          <Link onClick={handleClick} to='about'  duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-gray-300 hover:text-pink-600  text-4xl'>
          
          <Link onClick={handleClick} to='skills'  duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-gray-300 hover:text-pink-600  text-4xl'>
          
          <Link onClick={handleClick} to='work'  duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-gray-300 hover:text-pink-600  text-4xl'>
         
          <Link onClick={handleClick} to='contact'  duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      </div>
      <div onClick={handleClick} className='md:hidden text-2xl text-pink-600 z-10'>
        {!nav ? <FaBars   /> : <FaTimes  />}
      </div>
        </div>
      

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] px-3 duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] px-3 duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] px-3 duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] px-3 duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Home;

