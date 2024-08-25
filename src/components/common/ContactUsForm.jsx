import React from 'react'
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import { apiConnector } from '../../services/apiconnector';
// import { contactusEndpoint } from '../../services/apis';
import CountryCode from "../../data/countrycode.json"

const ContactUsForm = () => {

    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm();

    const submitContactForm = async (data) => {
        console.log("Logging data", data);
        try {
            setLoading(true);
            // const response=await apiConnector("POST",contactusEndpoint.CONTACT_US_API,data);
            const response = { status: "OK" };
            console.log("Logging response", response);
            setLoading(false);


        } catch (error) {
            console.log("Error:", error.message);
            setLoading(false);

        }
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                firstname: "",
                lastname: "",
                message: "",
                phoneNo: "",

            })
        }
    }, [reset, isSubmitSuccessful])
    // reset function will change whenever the structute of form change in that case we als want to reset the form

    return (
        <form onSubmit={handleSubmit(submitContactForm)}>
            <div className='flex flex-col gap-8'>
                <div className='flex gap-5 '>

                    {/* first name */}
                    <div className='flex flex-col gap-1 text-richblack-25 flex-grow '>
                        <label htmlFor='firstname'>First Name</label>
                        <input
                            type='text'
                            name='firstname'
                            id='firstname'
                            placeholder='Enter first name'
                            className=' rounded-md px-6 py-4 text-richblack-100 bg-richblack-800 shadow-bottom outline-none'
                            {...register("firstname", { required: true })}
                        // register means maine hook ko bta diya ki iss field ke state ko maintain krna h aur iske upar given validation lagani h 
                        />
                        {
                            errors.firstname && (
                                <span>
                                    Please enter your firstname
                                </span>
                            )
                        }
                    </div>

                    {/* lastname */}
                    <div className='flex flex-col gap-1 text-richblack-25 flex-grow'>
                        <label htmlFor='lastname'>Last Name</label>
                        <input
                            type='text'
                            name='lastname'
                            id='lastname'
                            placeholder='Enter last name'
                            className='rounded-md px-6 py-4 text-richblack-100 bg-richblack-800 shadow-bottom outline-none'

                            {...register("lastname")}//it is optional so no require of error handling
                        />

                    </div>
                </div>


                {/* email */}
                <div className='flex flex-col gap-1 text-richblack-25 '>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        placeholder='Enter your Email'
                        className='rounded-md px-6 py-4 text-richblack-100 bg-richblack-800 shadow-bottom outline-none'

                        {...register("email", { required: true })}
                    />
                    {
                        errors.email && (
                            <span>
                                Enter your email
                            </span>
                        )
                    }
                </div>


                {/* phone number */}
                <div className='flex flex-col gap-1 text-richblack-25'>
                    <label htmlFor="phonenumber">Phone Number</label>

                    <div className='flex flex-row gap-5'>
                        {/* dropdown */}
                        
                            <select
                                name='dropdown'
                                id='dropdown'
                                className='w-[105px] rounded-md px-6 py-4 text-richblack-100 bg-richblack-800 shadow-bottom outline-none'
                                {...register("countrycode", { required: true })}
                            >
                                {
                                    CountryCode.map((element, index) => {
                                        return (
                                            <option key={index} value={element.code} className='bg-richblack-700 text-richblack-50'>
                                                {element.code} -{element.country}
                                            </option>
                                        )
                                    })

                                }
                            </select>
                       

                       
                            <input
                              type='number'
                              name='phonenumber'
                              id='phonenumber'
                              

                              placeholder='12345 67890'
                              className='rounded-md px-6 py-4 text-richblack-100 bg-richblack-800 shadow-bottom outline-none
                               w-[calc(100%-110px)]'
                              {...register("phoneNo",{
                                required:true,

                                require:{value:true,message:"Please enter phone number"},

                                maxLength:{value:10,message:"Invalid Phone number"},

                                minLength:{value:8,message:"Invalid Phone number"},
                            })}
                            />
                        

                    </div>
                    {
                        errors.phoneNo &&(
                            <span>
                                {errors.phoneNo.message}
                            </span>
                        )
                    }

                </div>







                {/* message */}

                <div className='flex flex-col gap-1 text-richblack-25 '>
                    <label htmlFor="message">Message</label>
                    <textarea
                        type='text'
                        name='message'
                        id='message'
                        cols='30'
                        rows='7'
                        placeholder='Enter your message here...'
                        className='rounded-md px-6 py-4 text-richblack-100 bg-richblack-800 shadow-bottom outline-none'
                        {...register("message", { required: true })}
                    />
                    {
                        errors.message && (
                            <span>
                                Please enter your message
                            </span>
                        )
                    }

                </div>

                <button type='submit' className='rounded-md bg-yellow-100 text-richblack-900 p-2 transition-all duration-200 hover:scale-95 font-semibold   '>
                    Send Message
                </button>




            </div>
        </form>
    )
}

export default ContactUsForm


