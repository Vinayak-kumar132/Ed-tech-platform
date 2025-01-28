import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import HighlightText from '../components/core/HomePage/HighlightText'

import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'

const Home = () => {
    return (
        <div>
            {/*Section1  */}
            <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-between  mt-5'>

                <Link to={"/signup"}>
                    <div style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)", }}
                        className=' group mt-16 p-[2px] mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit'>
                        <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>

                </Link>

                <div className='text-center text-4xl font-semibold mt-7'>
                    Empower Your Future with
                    <HighlightText text={"Coding Skills"} color={"text-gradient"} />
                </div>

                <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                </div>

                <div className='flex flex-row gap-7 mt-8'>
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>

                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                <div className='mx-3 my-12 shadow-combined'>
                    <video
                        muted
                        loop
                        autoPlay
                    >
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>

                {/* Code Section 1 */}
                <div>
                    <CodeBlocks

                        position={"flex-col md:flex-row"}
                        heading={
                            <div className='text-4xl font-semibold '>
                                Unlock Your
                                <HighlightText text={"coding potential"} color={"text-gradient"} /><br></br>
                                with our online courses
                            </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={
                            {
                                btnText: "Try it Yourself",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "Learn More",
                                linkto: "/login",
                                active: false,
                            }
                        }

                        codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</\ntitle><linkrel="stylesheet"href="styles.css">\nhead>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
                        codeColor={"text-richblack-5"}
                        backgroudGradient={"blob-bg1"}
                    />
                </div>

                {/* Code Section 2 */}
                <div>
                    <CodeBlocks
                        position={"flex-col md:flex-row-reverse"}
                        heading={
                            <div className='text-4xl font-semibold'>
                                start
                                <HighlightText text={"coding"} color={"text-gradient"} /><br />
                                <HighlightText text={"in seconds"} color={"text-gradient"} />
                            </div>
                        }
                        subheading={
                            `Go ahead, give it a try. Our, hands-on learning environment means you'll be writing real code from your very first lesson.`
                        }
                        ctabtn1={
                            {
                                btnText: "Continue Lesson",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "Learn More",
                                linkto: "/login",
                                active: false,
                            }
                        }

                        codeblock={`<!DOCTYPE html>\n<html>\nhead><title>Example</\ntitle><linkrel="stylesheet"href="styles.css">\nhead>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</\na><ahref="three/">Three</a>\n/nav>`}
                        codeColor={"text-yellow-25"}


                        backgroudGradient={"blob-bg2"}
                    />
                </div>

                <ExploreMore />


            </div>

            {/*Section 2  */}
            <div className='bg-pure-greys-5 text-richblack-700'>
                <div className='homepage_bg h-[310px]'>

                    <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                        <div className='h-[150px]'></div>
                        <div className='flex flex-row gap-7 text-white '>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className='flex items-center gap-3' >
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>

                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                <div>
                                    Learn more
                                </div>
                            </CTAButton>
                        </div>

                    </div>


                </div>

                <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

                    <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
                        <div className='text-4xl font-semibold w-[45%]'>
                            Get the Skills you need for a
                            <HighlightText text={"Job that is in demand"} color={"text-gradient"} />
                        </div>

                        <div className='flex flex-col gap-10 w-[40%] items-start ml-14'>
                            <div className='text-[16px]'>
                                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div>
                                    Learn more
                                </div>
                            </CTAButton>
                        </div>

                    </div>



                    <TimelineSection />

                    <LearningLanguageSection />

                </div>



            </div>


            {/*Section 3 */}
            <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>
                <InstructorSection />

                <h2 className='text-center  font-edu-sa text-4xl font-semibold mt-10 '>Review from other learners</h2>
                <ReviewSlider/>
            
                
            </div>
            


            {/*Footer */}
            
            <Footer />
            

        </div>
    )
}

export default Home
