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
    <div className='text-white flex justify-center items-center mt-[150px]'>
      {
        loading ? (<div>
          Loading...
        </div>) : (
          <div>
            <h1>Verify email</h1>
            <p>A verification code has been sent to you.Enter the code below</p>
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
                renderInput={(props) => <input {...props} className='bg-richblack-800 text-richblack-400' />}

              />

              <button type='submit'>
                Verify Email
              </button>
            </form>

            <div>
              <div>
                <Link to="/login">
                  <div className='flex text-white items-center gap-2'>
                    <FaLongArrowAltLeft />
                    <p>Back to login</p>
                  </div>

                </Link>
              </div>

              <button onClick={() => dispatch(sendOtp(signUp.email,navigate))}>
                <div className='flex gap-2 text-richblack-5 items-center'>
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

