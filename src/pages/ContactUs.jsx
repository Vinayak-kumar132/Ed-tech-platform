import React from 'react'
import ContactUsForm from '../components/common/ContactUsForm'
import Footer from '../components/common/Footer'
import { IoMdChatboxes } from "react-icons/io";
import { TiWorld } from "react-icons/ti";
import { MdCall } from "react-icons/md";
import {motion} from "framer-motion"

const ContactUs = () => {
    return (
        <div className='flex flex-col '>

            <div className='flex flex-col lg:flex-row mx-auto mt-28 gap-10 w-[1200px] mb-32'>

                <motion.div className='flex flex-col gap-8 w-[450px] h-[390px] bg-richblack-800 rounded-lg  p-8'
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 100,   //it determines how fast the spring snaps back to its original position.Higher values results quicker animation and Lower values create a softer animation.
                        damping: 10,      //it controls how much the spring oscillates or bounces before settling.Higher values results more damping, which slows down the animation.so lower values is better.
                        delay: 0.4,
                    }}>

                    <div className='flex gap-2'>
                        <div className='text-2xl text-richblack-25'>
                            <IoMdChatboxes />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold text-richblack-25 '>Chat on us</h1>
                            <p className='text-richblack-300'>Our friendly team is here to help.<br></br>@mail address
                            </p>
                        </div>

                    </div>


                    <div className='flex gap-2'>
                        <div className='text-2xl text-richblack-25'>
                            <TiWorld />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold text-richblack-25 '>Visit us</h1>
                            <p className='text-richblack-300'>Come and say hello at our office HQ.Here is the location/ address</p>
                        </div>
                    </div>



                    <div className='flex gap-2'>
                        <div className='text-2xl text-richblack-25'>
                            <MdCall />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold text-richblack-25 '>Call us</h1>
                            <p className='text-richblack-300'>Mon - Fri From 8am to 5pm <br></br>+123 456 7890</p>
                        </div>

                    </div>

                </motion.div>


                <div className='text-richblack-25 rounded-lg border border-richblack-600 p-12 '>

                    <h1 className=' text-[36px] font-semibold'>Got a Idea? We’ve got the skills. Let’s team up</h1>

                    <p className=' text-richblack-400 mb-8 font-medium'>Tell us more about yourself and what you’re got in mind.</p>

                    <div>
                        <ContactUsForm />
                    </div>

                </div>

            </div>


            {/* review slider */}

            <div>
                <Footer />
            </div>

        </div>
    )
}

export default ContactUs