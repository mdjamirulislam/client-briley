import React from "react";
import { BsArrowRight } from 'react-icons/bs';
const About = () => {
  return (
    <div className="w-full text-gray-300 h-screen bg-[#0a192f] flex justify-center ">
      <div className="w-[80%] font-farmmm md:ml-20  my-20 ">
        <span className="text-pink-600 md:text-lg text-sm">Hey my name is</span>
        <h1 className="md:text-7xl text-5xl mb-3 ">md jamirul</h1>
        <h2 className="w-full text-[#8892B0] text-4xl  md:text-7xl">
          I'm a Full Font End Developer.
        </h2>
        <p className="md:text-lg w-full text-base font-semibold   md:w-[70%] text-[#808AA7] mt-5">
          i'm a full font-end developerer specializing in building and
          occasionally designing onn exceptional digital experiences currently.
          i'm focused on building responsive full website design for any
          website.
        </p>

        <div className="mt-3">
          <button className="border-2 rounded-sm hover:bg-pink-600 font-semibold duration-300 transition-all  hover:border-pink-600 text-lg items-center group  px-4 py-2 flex gap-3 border-gray-300 ">view work <BsArrowRight size={20} className="group-hover:rotate-180 transition-all "/> </button>
        </div>
      </div>
    </div>
  );
};

export default About;
