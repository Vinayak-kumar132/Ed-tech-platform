// import React from 'react'
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom'
// import IconBtn from '../../common/IconBtn';

// const MyProfile = () => {

//   const { user } = useSelector((state) => state.profile)
//   const navigate = useNavigate();


//   return (
//     <div className='text-white '>

//       <h1>
//         My profile
//       </h1>

//      {/* Section 1 */}
//       <div>
//         <div className=''>
//           <img src={user?.image} alt={`profile-${user.firstName}`}
//             className='aspect-square w-[78px] rounded-full object-cover '
//           />
//           <div>
//             <p>{user?.firstName + " " + user?.lastName}</p>
//             <p>{user?.email}</p>
//           </div>
//         </div>
//         <IconBtn
//           text="Edit"
//           onclick={() => {
//             navigate("/dashboard/settings")
//           }}
//         />
//       </div>

//       {/* section 2 */}
//       <div>
//         <div>
//           <p>About</p>
//           <IconBtn
//           text="Edit"
//           onclick={()=>{
//             navigate("/dashboard/settings")
//           }}
//           />
//         </div>
//         <p>Additional Details</p>
//       </div>



//     </div>
//   )
// }
//   export default MyProfile



import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconBtn from '../../common/IconBtn'
import { FiEdit } from "react-icons/fi";

const MyProfile = () => {

    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate();
    return (
       
        <div className='text-white w-[750px] ml-[100px] p-2'>

            <h1 className='text-2xl font-bold ml-[-100px]'>
                My Profile
            </h1>

            <div className='flex flex-col gap-10 mt-4'>

                {/* section 1 */}
                <div className='flex w-full justify-between bg-richblack-800 border border-richblack-700 rounded-md p-8  items-center'>
                    <div className='flex gap-2 items-center'>
                        <img
                            src={user?.image}
                            alt={`profile-${user?.firstName}`}
                            className='aspect-square w-[78px] rounded-full object-cover' />
                        <div className='flex flex-col'>
                            <p className='text-richblack-5 font-bold'> {user?.firstName + " " + user?.lastName} </p>
                            <p className='text-richblack-200'> {user?.email}</p>
                        </div>
                    </div>
                    <IconBtn
                        text="Edit"
                        onclick={() => {
                            navigate("/dashboard/settings")
                        }} >
                            <FiEdit />

                    </IconBtn>
                </div>

                {/* section 2 */}
                <div className='flex flex-col bg-richblack-800 rounded-md p-8 border border-richblack-700'>
                    <div className='flex w-full justify-between items-center text-center'>
                        <p className='text-lg font-bold text-richblack-100'>About</p>
                        <IconBtn
                            text="Edit"
                            onclick={() => {
                                navigate("/dashboard/settings")
                            }} >
                                <FiEdit />
                            </IconBtn>
                    </div>
                    <p> {user?.additionalDetails?.about ?? "Write Something about Yourself"}</p>
                </div>

                {/* section 3 */}
                <div className='flex flex-col gap-4 bg-richblack-800 rounded-md p-8 border border-richblack-700'>
                    <div className='flex justify-between  items-center'>
                        <p className='text-lg text-richblack-100 font-semibold'>Personal Details</p>
                        <IconBtn
                            text="Edit"
                            onclick={() => {
                                navigate("/dashboard/settings")
                            }} ><FiEdit /></IconBtn>
                    </div>
                    <div className='grid grid-cols-2 grid-rows-3 gap-4'>
                        <div>
                            <p className='text-richblack-200'>First Name</p>
                            <p className='text-richblack-25'>{user?.firstName}</p>
                        </div>
                        <div>
                            <p className='text-richblack-200'>Last Name</p>
                            <p className='text-richblack-25'>{user?.lastName}</p>
                        </div>
                        <div>
                            <p className='text-richblack-200'>Email</p>
                            <p className='text-richblack-25'>{user?.email}</p>
                        </div>
                        <div>
                            <p className='text-richblack-200'>Phone Number</p>
                            <p className='text-richblack-25'>{user?.additionalDetails?.contactNumber ?? "Add contact number"}</p>
                        </div>
                        <div>
                            <p className='text-richblack-200'>Gender</p>
                            <p className='text-richblack-25'>{user?.additionalDetails?.gender ?? "Add gender"}</p>
                        </div>
                       
                        
                        <div>
                            <p className='text-richblack-200'>Date of Birth</p>
                            <p className='text-richblack-25'>{user?.additionalDetails?.dateOfBirth ?? "Add date of birth"}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyProfile
