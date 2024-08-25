import React from 'react'
import HighlightText from '../HomePage/HighlightText';
import CTAButton from "../../core/HomePage/Button";

const LearningGridArray = [
    {
        order: -1,
        heading: "World-Class Learning for",
        highlightText: "Anyone, Anywhere",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
        BtnText: "Learn More",
        BtnLink: "/",
    },
    {
        order: 1,
        heading: "Curriculum Based on Industry Needs",
        description:
            "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
        order: 2,
        heading: "Our Learning Methods",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
        order: 3,
        heading: "Certification",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
        order: 4,
        heading: `Rating "Auto-grading"`,
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
        order: 5,
        heading: "Ready to Work",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
];

const LearningGrid = () => {
    return (
        <div className='grid mx-auto grid-col-1 lg:grid-cols-4 mb-10 mt-32'>
            {
                LearningGridArray.map((card, index) => {
                    return (
                        <div key={index}
                            className={`${index === 0 && "lg:col-span-2 lg:h-[280px] p-5"}
                        ${card.order % 2 === 1 ? "bg-richblack-700 lg:h-[280px] p-5" : "bg-richblack-800 lg:h-[280px] p-5"
                                }
                        ${card.order === 3 && "lg:col-start-2"}
                        ${card.order < 0 && "bg-transparent"}
                        `}>
                            {
                                card.order < 0 ?
                                    (
                                        <div className='flex lg:w-[90%] flex-col gap-[12px] w-[568px] h-[268px] pb-5'>
                                            <h1 className='text-richblack-100 font-semibold text-[36px]'>
                                                {card.heading}<br></br><HighlightText text={card.highlightText} color={"text-gradient"} />
                                            </h1>
                                            <p className='text-richblack-300'>{card.description}</p>

                                            <div className='w-fit'>
                                                <CTAButton active={true} linkto={card.BtnLink}>
                                                    {card.BtnText}</CTAButton>
                                            </div>

                                        </div>) :
                                    (
                                        <div>
                                            <div className='flex flex-col gap-[32px] p-[32px]'>
                                                <h1 className='text-richblack-50 font-semibold'>{card.heading}</h1>
                                                <p className='text-richblack-300 flex flex-wrap'>{card.description}</p>



                                            </div>
                                        </div>
                                    )
                            }


                        </div>
                    )
                })
            }

        </div>
    )
}

export default LearningGrid