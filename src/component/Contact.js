import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#0a192f] mt-[-20px]   w-full'>
        <div className='md:w-[40%] px-3 mx-auto '>
        <div className=" text-gray-300 px-3 w-full  mx-auto">
        <h1 className="border-pink-600 text-4xl mb-2 font-semibold  border-b-4 w-fit ">
          Contact
        </h1>
        <span className="text-base font-semibold text-gray-300 text-left">
          # Submit the form below or shoot me an email-khanmdjamil299@gmail.com
        </span>
      </div>

           <div className='mt-5'  >
            <input className='w-full mb-4 rounded-sm py-3 px-3 outline-none' type="text" placeholder='Name' />
            <input className='w-full mb-4 rounded-sm py-3 px-3 outline-none' type="email" placeholder='Email' />
             <textarea className='w-full mb-4 rounded-sm py-3 px-3 outline-none' name="" id="" placeholder='Message' cols="30" rows="10"></textarea>
              <button className=' border-2 rounded-sm text-gray-300 font-semibold hover:bg-pink-600 hover:border-pink-600 px-3 py-3 text-center items-center mx-auto'>Let's collabrate</button>
           
           </div>
        </div>
        

    </div>
  )
}

export default Contact