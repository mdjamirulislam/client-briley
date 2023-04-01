import React from "react";

const Work = () => {
  return (
    <div className="w-full bg-[#0a192f]  ">
      <div className=" text-gray-300 px-3 w-full md:w-[80%] mx-auto">
        <h1 className="border-pink-600 text-4xl mb-2 font-semibold  border-b-4 w-fit ">
          Work
        </h1>
        <span className="text-base font-semibold text-gray-300 text-left">
          # Check out some of my recent work
        </span>
      </div>
      {/* background image slider work my me at home */}
      <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2     my-5  lg:w-[80%] md:w-[100%]  mx-auto">
        <div className="back-1 !w-full !h-[250px] sm:w-[300px] sm:h-[200px] !md:w-[350px] !md:h-[250px] mb-5 group duration-500 hover:cursor-pointer ">
          <div className=" bg-teal-200 z-10 group-hover:w-full group-hover:rounded-lg group-hover:duration-500  group-hover:h-full ">
              <div className="hidden group-hover:flex     ">
                <div className="items-center text-center m-auto mt-20 text-2xl text-pink-500 font-semibold"> 
                <h1 className="w-full">React Js Application</h1>
                <div className="flex gap-3 w-full text-center items-center mt-3 ml-7 mx-auto">
                <button className="px-2 py-2  bg-white rounded-md text-black">Code</button>
                <button className="px-2 py-2  bg-white rounded-md text-black">Live</button>
                </div>
                </div>
              </div>
          </div>
        </div>
        {/* secend iamge slider wrapper background image */}
        <div className="back-2 !w-full !h-[250px] !md:w-[350px] !md:h-[250px]  mb-5 group duration-500 hover:cursor-pointer ">
          <div className=" bg-teal-200 z-10 group-hover:w-full group-hover:rounded-lg group-hover:duration-500  group-hover:h-full ">
              <div className="hidden group-hover:flex     ">
                <div className="items-center text-center m-auto mt-20 text-2xl text-pink-500 font-semibold"> 
                <h1 className="w-full">React Js Application</h1>
                <div className="flex gap-3 w-full text-center items-center mt-3 ml-7 mx-auto">
                <button className="px-2 py-2  bg-white rounded-md text-black">Code</button>
                <button className="px-2 py-2  bg-white rounded-md text-black">Live</button>
                </div>
                </div>
              </div>
          </div>
        </div>
        <div className="back-1 !w-full !h-[250px] !md:w-[350px] !md:h-[250px]  mb-5 group duration-500 hover:cursor-pointer ">
          <div className=" bg-teal-200 z-10 group-hover:w-full group-hover:rounded-lg group-hover:duration-500  group-hover:h-full ">
              <div className="hidden group-hover:flex     ">
                <div className="items-center text-center m-auto mt-20 text-2xl text-pink-500 font-semibold"> 
                <h1 className="w-full">React Js Application</h1>
                <div className="flex gap-3 w-full text-center items-center mt-3 ml-7 mx-auto">
                <button className="px-2 py-2  bg-white rounded-md text-black">Code</button>
                <button className="px-2 py-2  bg-white rounded-md text-black">Live</button>
                </div>
                </div>
              </div>
          </div>
        </div>
        <div className="back-2 !w-full !h-[250px] !md:w-[350px] !md:h-[250px]  mb-5 group duration-500 hover:cursor-pointer ">
          <div className=" bg-teal-200 z-10 group-hover:w-full group-hover:rounded-lg group-hover:duration-500  group-hover:h-full ">
              <div className="hidden group-hover:flex     ">
                <div className="items-center text-center m-auto mt-20 text-2xl text-pink-500 font-semibold"> 
                <h1 className="w-full">React Js Application</h1>
                <div className="flex gap-3 w-full text-center items-center mt-3 ml-7 mx-auto">
                <button className="px-2 py-2  bg-white rounded-md text-black">Code</button>
                <button className="px-2 py-2  bg-white rounded-md text-black">Live</button>
                </div>
                </div>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
