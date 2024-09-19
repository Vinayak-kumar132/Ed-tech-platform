import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { resetPassword } from '../Services/operations/authAPI';
import Spinner from "../components/common/Spinner"
import { IoIosCheckmarkCircle } from "react-icons/io";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })
  const { password, confirmPassword } = formData;
  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const handleOnChange = (e) => {
    setFormData((prevData) => (
      {
        ...prevData,
        [e.target.name]: e.target.value,
        //In an arrow function, if you're returning an object directly, you should wrap the object in parentheses to indicate it's an expression, not a block.
      }
    )
    )
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split('/').at(-1);
    dispatch(resetPassword(password, confirmPassword, token));
  }



  return (
    <div className='text-white flex  justify-center items-center h-screen mt-[-3.5rem] w-[508px] mx-auto'>
      {
        loading ? (
          <div>
            <Spinner />
          </div>
        ) :
          (
            <div className='flex flex-col gap-2'>
              <h1 className='text-2xl font-bold text-richblack-5'>Choose New password</h1>
              <p className='text-richblack-200'>
                Almost done.Enter your new password and youre all set.
              </p>

              <form onSubmit={handleOnSubmit} className='flex flex-col gap-4'>
                <label className='relative'>
                  <p>New Password<sup className='text-pink-300'>*</sup></p>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name='password'
                    value={password}
                    onChange={handleOnChange}
                    className=' p-3  shadow-bottom bg-richblack-700 text-richblack-5 outline-none rounded-md flex-grow w-full'
                  />
                  <span className='absolute right-1 top-[35px]'
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {
                      showPassword ? <AiFillEyeInvisible fontSize={24} /> : <AiFillEye fontSize={24} />
                    }
                  </span>

                </label>

                <label className='relative'>
                  <p>Confirm new password<sup className='text-pink-300'>*</sup></p>
                  <input
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleOnChange}
                    className='p-3 shadow-bottom bg-richblack-700 text-richblack-5 outline-none rounded-md w-full '

                  />
                  <span className='absolute right-1 top-[35px]'
                    onClick={() => setshowConfirmPassword((prev) => !prev)}>
                    {
                      showConfirmPassword ? <AiFillEyeInvisible fontSize={24} /> : <AiFillEye fontSize={24} />
                    }
                  </span>

                </label>

                <div className='grid grid-cols-2 grid-rows-3 gap-2'>
                  <div className='flex  text-caribbeangreen-300 items-center gap-1'>
                  <IoIosCheckmarkCircle className='text-xl '/>
                    <p>one lowercase character</p>
                  </div>

                  <div className='flex  text-caribbeangreen-300 items-center gap-1'>
                  <IoIosCheckmarkCircle className='text-xl '/>
                    <p>one special character</p>
                  </div>

                  <div className='flex  text-caribbeangreen-300 items-center gap-1'>
                  <IoIosCheckmarkCircle className='text-xl '/>
                    <p>one uppercase character</p>
                  </div>

                  <div className='flex  text-caribbeangreen-300 items-center gap-1'>
                  <IoIosCheckmarkCircle className='text-xl ' />
                    <p>8 character minimum</p>
                  </div>

                  <div className='flex text-caribbeangreen-300 items-center gap-1'>
                  <IoIosCheckmarkCircle className='text-xl ' />
                    <p>one number</p>
                  </div>

                </div>

                <button type="submit"
                  className='bg-yellow-100 rounded-md py-2 px-3 text-richblack-900 w-full font-bold hover:bg-yellow-200 transition-all duration-200 mt-2'>
                  Reset Password
                </button>

                

                <div>
                  <Link to="/login">
                    <div className='flex text-white items-center gap-2'>
                      <FaLongArrowAltLeft />
                      <p className='text-richblack-50 font-semibold text-medium'>Back to login</p>
                    </div>

                  </Link>
                </div>
              </form>
            </div>
          )
      }
    </div>
  )
}

export default UpdatePassword
