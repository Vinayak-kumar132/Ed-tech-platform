import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { getPasswordResetToken } from '../Services/operations/authAPI';

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
    <div className=' flex flex-col justify-center items-center text-white '>
      {
        loading ? (<div>Loading...</div>) :
          (
            <div>
              <h1>
                {
                  !emailSent ? "Reset your password" : "Check your Email"
                }
              </h1>
              <p>{
                !emailSent ? "Have no fear,we'll email you instructions to reset your password.if you dont have access to your email we can try account recovery" : `We have sent the reset email to ${email} `
              }

              </p>
              <form onSubmit={handleOnSubmit}>
                {
                  !emailSent && (
                    <label>
                      <p>Email Address*</p>
                      <input required
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter Your Email Address'
                        className='w-full p-6 bg-richblack-600 text-richblack-5'
                      />
                    </label>
                  )
                }
                <button type='submit'>
                  {
                    !emailSent ? "Reset Password" : "Resend Email"
                  }
                </button>
              </form>


              <div>
                <Link to="/login">
                  <div className='flex text-white items-center gap-2'>
                    <FaLongArrowAltLeft />
                    <p>Back to login</p>
                  </div>

                </Link>
              </div>
            </div>
          )
      }
    </div>
  )
}

export default ForgotPassword