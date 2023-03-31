import React from "react";
import aws from "../assets/aws.png";
import css from "../assets/css.png";
import firebase from "../assets/firebase.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import download from "../assets/download.png"
const Skill = () => {
  return (
    <div className="bg-[#0a192f] w-full py-40">
      <div className="w-full px-0">
        <div className=" text-gray-300 px-3 w-full md:w-[80%] mx-auto">
          <h1 className="border-pink-600 text-4xl mb-2 font-semibold  border-b-4 w-fit ">
            Skills
          </h1>
          <span className="text-base font-semibold text-gray-300 text-left">
            # these are the technologies i've worked with
          </span>
        </div>

        {/* all image slider skills  */}

        <div className="md:w-[70%] w-full  justify-between   text-gray-300 grid grid-cols-2  md:grid-cols-5 items-center mx-auto mt-10">
         <div className="mb-32 w-24  ml-12  text-center hover:scale-110 hover:cursor-pointer duration-500 transition-all">
         <img className=" " src={html} alt="" />
          <h1> HTML</h1>
         </div>
         <div className="mb-32 w-24  ml-12  text-center  hover:scale-110 hover:cursor-pointer duration-500 transition-all ">
           <img className="mb-2 " src={css} alt="" />
          <h1>CSS</h1>
         </div>
         <div className="mb-32 w-24  ml-12  text-center  hover:scale-110 hover:cursor-pointer duration-500 transition-all">
          <img className=" mb-2" src={javascript} alt="" />
           <h1>JAVASCRIPT</h1>
         </div>
         <div className="mb-32 w-24  ml-12  text-center  hover:scale-110 hover:cursor-pointer duration-500 transition-all">
          <img className="mb-2" src={firebase} alt="" />
           <h1>FIREBASE</h1>
         </div>
         <div className="mb-32 w-24  ml-12  text-center hover:scale-110 hover:cursor-pointer duration-500 transition-all ">
          <img className="mb-2 " src={github} alt="" />
           <h1>GitHub</h1>
         </div>
           <div className="mb-32 w-24  ml-12  text-center hover:scale-110 hover:cursor-pointer duration-500 transition-all ">
          <img className="mb-2 " src={react} alt="" />
            <h1>REACT</h1>
           </div>
           <div className="mb-32 w-24  ml-12  text-center hover:scale-110 hover:cursor-pointer duration-500">
          <img className="mb-2 " src={tailwind} alt="" />
            <h1>Tailwind </h1>
           </div>
           <div className="mb-32 w-24  ml-12  text-center hover:scale-110 hover:cursor-pointer duration-500">
          <img className=" mb-2" src={node} alt="" />
            <h1>NODE JS</h1>
           </div>
           <div className="mb-32 w-24  ml-12  text-center hover:scale-110 hover:cursor-pointer duration-500 transition-all ">
          <img className=" mb-2" src={aws} alt="" />
            <h1>AWS</h1>
           </div>
           <div className="mb-32 w-24  ml-12  text-center hover:scale-110 hover:cursor-pointer duration-500 transition-all ">
          <img className=" mb-2" src={download} alt="" />
            <h1>Next js</h1>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
