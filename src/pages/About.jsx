import React from 'react'
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


const About = () => {
    return (
        <div className='relative'>

            {/* Section 1 */}
            <section>
                <div className='bg-richblack-800 w-full h-[518px] '>
                    <p className='text-richblack-300 text-center pt-10 font-semibold'>About us</p>
                    <header className='text-richblack-25 text-center text-[36px] mt-10 font-semibold leading-10'>Driving Innovation in Online Education for a <br></br> <HighlightText text={"Brighter Future"} color={"text-gradient"} /></header>

                    <p className='text-richblack-300 flex-wrap md:w-[740px] text-center mx-auto mt-5 font-medium '>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>

                    <div className='absolute top-[300px] left-[50%] -translate-x-[50%] flex gap-[24px] justify-center items-center mt-14 flex-wrap lg:flex-nowrap '>
                        <img src={BannerImage1} width='384px' height='311px' alt='BI1' />

                        <img src={BannerImage2} height='311px' width='384px' alt='BI2' className='invisible lg:visible' />

                        <img src={BannerImage3} height='311px' width='384px' alt='BI3' className='invisible lg:visible'  />
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
                    <div className='flex flex-col w-[483px] h-[372px] gap-[24px]'>
                        <p className='font-semibold text-[36px]'><HighlightText text={"Our Founding Story "} color={"text-gradient-purple"} /></p>

                        <p className='text-richblack-300 font-medium'>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>


                        <p className='text-richblack-300 font-medium'>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
                    </div>

                    <div className='mr-14 h-[278px] w-[470px] shadow-md p-1'>
                        <img src={Image} alt=""  />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row gap-[200px] mt-[180px] mx-auto mb-24'>
                    <div className='flex flex-col gap-[24px] w-[486px] h-[144px]'>
                      <p className='font-semibold text-[36px]'><HighlightText text={"Our Vision"} color={"text-gradient-yellow"}/></p>
                      <p className='text-richblack-300'>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                    </div>

                    <div className='flex flex-col gap-[24px] w-[486px] h-[236px]'>
                    <p className='font-semibold text-[36px]'><HighlightText text={"Our Mission"} color={"text-gradient"}/></p>
                    <p className='text-richblack-300'>our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                    </div>
                </div>
            </div>
            </section>

            {/* section 4 */}
            <section>
                <div className='w-full  bg-richblack-800'>
                <Stats/>

                </div>
            </section>

            {/* section 5 */}
            <section>
                <div className='w-[1200px] mx-auto flex flex-col items-center justify-center gap-5'>
                <LearningGrid/>
                <ContactFormSection/>
                </div>
                
            </section>

            {/* section 6 */}
            {/* review slider -->H/W */}
            <div className='mt-20'>
                <h1 className='text-center text-[36px] font-semibold text-richblack-25'>Reviews from other learners</h1>
            </div>

            {/* section 7 */}
            <div className='mt-32'>
            <Footer/>
            </div>
            
            


        </div>
    )
}

export default About