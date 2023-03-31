import React from "react";
import { BsArrowRight } from 'react-icons/bs';
const About = () => {
  return (
    <div className="w-full text-gray-300 h-screen bg-[#0a192f] flex justify-center ">
      <div className="w-[80%] font-farmmm ml-20  my-20 ">
        <span className="text-pink-600 text-lg">Hey my name is</span>
        <h1 className="text-7xl ">md jamirul</h1>
        <h2 className="w-full text-[#8892B0] text-7xl">
          I'm a Full Font End Developer.
        </h2>
        <p className="text-lg w-[70%] text-[#808AA7] mt-5">
          i'm a full font-end developerer specializing in building and
          occasionally designing onn exceptional digital experiences currently.
          i'm focused on building responsive full website design for any
          website.
        </p>

        <div className="mt-3">
          <button className="border-2 rounded-sm hover:bg-pink-600 duration-300 transition-all  hover:border-pink-600 text-lg items-center group  px-4 py-2 flex gap-3 border-gray-300 ">view work <BsArrowRight className="group-hover:rotate-90 transition-all "/> </button>
        </div>
      </div>
    </div>
  );
};

export default About;
