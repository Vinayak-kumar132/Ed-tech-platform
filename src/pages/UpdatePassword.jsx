import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { resetPassword } from '../Services/operations/authAPI';

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
    <div className='text-white'>
      {
        loading ? (
          <div>Loading...</div>
        ) :
          (
            <div>
              <h1>Choose New password</h1>
              <p>
                Almost done.Enter your new password and youre all set.
              </p>
              <form onSubmit={handleOnSubmit}>
                <label>
                  <p>New Password<sup>*</sup></p>
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name='password'
                    value={password}
                    onChange={handleOnChange}
                    className='w-full p-6 bg-richblack-600 text-richblack-5'
                  />
                  <span onClick={() => setShowPassword((prev) => !prev)}>
                    {
                      showPassword ? <AiFillEyeInvisible fontSize={24} /> : <AiFillEye fontSize={24} />
                    }
                  </span>

                </label>

                <label>
                  <p>Confirm new password<sup>*</sup></p>
                  <input
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleOnChange}
                    className='w-full p-6 bg-richblack-600 text-richblack-5'

                  />
                  <span onClick={() => setshowConfirmPassword((prev) => !prev)}>
                    {
                      showConfirmPassword ? <AiFillEyeInvisible fontSize={24} /> : <AiFillEye fontSize={24} />
                    }
                  </span>

                </label>
                <button type="submit">
                  Reset Password
                </button>
                <div>
                  <Link to="/login">
                    <div className='flex text-white items-center gap-2'>
                      <FaLongArrowAltLeft />
                      <p>Back to login</p>
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
