import React from 'react'
import { motion } from "framer-motion";
import HighlightText from "../components/core/HomePage/HighlightText"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import { Quote } from '../components/core/AboutPage/Quote'
import Image from "../assets/Images/FoundingStory.png"
import Stats from "../components/core/AboutPage/Stats"
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import ContactFormSection from '../components/core/AboutPage/ContactFormSection'
import Footer from "../components/common/Footer"
import ReviewSlider from '../components/common/ReviewSlider';


const About = () => {
    return (
        <div className='relative'>

            {/* Section 1 */}
            <section>
                <div className='bg-richblack-800 w-full h-[518px] '>
                    <motion.p
                        className="text-richblack-300 text-center pt-10 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        About us
                    </motion.p>
                    <motion.header
                        className="text-richblack-25 text-center text-[36px] mt-10 font-semibold leading-10"
                        // initial={{ opacity: 0, y: 100 }}
                        // animate={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 0.5, delay: 0.2 }}
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                          delay: 0.5,
                        }}
                    >
                        Driving Innovation in Online Education for a <br />
                        <HighlightText text={"Brighter Future"} color={"text-gradient"} />
                    </motion.header>

                    <motion.p
                        className="text-richblack-300 flex-wrap md:w-[740px] text-center mx-auto mt-5 font-medium"
                        // initial={{ opacity: 0, y: 100 }}
                        // animate={{ opacity: 1, y: 0 }}
                        // transition={{ duration: 0.5, delay: 0.2 }}
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                          delay: 0.5,
                        }}
                    >
                        Studynotion is at the forefront of driving innovation in online
                        education. We're passionate about creating a brighter future by
                        offering cutting-edge courses, leveraging emerging technologies,
                        and nurturing a vibrant learning community.
                    </motion.p>

                    <div className='absolute top-[300px] left-[50%] -translate-x-[50%] flex gap-[24px] justify-center items-center mt-14 flex-wrap lg:flex-nowrap '>
                        {/* <img src={BannerImage1} width='384px' height='311px' alt='BI1' /> */}
                        <motion.img
                            src={BannerImage1}
                            width="384px"
                            height="311px"
                            alt="BI1"
                            initial={{ opacity: 0, x: -100 }} // Initial state (hidden and off-screen to the left)
                            whileInView={{ opacity: 1, x: 0 }} // Animate when the image comes into view
                            viewport={{ once: true, amount: 0.5 }} // Trigger only once when 50% of the image is visible
                            transition={{ duration: 0.5 }} // Animation duration
                        />

                        {/* <img src={BannerImage2} height='311px' width='384px' alt='BI2' className='invisible lg:visible' /> */}
                        <motion.img
                            src={BannerImage2}
                            height="311px"
                            width="384px"
                            alt="BI2"
                            className="invisible lg:visible"
                            initial={{ opacity: 0, y: 100 }} // Starts below the screen
                            whileInView={{ opacity: 1, y: 0 }} // Moves to its original position and becomes visible
                            viewport={{ once: true, amount: 0.5 }} // Triggers animation when 50% is in view, runs once
                            transition={{ duration: 0.5 }} // Smooth transition over 1 second
                        />

                        <motion.img
                            src={BannerImage3}
                            height="311px"
                            width="384px"
                            alt="BI3"
                            className="invisible lg:visible"
                            initial={{ opacity: 0, x: 100 }} // Initially off-screen to the right
                            whileInView={{ opacity: 1, x: 0 }} // Animates to full visibility and its position
                            viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the image is in view, runs only once
                            transition={{ duration: 0.5 }} // Animation duration set to 1 second
                        />
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section>
                <div className='mt-[300px]'>
                    <Quote />
                </div>

            </section>

            {/* section 3 */}
            <section>
                <div className='flex flex-col mt-[200px] '>
                    <div className='flex flex-col lg:flex-row gap-[200px] mx-auto justify-center items-center'>
                        <motion.div className='flex flex-col w-[483px] h-[372px] gap-[24px]'
                            initial={{ opacity: 0, x: -100 }} // Starts off-screen to the right
                            whileInView={{ opacity: 1, x: 0 }} // Animates to its normal position and becomes visible
                            viewport={{ once: true, amount: 0.5 }} // Triggers when 50% of the div is in view, runs once
                            transition={{ duration: 0.5 }}
                        >
                            <p className='font-semibold text-[36px]'><HighlightText text={"Our Founding Story "} color={"text-gradient-purple"} /></p>

                            <p className='text-richblack-300 font-medium'>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>


                            <p className='text-richblack-300 font-medium'>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
                        </motion.div>

                        <motion.div
                            className="mr-14 h-[278px] w-[470px] shadow-md p-1"
                            initial={{ opacity: 0, x: 100 }} // Starts off-screen to the right
                            whileInView={{ opacity: 1, x: 0 }} // Animates to its normal position and becomes visible
                            viewport={{ once: true, amount: 0.5 }} // Triggers when 50% of the div is in view, runs once
                            transition={{ duration: 0.5 }} // Animation duration set to 0.5 seconds
                        >
                            <img src={Image} alt="" />
                        </motion.div>
                    </div>

                    <div className='flex flex-col lg:flex-row gap-[200px] mt-[180px] mx-auto mb-24'>
                        <motion.div className='flex flex-col gap-[24px] w-[486px] h-[144px]'
                        initial={{ opacity: 0, x: -100 }} // Starts off-screen to the right
                        whileInView={{ opacity: 1, x: 0 }} // Animates to its normal position and becomes visible
                        viewport={{ once: true, amount: 0.5 }} // Triggers when 50% of the div is in view, runs once
                        transition={{ duration: 0.5 }}>
                            <p className='font-semibold text-[36px]'><HighlightText text={"Our Vision"} color={"text-gradient-yellow"} /></p>
                            <p className='text-richblack-300'>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                        </motion.div>

                        <motion.div className='flex flex-col gap-[24px] w-[486px] h-[236px]'
                        initial={{ opacity: 0, x: 100 }} // Starts off-screen to the right
                        whileInView={{ opacity: 1, x: 0 }} // Animates to its normal position and becomes visible
                        viewport={{ once: true, amount: 0.5 }} // Triggers when 50% of the div is in view, runs once
                        transition={{ duration: 0.5 }}>
                            <p className='font-semibold text-[36px]'><HighlightText text={"Our Mission"} color={"text-gradient"} /></p>
                            <p className='text-richblack-300'>our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* section 4 */}
            <section>
                <div className='w-full  bg-richblack-800'>
                    <Stats />

                </div>
            </section>

            {/* section 5 */}
            <section>
                <div className='w-[1200px] mx-auto flex flex-col items-center justify-center gap-5'>
                    <LearningGrid />
                    <ContactFormSection />
                </div>

            </section>

            {/* section 6 */}
            {/* review slider -->H/W */}
            <div className='mt-20 flex flex-col justify-center items-center'>
                <h1 className='text-center font-edu-sa text-[36px] font-semibold text-richblack-5'>Reviews from other learners</h1>
                <div>
                <ReviewSlider/>
                </div>
                
            </div>

            {/* section 7 */}
            <div className='mt-20'>
                <Footer />
            </div>
        </div>
    )
}

export default About