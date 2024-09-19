import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { getPasswordResetToken } from '../Services/operations/authAPI';
import Spinner from '../components/common/Spinner';

const ForgotPassword = () => {
  const { loading } = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email,setEmailSent));
  }


 
  return (
    <div className='h-[calc(100vh-3.5rem)] flex justify-center items-center'>
      <div className='w-[508px] mx-auto p-10 '>
      {
        loading ? (<div>
          <Spinner/>
        </div>) :
          (
            <div className='flex flex-col gap-4'>
              <h1 className='text-2xl font-bold text-richblack-5'>
                {
                  !emailSent ? "Reset your password" : "Check your Email"
                }
              </h1>
              <p className='text-base text-richblack-200 '>{
                !emailSent ? "Have no fear,we'll email you instructions to reset your password.if you dont have access to your email we can try account recovery" : `We have sent the reset email to ${email} `
              }

              </p>
              <form onSubmit={handleOnSubmit}>
                {
                  !emailSent && (
                    <label>
                      <p className='text-richblack-50 font-lg'>Email Address <sup className='text-pink-200 font-bold'>*</sup></p>
                      <input required
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email address...'
                        className='w-full outline-none py-4 px-3 bg-richblack-800 text-richblack-5 rounded-lg shadow-bottom'
                      />
                    </label>
                  )
                }
                <button type='submit' className='text-center bg-yellow-50 text-richblack-900 py-3 hover:bg-yellow-100  w-full rounded-lg mt-8 font-bold'>
                  {
                    !emailSent ? "Reset Password" : "Resend Email"
                  }
                </button>
              </form>


              <div>
                <Link to="/login">
                  <div className='flex text-richblack-50 font-semiblod items-center gap-3 '>
                    <FaLongArrowAltLeft />
                    <p>Back to login</p>
                  </div>

                </Link>
              </div>

            </div>
          )
      }
    </div>
    </div>
    
  )
}

export default ForgotPassword