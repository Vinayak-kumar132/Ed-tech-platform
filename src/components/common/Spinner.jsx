import React from 'react'
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
        <div className='spinner'></div>
        <p>Loading...</p>
      </div>
  )
}

export default Spinner