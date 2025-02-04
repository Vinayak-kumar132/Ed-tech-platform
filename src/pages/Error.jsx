import React from 'react'
import error from '../assets/Logo/error.svg'
import { Link } from "react-router-dom";

const Error = () => {
  return (
    // <div className=" flex justify-center items-center h-screen font-extrabold mt-[-56px] text-2xl text-richblack-100">
    //     Error - 404 Not Found</div>
    <div className=' flex items-center w-full justify-center h-[calc(100vh-4rem)] gap-16 mx-auto'>
      <div className='flex flex-col place-items-start gap-4 flex-wrap w-[412px]'>
        <p className='text-white text-3xl font-semibold'>Oops! The page you were looking for doesn’t exist.</p>

        <p className='text-richblack-100'>You may have mistyped the address or the page may have moved.</p>

        {/* <button className="bg-[#007FFF] hover:bg-[#0066b2] p-3 rounded-lg text-white">Back to Homepage</button> */}
        <Link to="/" className=" bg-yellow-25 text-richblack-900 hover:bg-yellow-200 duration-200 border-yellow-200 border-2 px-4 py-3 rounded-lg font-semibold
        ">
          Back to Homepage
        </Link>
        

      </div>

      <div className='hidden md:block'>
        <img src={error} alt="errorLogo" loading='lazy' className='' />
      </div>


    </div>
  )
}

export default Error