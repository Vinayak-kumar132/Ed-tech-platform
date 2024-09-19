import React from 'react'
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { TiArrowLoop } from "react-icons/ti";
import { signUp, sendOtp } from '../Services/operations/authAPI';
import { useNavigate, Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useState, useEffect } from 'react';


const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const { loading, signupData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      otp,
      navigate
    } = signupData;
    dispatch(signUp(accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      otp,
      navigate));
  }


  return (
    <div className='text-white flex justify-center items-center h-[calc(100vh-3.5rem)]'>
      {
        loading ? (<div>
          Loading...
        </div>) : (
          <div className='flex flex-col w-[508px] -mt-4 p-10 gap-3'>
            <h1 className='text-2xl font-bold text-richblack-5'>Verify email</h1>
            <p className='text-richblack-200'>A verification code has been sent to you.Enter the code below</p>
            <form onSubmit={handleOnSubmit}>
              <OTPInput

                // value={otp}
                // onChange={setOtp}
                // numInputs={6}
                // renderSeparator={<span>-</span>}
                // renderInput={(props) => (<input {...props} placeholder='-'
                // className='w-full p-6 bg-richblack-800 text-richblack-5'
                // />)}
               
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} className='w-full
        h-12
        bg-richblack-800 
        text-richblack-100 
        text-center 
        border-1 
        border-transparent
        rounded-md
        focus:border-yellow-200 
        focus:outline-none
        focus:ring-2 
        focus:ring-yellow-200
        transition-all
        duration-300 flex flex-grow shadow-bottom'/>}

              />

              <button type='submit'
              className='text-center w-full bg-yellow-100 text-richblack-900 font-bold rounded-md py-2 px-3 mt-6'>
                Verify Email
              </button>
            </form>

            <div className='flex justify-between'>
              <div>
                <Link to="/login">
                  <div className='flex text-white items-center gap-2'>
                    <FaLongArrowAltLeft />
                    <p>Back to login</p>
                  </div>

                </Link>
              </div>

              <button onClick={() => dispatch(sendOtp(signUp.email,navigate))}>
                <div className='flex gap-2 text-blue-100 items-center'>
                  <TiArrowLoop />
                  <p>Resend it</p>
                </div>
              </button>




            </div>
          </div>
        )
      }
    </div>
  )
}
export default VerifyEmail

